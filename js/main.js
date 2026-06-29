document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form[data-form]");

  forms.forEach(form => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formType = form.getAttribute("data-form");
      const submitBtn = form.querySelector("button[type='submit']");
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "Submit";

      // Prevent duplicate submission
      if (form.classList.contains("submitting")) return;
      form.classList.add("submitting");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="loading-spinner"></span> Processing...`;
      }

      // Remove any existing error message
      const existingError = form.querySelector(".error-message-inline");
      if (existingError) existingError.remove();

      try {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          // If checkbox, convert to boolean
          if (form.elements[key] && form.elements[key].type === "checkbox") {
            data[key] = form.elements[key].checked;
          } else {
            data[key] = value;
          }
        });

        // Determine API endpoint
        let endpoint = `/api/${formType}`;
        if (formType === "registration") {
          endpoint = "/api/register";
        }
        
        // Submit request
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Something went wrong. Please try again.");
        }

        // Handle specific form responses
        if (formType === "registration") {
          // Registration success: Now initialize payment
          if (submitBtn) {
            submitBtn.innerHTML = "Initializing Payment...";
          }

          const payInitResponse = await fetch("/api/initialize-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              registration_id: result.registration_id,
              reference: result.reference
            })
          });

          const payInitResult = await payInitResponse.json();

          if (!payInitResponse.ok) {
            throw new Error(payInitResult.error || "Failed to initialize payment gateway.");
          }

          // Redirect to Paystack
          window.location.href = payInitResult.authorization_url;
          return;
        }

        // Default Success Behavior: Show the success panel
        const wrapper = form.parentElement;
        const success = wrapper ? wrapper.querySelector(".success-panel") : null;
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        form.classList.add("form-submitted");
        form.reset();

      } catch (error) {
        console.error("Submission error:", error);
        
        // Display error message
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message-inline";
        errorDiv.style.color = "#ff4d4d";
        errorDiv.style.marginTop = "10px";
        errorDiv.style.fontSize = "0.9rem";
        errorDiv.style.fontWeight = "500";
        errorDiv.textContent = error.message;
        
        if (submitBtn) {
          submitBtn.parentNode.insertBefore(errorDiv, submitBtn);
        } else {
          form.appendChild(errorDiv);
        }
      } finally {
        form.classList.remove("submitting");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  });
});
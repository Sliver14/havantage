// Inject custom Toast notification styles
const toastStyles = `
.havantage-toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}
.havantage-toast {
  pointer-events: auto;
  min-width: 300px;
  max-width: 400px;
  background: rgba(7, 27, 51, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transform: translateX(120%);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
  opacity: 0;
  font-family: 'Inter', sans-serif;
}
.havantage-toast.show {
  transform: translateX(0);
  opacity: 1;
}
.havantage-toast-icon {
  color: #00e676;
  font-size: 1.4rem;
  line-height: 1;
}
.havantage-toast-content {
  flex-grow: 1;
}
.havantage-toast-title {
  font-weight: 700;
  font-size: 0.95rem;
  margin: 0;
  color: #00e676;
}
.havantage-toast-message {
  font-size: 0.85rem;
  margin: 4px 0 0 0;
  color: #e0e0e0;
  line-height: 1.4;
}
.havantage-toast-close {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0;
  line-height: 1;
  margin-top: 2px;
}
.havantage-toast-close:hover {
  color: #fff;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = toastStyles;
document.head.appendChild(styleSheet);

// Function to show Toast Notification
function showToast(title, message) {
  let container = document.querySelector(".havantage-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "havantage-toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "havantage-toast";
  toast.innerHTML = `
    <div class="havantage-toast-icon">✓</div>
    <div class="havantage-toast-content">
      <div class="havantage-toast-title">${title}</div>
      <div class="havantage-toast-message">${message}</div>
    </div>
    <button class="havantage-toast-close">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Dismiss function
  const dismiss = () => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  };

  toast.querySelector(".havantage-toast-close").addEventListener("click", dismiss);

  // Auto-dismiss
  setTimeout(dismiss, 4000);
}

function initFormHandler() {
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

          // Trigger registration success toast before redirecting
          showToast("Registration Saved!", "Redirecting you to the Paystack checkout gateway...");
          
          setTimeout(() => {
            window.location.href = payInitResult.authorization_url;
          }, 1000);
          return;
        }

        // Toast Messages for general forms
        if (formType === "contact") {
          showToast("Message Sent!", "Thank you. Your message has been received.");
        } else if (formType === "newsletter") {
          showToast("Subscribed!", "You have successfully subscribed to our newsletter.");
        } else if (formType === "consultation") {
          const formTypeVal = data.form_type;
          if (formTypeVal === "hire_talent") {
            showToast("Request Received!", "We have received your talent request and will follow up shortly.");
          } else if (formTypeVal === "join_talent_network") {
            showToast("Profile Registered!", "Thank you for joining the Havantage talent network.");
          } else {
            showToast("Request Received!", "Your corporate support request has been submitted successfully.");
          }
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFormHandler);
} else {
  initFormHandler();
}
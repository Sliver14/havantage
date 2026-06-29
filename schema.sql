-- Database schema for Havantage Platform

-- 1. Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    reason VARCHAR(255),
    message TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- 2. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- 3. Consultations Table (Corporate Support Requests)
CREATE TABLE IF NOT EXISTS consultations (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    work_email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    organisation VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    support_needed VARCHAR(255) NOT NULL,
    team_size VARCHAR(100),
    timeline VARCHAR(100),
    challenge TEXT NOT NULL,
    preferred_contact VARCHAR(100) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_consultations_work_email ON consultations(work_email);

-- 4. Registrations Table
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    location VARCHAR(255) NOT NULL,
    program VARCHAR(255) NOT NULL,
    career_stage VARCHAR(255) NOT NULL,
    interest_reason TEXT NOT NULL,
    preferred_format VARCHAR(100) NOT NULL,
    source VARCHAR(255),
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    payment_status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed
    payment_reference VARCHAR(100) UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_ref ON registrations(payment_reference);

-- 5. Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    reference VARCHAR(100) NOT NULL UNIQUE,
    registration_id INTEGER REFERENCES registrations(id) ON DELETE SET NULL,
    amount NUMERIC(10, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'NGN',
    status VARCHAR(50) DEFAULT 'pending', -- pending, success, failed
    gateway_response JSONB
);

CREATE INDEX IF NOT EXISTS idx_payments_ref ON payments(reference);

-- 6. Hire Talent Requests Table
CREATE TABLE IF NOT EXISTS hire_talent_requests (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organisation VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    work_email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    role_needed VARCHAR(255) NOT NULL,
    skills_required TEXT NOT NULL,
    engagement_type VARCHAR(100) NOT NULL,
    start_date VARCHAR(100),
    notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_hire_talent_email ON hire_talent_requests(work_email);

-- 7. Talent Network Profiles Table
CREATE TABLE IF NOT EXISTS talent_network_profiles (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    current_role VARCHAR(255) NOT NULL,
    interest_area VARCHAR(255) NOT NULL,
    skills TEXT NOT NULL,
    portfolio TEXT,
    availability VARCHAR(100) NOT NULL,
    job_type VARCHAR(100) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_talent_network_email ON talent_network_profiles(email);

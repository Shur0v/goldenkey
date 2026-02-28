# Golden Key Car Rental L.L.C - Product Blueprint & Architecture Plan

## 1. Product Requirements Document (PRD) Summary
**Golden Key Car Rental** is an enterprise-grade mobility platform designed for the UAE market. It bridges the gap between high-end luxury rentals and efficient economy fleet management.

### Core Value Proposition
- **Seamless Booking:** 3-step conversion funnel (Search -> Select -> Secure).
- **Bilingual First:** Native English and Arabic support with full RTL layout.
- **Dynamic Pricing:** Real-time adjustments based on location, season, and early-payment incentives.
- **Enterprise Control:** A robust admin ecosystem for fleet and revenue management.

---

## 2. Information Architecture & Sitemap

### Customer Website
- **Home:** Hero search, featured categories, "Why Us", testimonials.
- **Fleet:** Grid/List view with advanced filtering (SUV, Luxury, Economy).
- **Car Details:** Dynamic pricing, specs, availability calendar, add-ons.
- **Checkout:** Single-page flow with Stripe/PayPal integration.
- **Support:** FAQ, Contact, WhatsApp integration.

### User Portal (Customer Dashboard)
- **Overview:** Active bookings, quick actions.
- **History:** Past rentals, invoice downloads (PDF).
- **Profile:** Document management (Driving License, Emirates ID/Passport).

### Admin Panel
- **Dashboard:** Revenue KPIs, Fleet Utilization, Recent Bookings.
- **Fleet Manager:** CRUD for cars, bulk Excel import.
- **Booking Engine:** Status management, refunds, manual overrides.
- **Pricing Engine:** Seasonal rules, promo codes, location-based surcharges.

---

## 3. Wireframe-Level Page Breakdown

### A. Home Page
- **Header:** Sticky, Language Toggle (EN/AR), Currency Switcher, Login/Signup.
- **Hero:** Search Widget (Pickup/Drop-off, Dates).
- **Bento Grid:** Featured categories (Luxury, SUV, Monthly Specials).
- **Trust Bar:** Logos of partners, "Secure Payment" badges.

### B. Car Listing (Search Results)
- **Left Sidebar (Desktop) / Top Drawer (Mobile):** Filters (Price, Brand, Transmission, Features).
- **Main Content:** Car cards with "Total Price" transparency (no hidden fees).

### C. Booking Flow (Single Page)
- **Section 1:** Trip Summary (Dates, Locations).
- **Section 2:** Driver Info (Form with validation).
- **Section 3:** Add-ons (Child seat, GPS, Insurance).
- **Section 4:** Payment (Embedded Stripe Elements).

---

## 4. UI Component Inventory (Design System)
- **Atoms:** Buttons (Primary, Secondary, Ghost), Inputs, Badges (Status), Icons (Lucide).
- **Molecules:** Car Card, Search Widget, Date Range Picker, Price Breakdown Table.
- **Organisms:** Navigation Bar, Footer, Admin Sidebar, Booking Summary Card.
- **Layouts:** RTL-aware Container, Split-screen Admin Layout, Mobile-first Grid.

---

## 5. Data Models & API Endpoints

### Key Entities (PostgreSQL)
- `User`: id, email, role (admin/customer), profile_data.
- `Car`: id, make, model, year, category, base_price, features, images[].
- `Booking`: id, user_id, car_id, pickup_date, dropoff_date, total_price, status (pending, confirmed, cancelled, completed).
- `Payment`: id, booking_id, transaction_id, amount, method (stripe/paypal), status.
- `PricingRule`: id, type (seasonal, location, long-term), modifier, start_date, end_date.

### Core API Endpoints (Next.js Routes)
- `GET /api/cars`: Fetch fleet with filters.
- `GET /api/cars/[id]`: Detailed car info + availability.
- `POST /api/bookings`: Create initial booking intent.
- `POST /api/payments/create-intent`: Stripe/PayPal session creation.
- `GET /api/admin/reports/revenue`: Aggregated financial data.

---

## 6. Integration & Tracking Plan
- **GA4:** `search_performed`, `view_item`, `begin_checkout`, `purchase`.
- **Meta Pixel:** `InitiateCheckout`, `Purchase`.
- **WhatsApp:** Floating button for direct support + Automated API for booking confirmations.
- **Clarity:** Heatmaps on the booking funnel to identify drop-off points.

---

## 7. Security & Performance Checklist
- [ ] **Security:** Rate limiting on `/api/auth` and `/api/bookings`.
- [ ] **Security:** CSRF protection and Secure/SameSite cookies.
- [ ] **Security:** No card data storage (PCI Compliance via Stripe).
- [ ] **Performance:** Image optimization via Next/Image (WebP).
- [ ] **Performance:** Edge Caching for static car data.
- [ ] **Performance:** Target LCP < 2.5s, CLS < 0.1.

---

## 8. Testing Plan
- **Unit:** Pricing logic (discounts, taxes, currency conversion).
- **Integration:** Booking flow from car selection to payment success.
- **UAT:** Arabic RTL layout verification on iOS/Android.
- **Load Testing:** Simulate 100 concurrent booking attempts.

---

## 9. Milestones & Deliverables
- **Phase 1 (Days 1-15):** IA, Wireframes, and Database Schema.
- **Phase 2 (Days 16-45):** Core Frontend (Customer Site) + Auth.
- **Phase 3 (Days 46-70):** Admin Panel + Pricing Engine + Payments.
- **Phase 4 (Days 71-90):** Testing, SEO, and Deployment.

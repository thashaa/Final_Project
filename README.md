# Cypress Automation Final Project

This repository contains my **final project** from the **Cypress Automation Bootcamp (AfterOffice Batch #1)**.  
It demonstrates **end-to-end (E2E) test automation** across multiple web applications using **Cypress**, **Page Object Model (POM)**, and **environment variables**.

---

## 🌟 Project Highlights
- Built **E2E automated tests** for three major platforms:  
  - **Agoda** (Flight booking flow)  
  - **Amazon** (Product search & detail validation)  
  - **YouTube** (Trending video validation)  
- Implemented **Page Object Model (POM)** for maintainable test structure.  
- Used **Cypress environment variables** for flexible configuration.  
- Generated **HTML test reports** and included **Cypress video recordings** for test runs.  

---

## 🔎 Automated Test Scenarios

### ✈️ Agoda – Flight Booking
- Search flight **Jakarta → Singapore** (tomorrow’s date).  
- Select **earliest Malaysia Airlines flight**.  
- Fill in **passenger details**.  
- Validate on Payment Page:  
  - Passenger data matches input.  
  - Total price, departure & arrival times are correct.  

### 🪑 Amazon – Product Search
- Open with **1920x1080 viewport**.  
- Search for **“chair”**.  
- Sort by **Highest Price**.  
- Select **rightmost non-sponsored item** from the first row.  
- Validate:  
  - Product name & price match between Search Results and Product Detail pages.  

### 🎬 YouTube – Trending Videos
- Go to **Trending page → Movies category**.  
- Select the **3rd trending video**.  
- Validate on Video page:  
  - **Title** and **channel name** match values shown in Trending page.  

---

## 🛠️ Tech Stack
- **Cypress** for test automation  
- **JavaScript** as scripting language  
- **Page Object Model (POM)** design pattern  
- **Mochawesome** (or similar) for HTML reporting  
- **Cypress video recording** for execution documentation  

---

## 📂 Project Structure
cypress/
├── e2e/ # Test cases
├── fixtures/ # Test data
├── pages/ # Page Object Models
└── support/

cypress.config.js
package.json
README.md

---

## ▶️ How to Run
```bash
# Clone the repository
git clone https://github.com/thashaa/Final_Project.git
cd cypress-final-project

# Install dependencies
npm install

# Run tests in Cypress Test Runner
npx cypress open

# Run tests in CLI mode
npx cypress run
---
Videos saved in cypress/videos/.
HTML reports generated after test run.

📹 Deliverables

✅ Cypress E2E tests (Agoda, Amazon, YouTube)
✅ Video recordings of test execution
✅ HTML test reports

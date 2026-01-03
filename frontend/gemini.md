# Gemini Project Documentation

## Overview
This file documents the specific folder structure and design choices for the frontend application, mirroring the contributor guidelines for easy reference.

## Directory Manifest & Purpose

### 1. `src/components/`
*   **Purpose:** Reusable, isolated UI elements.
*   **Usage:** Buttons, Cards, Modals, Forms.
*   **Demo:** `Example.jsx` provided as a template.

### 2. `src/pages/`
*   **Purpose:** Full-page views corresponding to routes.
*   **Usage:** Home page, Login page, Dashboard.
*   **Demo:** `Home.jsx` provided as a template.

### 3. `src/hooks/`
*   **Purpose:** Custom React hooks for shared logic.
*   **Usage:** Data fetching, form handling, subscriptions.
*   **Demo:** `useExample.js` provided as a template.

### 4. `src/lib/`
*   **Purpose:** Configuration and third-party library setups.
*   **Usage:** Axios client, Analytics setup.
*   **Demo:** `api.js` provided as a template.

### 5. `src/utils/`
*   **Purpose:** Pure utility functions.
*   **Usage:** String manipulation, Date formatting.
*   **Demo:** `helpers.js` provided as a template.

### 6. `src/constants/`
*   **Purpose:** Global constants and configuration values.
*   **Usage:** API endpoints, regex patterns, theme colors.
*   **Demo:** `index.js` provided as a template.

### 7. `src/_tests_/`
*   **Purpose:** Test suites.
*   **Usage:** Unit tests, integration tests.
*   **Demo:** `example.test.js` provided as a template.

## Boilerplate Code Note
All existing files contain foundational boilerplate code to demonstrate best practices. This code is intended to be replaced or extended as the project requirements evolve.

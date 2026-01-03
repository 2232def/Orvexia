# Frontend Project Contributor Guide

## Purpose of this Documentation
This document serves as a comprehensive guide for contributors to understand the architectural structure of the frontend application. It outlines the organization of files and folders, explaining the specific purpose and use case for each directory. This ensures consistency and maintainability across the codebase as the project grows.

## Folder Structure & Use Cases

The project follows a modular and scalable directory structure located within `frontend/src`:

### `src/components/`
**Use Case:** Contains reusable UI components that are used across multiple pages or parts of the application.
*   **Example:** `Example.jsx`
*   **Note:** Components here should be presentational and largely stateless or manage only their own UI state.

### `src/pages/`
**Use Case:** Contains top-level page components that correspond to specific routes in the application.
*   **Example:** `Home.jsx`
*   **Note:** These components typically compose smaller components from the `components/` directory and connect them to data.

### `src/hooks/`
**Use Case:** Dedicated to custom React hooks that encapsulate reusable logic.
*   **Example:** `useExample.js`
*   **Note:** Use this to share stateful logic between components without duplicating code.

### `src/lib/`
**Use Case:** Houses external library configurations, API clients, or core infrastructure code.
*   **Example:** `api.js` (Contains a wrapper for API calls).
*   **Note:** This is where you configure `axios` instances, initialized Firebase apps, or other third-party integrations.

### `src/utils/`
**Use Case:** Contains utility functions and helper methods that are pure and not directly tied to UI logic.
*   **Example:** `helpers.js`
*   **Note:** Functions here should be unit-testable and generic (e.g., date formatting, validation functions).

### `src/constants/`
**Use Case:** Centralized file for storing constant values, configuration strings, and environment variables.
*   **Example:** `index.js`
*   **Note:** Avoid hardcoding strings or magic numbers in your components; import them from here instead.

### `src/_tests_/`
**Use Case:** Contains test files for the application.
*   **Example:** `example.test.js`
*   **Note:** Place unit and integration tests here to ensure code reliability.

## Boilerplate Code
Each file in the current structure has been initialized with **demo boilerplate code**. This serves as a starting point and reference for:
*   Standard import/export syntax.
*   Functional component structure.
*   Basic error handling in API services.
*   Common hook patterns.

Contributors are encouraged to modify these files or follow their patterns when creating new modules.

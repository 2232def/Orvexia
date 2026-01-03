# Contributing to Backend Express Application

Welcome! We are thrilled that you want to contribute to our Express.js backend application. This guide will help you get started and understand the project structure.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd Workflow-Management-System
    ```

2.  **Navigate to the Express backend:**
    ```bash
    cd backend/express
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    *   Copy the example environment file: `cp .env.example .env` (if available, otherwise create `.env`)
    *   Configure your `.env` file with necessary variables (e.g., `MONGO_URI`, `PORT`).

5.  **Run the application:**
    *   For development: `npm run dev` (uses nodemon)
    *   For production: `npm start`

## Branching Strategy

We follow a standard git flow. Please follow these conventions when creating branches:

1.  **Branch Naming Convention:**
    *   `feature/feature-name` - For new features (e.g., `feature/user-auth`)
    *   `bugfix/bug-name` - For bug fixes (e.g., `bugfix/login-error`)
    *   `docs/documentation-update` - For documentation changes
    *   `chore/maintenance` - For maintenance tasks

2.  **Creating a Branch:**
    Make sure you are on the main development branch (usually `main` or `develop`) and pull the latest changes before branching.
    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/your-feature-name
    ```

3.  **Committing Changes:**
    *   Write clear and concise commit messages.
    *   Example: `feat: add user registration endpoint` or `fix: resolve crash on invalid input`.

## Project Structure & Code Organization

The application code is located in the `src/` directory. Here's a breakdown of the folders and what code goes where:

### `src/`

*   **`server.js`**: The entry point of the application. Setup express app, database connection, and mount routes here.

### `src/config/`
*   **Purpose**: Configuration files and database connections.
*   **What to write**: Database connection logic (like `mongoose-connection.js`), environment specific configurations, or third-party service setups.

### `src/controllers/`
*   **Purpose**: Logic for handling requests and sending responses.
*   **What to write**: Functions that take `req` and `res`, interact with services or models, and return JSON responses. Keep business logic separate from routes.
*   **Example**: `demoController.js` handles logic for demo routes.

### `src/middlewares/`
*   **Purpose**: Express middleware functions.
*   **What to write**: Functions that intercept requests before they reach the controller (e.g., authentication, logging, error handling, validation).
*   **Example**: `logger.js` logs incoming requests.

### `src/models/`
*   **Purpose**: Mongoose schemas and models.
*   **What to write**: Define the structure of your MongoDB documents, validation rules, and schema methods here.
*   **Example**: `DemoItem.js` defines the schema for demo items.

### `src/routes/`
*   **Purpose**: API route definitions.
*   **What to write**: Define API endpoints and map them to specific controller functions. Use `express.Router()`.
*   **Example**: `demoRoutes.js` maps `/` and `/:id` to functions in `demoController.js`.

### `src/utils/`
*   **Purpose**: Utility functions and helpers.
*   **What to write**: Reusable helper functions, formatting tools, or standardized response handlers.
*   **Example**: `responseHelper.js` standardizes API success and error responses.

## Development Standards

*   **Code Style**: Follow the existing coding style (Standard JS or Prettier).
*   **Error Handling**: Use the standardized error response helper.
*   **Testing**: Write unit tests for new features if possible.

Thank you for contributing!

# Workflow Automation Worker (FastAPI)

This service acts as the **Execution Worker** and **Simulation Layer** for the Real-Time Workflow Management Platform. It provides realistic, simulated REST endpoints for key industry verticals identified in the Product Requirements Document (Section 2.2).

## alignment with Product Requirements

This microservice directly supports the **Target Market Segments** outlined in the PRD:

| PRD Segment (Section 2.2) | Implemented Module | Description |
|---------------------------|--------------------|-------------|
| **E-commerce companies** | `routers/ecommerce` | Simulates Inventory checks and Shipping label generation with realistic costs and tracking IDs. |
| **Digital marketing agencies** | `routers/marketing` | Simulates Email Campaign deployment, including predicted open rates and processing latency. |
| **Software development teams** | `routers/devops` | Simulates CI/CD pipeline triggers, including random build failures to test error handling. |

## API Documentation

### Base URL
`http://localhost:8000`

### Interactive Documentation
*   **Swagger UI:** `http://localhost:8000/docs`
*   **ReDoc:** `http://localhost:8000/redoc`

### Endpoints

#### 1. E-Commerce Domain
**Inventory Check**
*   **Endpoint:** `POST /ecommerce/inventory/check`
*   **Description:** Checks stock availability for a given SKU.
*   **Simulation:** Random stock levels, warehouse locations, and network latency (0.5-2.0s).

**Shipping Label**
*   **Endpoint:** `POST /ecommerce/shipping/label`
*   **Description:** Generates a shipping label and calculates cost.
*   **Simulation:** Generates valid-format tracking IDs (e.g., `TRK-9988-X`) and dynamic costs based on weight.

#### 2. Marketing Domain
**Send Campaign**
*   **Endpoint:** `POST /marketing/campaign/send`
*   **Description:** Triggers an email marketing campaign.
*   **Simulation:** Simulates processing time proportional to recipient count; returns predicted open rates.

#### 3. DevOps Domain
**Trigger Deployment**
*   **Endpoint:** `POST /devops/deployment/trigger`
*   **Description:** Triggers a CI/CD build pipeline.
*   **Simulation:** **10% Failure Rate** explicitly coded to test workflow error handling and retry mechanisms. Returns simulated Build IDs and Server IPs.

## Technical Stack

*   **Framework:** FastAPI (Python)
*   **Validation:** Pydantic V2
*   **Server:** Uvicorn
*   **Architecture:** Domain-Driven Design (DDD) structured by business vertical.

## How to Run

1.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

2.  **Start the Server:**
    ```bash
    uvicorn app.main:app --reload
    ```

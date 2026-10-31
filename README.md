# BRIGHTLOOP – SUBSCRIPTION MANAGEMENT SYSTEM
## Enterprise Backend Platform & API Services

Brightloop is a production-grade **Subscription Management & Recurring Billing Platform** architected specifically to power modern SaaS, service, and recurring software businesses.

Built with **Node.js, Express.js, TypeScript, PostgreSQL, and Prisma ORM**, this backend serves as the digital backbone that runs the entire lifecycle of a subscription business:
- From catalog and variant pricing setup
- Multi-tier subscription plans (daily, weekly, monthly, yearly)
- Quotations with transactional conversion into active subscriptions
- Automated recurring billing runs and tax-compliant invoice generation
- Payment reconciliation with partial payment allocations
- Comprehensive executive analytics, MRR tracking, and customer 360 insights
- Dedicated customer self-service portal

---

## 1. Technology Stack

- **Runtime:** Node.js (v20+ / v24+)
- **Framework:** Express.js (v4.21)
- **Language:** TypeScript (v5.7) with strict type checking
- **Database:** PostgreSQL 15+ / 18
- **ORM:** Prisma ORM (v5.22)
- **Authentication:** JWT with secure HTTP-only cookies and Bearer tokens
- **Password Hashing:** bcrypt (10 rounds)
- **Validation:** Zod schemas on all endpoints
- **API Documentation:** Swagger / OpenAPI 3.0 at `/api/docs`
- **Testing:** Vitest with Supertest

---

## 2. Project Architecture

```
make-a-ton/
├── API_DOCUMENTATION.md      # Comprehensive API endpoint catalog
├── API_INTEGRATION_PLAN.md   # Integration specifications & field mappings
├── DATABASE_DESIGN.md        # Relational schema architecture & ER diagrams
├── README.md                 # Primary system guide & credentials
├── design/                   # Product specifications & challenge brief
└── backend/
    ├── src/
    │   ├── config/           # Environment, database, and Swagger config
    │   ├── controllers/      # Express controllers (Auth, Subscriptions, Invoices, etc.)
    │   ├── services/         # Domain business logic & financial calculations
    │   ├── routes/           # RESTful modular routers
    │   ├── middleware/       # JWT auth, RBAC, Zod validation, error handling
    │   ├── validators/       # Zod schemas for request validation
    │   ├── types/            # TypeScript interfaces & Express augmentation
    │   ├── utils/            # Standard ApiResponse envelopes & JWT helpers
    │   ├── app.ts            # Express application setup
    │   └── server.ts         # Server bootstrap & graceful shutdown
    ├── prisma/
    │   ├── schema.prisma     # Relational database models, enums & indexes
    │   └── seed.ts           # Realistic development seed dataset
    ├── tests/                # Automated integration & lifecycle test suites
    ├── .env.example          # Environment variable template
    ├── package.json
    └── tsconfig.json
```

---

## 3. Quick Start & Setup Instructions

### Prerequisites
- Node.js (v20.x or v24.x)
- PostgreSQL (v15+) installed and running locally on port `5432`

### 1. Configure Environment Variables
Inside the `backend/` directory, verify or create `.env`:
```bash
PORT=5000
NODE_ENV=development
API_PREFIX=/api/v1
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/brightloop_db?schema=public"
JWT_SECRET=brightloop_jwt_super_secret_key_2026_dev_env
JWT_EXPIRES_IN=1d
REFRESH_TOKEN_SECRET=brightloop_refresh_token_super_secret_key_2026_dev_env
REFRESH_TOKEN_EXPIRES_IN=7d
COOKIE_SECRET=brightloop_cookie_secret_key_2026_dev
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
TIMEZONE=Asia/Kolkata
DEFAULT_CURRENCY=INR
```

### 2. Install Dependencies
```powershell
cd backend
npm install
```

### 3. Synchronize Database & Generate Prisma Client
```powershell
npx prisma generate
npx prisma db push
```

### 4. Seed the Database
Populate the database with realistic products, plans, customers, subscriptions, invoices, and payments:
```powershell
npm run prisma:seed
```

### 5. Launch the Backend Server
```powershell
# Development mode with hot reloading:
npm run dev

# Or build and run production distribution:
npm run build
npm start
```
- **Base API URL:** `http://localhost:5000/api/v1`
- **Swagger Documentation:** `http://localhost:5000/api/docs`
- **Health Check:** `http://localhost:5000/health`

---

## 4. Development Seed Login Credentials

> ⚠️ **IMPORTANT: The following credentials are for DEVELOPMENT AND TESTING ONLY. Never use these in a production deployment.**

| Role | Email | Password | Description |
| :--- | :--- | :--- | :--- |
| **ADMIN** | `admin@brightloop.com` | `Admin@123` | Full system administrator. Complete access to staff, customers, subscriptions, billing, and settings. |
| **STAFF** | `staff.operations@brightloop.com` | `Staff@123` | Operations staff. Can manage customers, products, and subscriptions. |
| **STAFF** | `staff.finance@brightloop.com` | `Staff@123` | Finance staff. Can record payments, generate invoices, and view reports. |
| **CUSTOMER** | `contact@acmeindia.com` | `Customer@123` | Acme India Technologies. Has an active Enterprise Annual subscription. |
| **CUSTOMER** | `accounts@techhive.in` | `Customer@123` | TechHive Digital Solutions. Has an active Professional Monthly plan and unpaid invoice. |
| **CUSTOMER** | `finance@nexuscrm.com` | `Customer@123` | Nexus Retail Stores. Has an open quotation and past closed subscription. |

---

## 5. Automated Test Suite

Brightloop includes automated tests covering authentication, RBAC, customer isolation, subscription state transitions, quotation conversion, partial payments, and reporting metrics.

To execute the test suite:
```powershell
cd backend
npm test
```

Test coverage includes:
- `tests/auth.test.ts`: Login, registration, password validation, token verification.
- `tests/customers.test.ts`: Customer 360 overview, pagination, search, customer data isolation.
- `tests/products_plans.test.ts`: Product creation, variant pricing, subscription plans.
- `tests/subscriptions_quotations.test.ts`: Complete lifecycle (`Draft` → `Confirmed` → `Active` → `Paused` → `Resumed` → `Closed`), quotation conversion.
- `tests/invoices_payments.test.ts`: Invoice generation, tax calculation, partial payments, automated `PAID` transition.
- `tests/dashboard_reports.test.ts`: Fast database aggregation (< 2s SLA), MRR calculation, transaction logs.

---

## 6. Frontend Integration Guide

The frontend React application connects to Brightloop using either standard Axios or the Fetch API.

### Connection Settings
- **API Base URL:** `http://localhost:5000/api/v1`
- **Credentials:** Set `withCredentials: true` in Axios or `credentials: 'include'` in Fetch to allow secure HTTP-only cookies.
- **Authorization Header (Alternative):** Pass `Authorization: Bearer <token>` when storing the token in React state / localStorage.

### Sample Axios Setup in Frontend
```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to attach Bearer token if stored in memory
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## 7. Key Business Logic & Financial Integrity

1. **Strict Decimal Financial Calculations:** Floating-point numbers are never used for currency. All calculations use fixed-decimal rounding to 2 decimal places to ensure zero financial drift.
2. **Subscription Lifecycle Validation:** State transitions follow a strict finite-state machine:
   - `DRAFT` → `QUOTATION` → `CONFIRMED` → `ACTIVE` → `CLOSED`
   - Pausing and early closing enforce plan-specific policies (`canPause`, `canCloseEarly`).
3. **Transactional Quotation Conversion:** Converting an accepted quotation into an active subscription is executed inside an atomic PostgreSQL transaction that locks the record, generates the subscription, and marks the quote as converted, preventing duplicate subscriptions.
4. **Recurring Billing Day Run:** `POST /api/v1/invoices/generate-recurring` automates the recurring billing process for all active subscriptions due on billing day. Unique period boundary indexes prevent generating duplicate invoices for the same cycle.
5. **Partial Payments & Reconciliations:** Payments can be split across multiple invoices. Each invoice tracks its `amountPaid` and `outstandingBalance`. Once the balance reaches zero, the invoice is automatically marked as `PAID`.
6. **Customer Portal Isolation:** Customer endpoints automatically bind to `req.user.customerId`. Attempts to query or alter another customer's data return a 404/403.

---

*Brightloop Backend is engineered for high reliability, strict financial accuracy, and seamless frontend integration.*

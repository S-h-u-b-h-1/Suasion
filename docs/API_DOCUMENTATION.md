# API Documentation: Suasion Group Website

The Suasion Group website backend is built using Node.js, Express, and TypeScript. It exposes REST API endpoints for contact forms, newsletter subscriptions, and lead lifecycle management.

## Base URL
- **Local Development:** `http://localhost:5000`
- **Rate Limiting:** Each IP is restricted to 100 requests per 15-minute window to prevent spamming.

---

## 1. Contact & Newsletter Endpoints

### POST `/api/contact`
Submits a general contact message.

- **Request Body:**
  ```json
  {
    "name": "Amit Sharma",
    "phone": "9830098300",
    "email": "amit@example.com",
    "message": "Interested in business collaboration or career opportunities."
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "status": "success",
    "message": "Contact message saved successfully",
    "data": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Amit Sharma",
      "phone": "9830098300",
      "email": "amit@example.com",
      "message": "Interested in business collaboration or career opportunities.",
      "createdAt": "2026-06-23T18:00:00.000Z"
    }
  }
  ```

### POST `/api/newsletter`
Subscribes an email to the corporate newsletter. If the email is already subscribed, it returns a 200 Success immediately without raising a conflict.

- **Request Body:**
  ```json
  {
    "email": "subscriber@example.com"
  }
  ```
- **Response (210 Created or 200 Success):**
  ```json
  {
    "status": "success",
    "message": "Subscribed to newsletter successfully."
  }
  ```

---

## 2. Inquiries & Lead Management (Admin Desk)

### POST `/api/inquiries`
Submits a formal consultation inquiry. Saves records to the `Lead` table and triggers an asynchronous email notification to the group administrator.

- **Request Body:**
  ```json
  {
    "fullName": "Rajesh Kataruka",
    "phone": "9000000000",
    "email": "rajesh@example.com",
    "city": "Kolkata",
    "serviceInterest": "NBFC_FINANCE",
    "preferredContactMethod": "PHONE",
    "message": "Need working capital solutions for expansion.",
    "consent": true
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "status": "success",
    "message": "Consultation inquiry submitted successfully.",
    "data": {
      "id": "abc-123-uuid",
      "fullName": "Rajesh Kataruka",
      "phone": "9000000000",
      "email": "rajesh@example.com",
      "city": "Kolkata",
      "serviceInterest": "NBFC_FINANCE",
      "preferredContactMethod": "PHONE",
      "message": "Need working capital solutions for expansion.",
      "status": "NEW",
      "createdAt": "2026-06-23T18:01:00.000Z",
      "updatedAt": "2026-06-23T18:01:00.000Z"
    }
  }
  ```

### GET `/api/inquiries` (Alias: `/api/leads`)
Fetches all inquiries sorted by creation date descending. Primarily used by the admin dashboard.

- **Response (200 OK):**
  ```json
  {
    "status": "success",
    "results": 1,
    "data": [
      {
        "id": "abc-123-uuid",
        "fullName": "Rajesh Kataruka",
        "phone": "9000000000",
        "email": "rajesh@example.com",
        "city": "Kolkata",
        "serviceInterest": "NBFC_FINANCE",
        "preferredContactMethod": "PHONE",
        "message": "Need working capital solutions for expansion.",
        "status": "NEW",
        "createdAt": "2026-06-23T18:01:00.000Z"
      }
    ]
  }
  ```

### PATCH `/api/inquiries/:id/status`
Updates the workflow status of an active inquiry.

- **Request Body:**
  ```json
  {
    "status": "IN_PROGRESS"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Inquiry status updated successfully",
    "data": {
      "id": "abc-123-uuid",
      "fullName": "Rajesh Kataruka",
      "status": "IN_PROGRESS"
    }
  }
  ```

### DELETE `/api/inquiries/:id`
Permanently deletes a lead inquiry record.

- **Response (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Inquiry deleted successfully",
    "data": null
  }
  ```

---

## Error Handling

All endpoints enforce request validation using Zod schemas. If validation fails, a `400 Bad Request` is returned with specific field errors.

### Example Validation Failure (400 Bad Request):
```json
{
  "status": "fail",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "consent",
      "message": "Consent is required to submit inquiries"
    }
  ]
}
```

If a route is not matched, it returns `404 Not Found`. Internal system faults return a `500 Internal Server Error`.
```json
{
  "status": "error",
  "message": "An unexpected error occurred on the server."
}
```

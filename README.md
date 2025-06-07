# minshop
Goal: Build a simplified Shopify-like backend with clean APIs for products, carts, and orders. Optional: make a React admin dashboard.


Backend Responsibilities (Spring Boot)
Core Features to Build:
Product Catalog

GET /products

POST /products (admin only)

Filters: category, price range, tags

Cart System

POST /cart/{userId}/items

DELETE /cart/{userId}/items/{productId}

GET /cart/{userId}

Total price calculation

Checkout Flow

POST /checkout

Order record creation

Stock adjustment

Customer Accounts

Register/login (JWT)

View order history

Admin APIs

Add/edit/delete products

View analytics (e.g., sales over time)

Tech to Highlight:
Spring Boot (REST API, Spring Security, JPA/Hibernate)

PostgreSQL (products, users, carts, orders)

Caching with Redis (for fast product queries)

Unit + Integration tests (JUnit + Mockito)

Docker for easy deployment

Bonus Additions:
Stripe sandbox integration (simulate checkout)

GraphQL API (Shopify uses GraphQL heavily)

Background tasks (e.g., delayed shipping emails)

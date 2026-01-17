# Zonikk - Industrial Real Estate Platform

Zonikk is a premium industrial real estate property listing platform built with Next.js, MongoDB, and Docker.

## Features

- **Dynamic Landing Page**: Showcases featured properties, services, industries served, and testimonials.
- **Property Listings**: Filter properties by location, type, and price.
- **Property Detail View**: Comprehensive details including specifications, infrastructure, connectivity, and contact information.
- **Admin Panel**: Dashboard for managing property listings (CRUD operations).
- **Dockerized**: Fully containerized application with MongoDB and Mongo Express.

## Tech Stack

- **Frontend/Backend**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Infrastructure**: [Docker](https://www.docker.com/) & Docker Compose
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Docker and Docker Desktop installed.

### Installation & Run

1. **Start the application and database**:
   ```bash
   docker-compose up --build
   ```

2. **Seed the database** (Run in a separate terminal to see initial data):
   ```bash
   npm run seed
   ```

3. **Access the application**:
   - **Main App**: [http://localhost:3000](http://localhost:3000)
   - **Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)
   - **Mongo Express (DB Viewer)**: [http://localhost:8081](http://localhost:8081)
     - Username: `admin`
     - Password: `password`

## Project Structure

- `app/`: Next.js pages and API routes.
- `components/`: Modular UI components.
- `models/`: Mongoose schemas for MongoDB.
- `lib/`: Utility functions (e.g., database connection).
- `public/`: Static assets (images, etc.).
- `scripts/`: Seeding and utility scripts.
- `docker-compose.yml`: Docker configuration.

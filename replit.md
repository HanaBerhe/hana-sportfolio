# Overview

This is a modern portfolio website for Hana Berhe Girmay, a data analyst and software developer. The application showcases personal information, skills, work experience, education, projects, and contact details through an interactive single-page application built with React and TypeScript.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for RESTful API endpoints
- **Development Setup**: Hot module replacement with Vite integration for seamless development experience
- **Storage Layer**: Abstract storage interface with in-memory implementation for user data
- **Middleware**: Custom logging middleware for API request tracking

## Data Storage
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database interactions
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless driver for cloud-hosted PostgreSQL
- **Models**: User entity with username/password authentication structure

## Component Architecture
- **UI Components**: Comprehensive shadcn/ui component library including forms, navigation, cards, dialogs, and data visualization elements
- **Layout System**: Responsive design with mobile-first approach using Tailwind CSS breakpoints
- **Section Components**: Modular portfolio sections (Hero, About, Skills, Experience, Education, Projects, Contact)
- **Navigation**: Smooth scrolling navigation with active section highlighting

## Development Workflow
- **Package Management**: npm with lockfile for dependency consistency
- **TypeScript Configuration**: Strict type checking with modern ES modules and DOM types
- **Code Quality**: ESModule format throughout the codebase for better tree-shaking and compatibility
- **Asset Management**: Vite-based asset processing with alias resolution for clean imports

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

## UI Framework
- **Radix UI**: Headless component primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay for Replit environment
- **TanStack Query**: Data synchronization and caching library
- **React Hook Form**: Form state management with validation resolver support

## Authentication & Validation
- **Zod**: Schema validation for form inputs and API data
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema validation

## Fonts & Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: External image service for portfolio project backgrounds and hero imagery
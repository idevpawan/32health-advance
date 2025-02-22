# 32Health Advance Project

A React application for managing user information with features like editing user details, liking users, and deleting users.

## Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code
- **Vite** - Next Generation Frontend Tooling
- **Ant Design** - A design system for enterprise-level products
- **Tailwind CSS** - A utility-first CSS framework

## Why Vite?

This project uses Vite instead of Create React App (CRA) because:

- CRA is now deprecated
- Vite offers faster development server start
- Better hot module replacement (HMR)
- Optimized build process
- Modern architecture using native ES modules

## Getting Started

### Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/idevpawan/32health-advance.git
```

2. Navigate to the project directory

```bash
cd 32health-advance
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Features

- View user cards with avatar and contact information
- Edit user details through a modal form
- Like/unlike users
- Delete users
- Responsive design for various screen sizes
- Form validation for user inputs

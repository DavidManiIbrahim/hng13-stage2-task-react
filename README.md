# TicketFlow - Ticket Management App

A modern, full-featured ticket management system built with React, featuring authentication, CRUD operations, analytics dashboard, and responsive design.

## Features

### 🔐 Authentication System
- User registration with email validation
- Secure login with session management
- Auto-logout on session expiry (1 hour)
- Session expiry warning (1 minute before timeout)
- Protected routes for authenticated users

### 🎫 Ticket Management (CRUD)
- **Create** tickets with title, description, priority, status, and assignee
- **Read** all tickets with status filtering
- **Update** ticket details and status
- **Delete** tickets
- Input validation:
  - Title: 5-100 characters
  - Description: up to 2000 characters
  - Assignee: valid email format
  - Status transitions: enforced rules (can't go from closed to in-progress)

### 📊 Analytics Dashboard
- Real-time ticket statistics
- Interactive charts (pie and bar charts)
- Metrics by status: Open, In Progress, Resolved, Closed
- Visual breakdown by priority levels

### 🎨 Design Features
- Dark gradient theme (purple to cyan)
- Wavy SVG backgrounds
- Glassmorphism UI cards
- Responsive layout (max-width: 1440px)
- Smooth animations and transitions
- Mobile-friendly navigation

### 🛡️ Error Handling
- Form validation with clear error messages
- Session timeout handling
- Toast notifications for user feedback
- Graceful error states

## Project info

**URL**: https://lovable.dev/projects/fe330949-26c7-4525-8b65-8f73a1ddec44

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fe330949-26c7-4525-8b65-8f73a1ddec44) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fe330949-26c7-4525-8b65-8f73a1ddec44) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

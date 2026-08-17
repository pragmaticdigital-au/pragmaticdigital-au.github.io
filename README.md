# pragmaticdigital.au — Website Source Code

Source code for the **pragmaticdigital.au** website.

## Tech Stack

-   [Next.js](https://nextjs.org/)

-   TypeScript

-   [Tailwind CSS](https://tailwindcss.com/)

-   [Vercel](https://vercel.com/) / AWS

-   GitHub for source control and project management

---

## Prerequisites

Before working on the project, make sure you have the following installed:

-   Node.js

-   npm

-   Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

Use the Node.js version specified by the project if a version is configured in `.nvmrc`, `package.json`, or another project configuration file.

---

## Getting Started

### 1\. Clone the repository

Clone the repository to your local machine:

```bash
git clone git@github.com:pragmaticdigital-au/pragmaticdigital-au.github.io.git
```

Move into the project directory:

```bash
cd <PROJECT_DIRECTORY>
```

---

### 2\. Install dependencies

Install the project dependencies:

```bash
npm install
```

---

### 3\. Configure environment variables

If the project requires environment variables, create a local environment file:

```bash
cp .env.example .env.local
```

If `.env.example` does not exist, create `.env.local` manually.

Do **not** commit `.env.local` or any other file containing secrets to GitHub.

Example:

```env
NEXT_PUBLIC_EXAMPLE_VARIABLE=value
```

Document required environment variables in `.env.example` without including real secrets.

---

### 4\. Run the development server

Start the Next.js development server:

```bash
npm run dev
```

The website should be available at:

```text
http://localhost:3000
```

The development server automatically reloads when you make changes to the source code.

---

## Project Workflow

Development should be done using feature branches rather than directly on `main`.

### 1\. Update your local `main` branch

Before starting new work:

```bash
git checkout main
git pull origin main
```

### 2\. Create a feature branch

Create a branch that describes the work you are doing:

```bash
git checkout -b feature/google-analytics
```

Examples:

```text
feature/google-analytics
feature/contact-form
feature/homepage-redesign
fix/mobile-navigation
fix/footer-layout
```

Branch names do not need to match the GitHub Issue title exactly.

---

### 3\. Make your changes

Work on the website locally and test your changes using:

```bash
npm run dev
```

---

### 4\. Check your changes

Before committing, check the project's available scripts:

```bash
npm run
```

Run the appropriate checks, such as:

```bash
npm run lint
npm run build
```

If the project contains tests, run them as well.

Make sure the production build succeeds before opening a Pull Request.

---

### 5\. Commit your changes

Create a descriptive commit:

```bash
git add .
git commit -m "Set up Google Analytics"
```

Keep commits focused on a single piece of work where possible.

---

### 6\. Push your branch

Push the branch to GitHub:

```bash
git push -u origin feature/google-analytics
```

---

### 7\. Create a Pull Request

On GitHub, create a Pull Request:

```text
base: main
compare: feature/google-analytics
```

The Pull Request should explain:

-   What was changed

-   Why the change was needed

-   How the change was tested

-   Any environment variables or configuration changes required

If the work relates to a GitHub Issue, reference the issue in the Pull Request.

For example:

```text
Closes #12
```

When the Pull Request is merged, GitHub will automatically close Issue #12.

---

## GitHub Issue Workflow

GitHub Issues are used to track website work.

A typical workflow is:

```text
GitHub Issue
     ↓
Create feature/fix branch
     ↓
Develop locally
     ↓
Test locally
     ↓
Commit changes
     ↓
Push branch
     ↓
Create Pull Request
     ↓
Review / Test
     ↓
Merge into main
     ↓
Deploy
     ↓
Issue closed
```

Example:

```text
Issue #12
Set Up Google Analytics and Integrate with Website

        ↓

Branch
feature/google-analytics

        ↓

Pull Request
feature/google-analytics → main

        ↓

Merge

        ↓

Production deployment
```

---

# Building for Production

To create a production build locally:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

The production server normally runs on:

```text
http://localhost:3000
```

A successful production build should be checked before deploying.

---

# Deployment

The preferred deployment platform for the Next.js website is **Vercel**.

The repository can be connected to the Vercel project so that deployments happen automatically when changes are merged into the production branch.

## Vercel Deployment

### Initial setup

1.  Create or sign in to the Vercel account.

2.  Import the GitHub repository.

3.  Select the appropriate framework:

    -   Next.js

4.  Configure the required environment variables.

5.  Select `main` as the production branch.

6.  Deploy the project.

After the repository is connected, Vercel can automatically create deployments when changes are pushed.

### Recommended deployment workflow

```text
Local development
      ↓
Feature branch
      ↓
Pull Request
      ↓
Merge into main
      ↓
Vercel production deployment
      ↓
pragmaticdigital.au
```

---

## Preview Deployments

Feature branches and Pull Requests can be used to create preview deployments.

This allows changes to be tested on a deployed version of the website before they are merged into `main`.

Recommended workflow:

```text
feature/google-analytics
        ↓
Pull Request
        ↓
Vercel Preview Deployment
        ↓
Test
        ↓
Merge into main
        ↓
Production Deployment
```

---

# AWS Deployment

AWS may be used if the project is configured for AWS hosting instead of, or in addition to, Vercel.

The exact AWS deployment process depends on the AWS services used by the project.

Before deploying to AWS, document the required infrastructure and deployment commands here.

For example:

```text
AWS service:
Region:
Application:
Build command:
Deployment command:
Environment variables:
Domain:
```

Do not commit AWS credentials, access keys, or other secrets to the repository.

---

# Environment Variables

Environment variables should be managed separately from source code.

Local development should use:

```text
.env.local
```

Example template:

```text
.env.example
```

Never commit:

```text
.env.local
.env
```

or any file containing production credentials or secrets.

For Vercel deployments, environment variables should be configured through the Vercel project settings.

For AWS deployments, environment variables should be configured using the appropriate AWS service or deployment configuration.

---

# Google Analytics

Google Analytics configuration should use environment variables where appropriate.

For example:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The actual Google Analytics ID should not be hard-coded in multiple places throughout the application.

After configuring Google Analytics:

1.  Run the website locally.

2.  Confirm the application builds successfully.

3.  Deploy to a preview environment.

4.  Verify that analytics requests are being generated.

5.  Confirm data is appearing in Google Analytics.

6.  Merge the Pull Request into `main`.

---

# Code Quality

Before creating a Pull Request, check:

-   The application runs locally.

-   The production build succeeds.

-   TypeScript errors have been resolved.

-   Linting passes.

-   New functionality has been tested.

-   Existing functionality has not been broken.

-   Environment variables are documented.

-   No secrets or credentials have been committed.

-   The Pull Request references the relevant GitHub Issue.

---

# Useful Commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Run linting

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

### Start production server locally

```bash
npm run start
```

### Check available npm scripts

```bash
npm run
```

### Check Git status

```bash
git status
```

### Create a branch

```bash
git checkout -b feature/your-feature
```

### Push a branch

```bash
git push -u origin feature/your-feature
```

---

# Recommended Git Commands

A typical development session:

```bash
git checkout main
git pull origin main

git checkout -b feature/your-feature

# Make your changes

npm run lint
npm run build

git add .
git commit -m "Describe your changes"

git push -u origin feature/your-feature
```

Then create a Pull Request on GitHub.

---

# Repository Structure

The project is a Next.js application. The exact structure may change as the website develops.

A typical structure may look like:

```text
.
├── app/                  # Next.js application routes/pages
├── components/           # Reusable React components
├── public/               # Static assets
├── styles/               # Global/custom styles
├── .env.example          # Environment variable template
├── .gitignore
├── next.config.*
├── package.json
├── tailwind.config.*
├── tsconfig.json
└── README.md
```

Follow the existing project structure when adding new files rather than creating new directories unnecessarily.

---

# Production Checklist

Before deploying a significant change:

-    Pull the latest `main` branch.

-    Create a feature/fix branch.

-    Make and test the changes locally.

-    Run linting.

-    Run the production build.

-    Check environment variables.

-    Confirm no secrets are committed.

-    Push the branch.

-    Create a Pull Request.

-    Test the preview deployment.

-    Merge the Pull Request.

-    Confirm the production deployment succeeds.

-    Test the live website.

-    Confirm the related GitHub Issue is closed.

---

# Domain

Production website:

**[https://www.pragmaticdigital.au](https://www.pragmaticdigital.au/)**

Deployment platform:

**Vercel / AWS**

Source repository:

**GitHub**

---

# Notes for Contributors

Keep changes small and focused.

Do not commit directly to `main` unless there is a specific reason to do so.

For new functionality or fixes, create a branch, make the changes, test them, and submit a Pull Request.

When possible, link every Pull Request to the GitHub Issue that describes the work.
# Portfolio Website

A premium, high-performance personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.  
Designed to showcase Full Stack software engineering skills with a modern, responsive, and accessible UI.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel (Recommended)

## ✨ Features

- **Premium Light Theme**: Clean aesthetics with glassmorphism and subtle gradients.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Performance**: High Lighthouse scores, SEO-ready metadata, and optimized assets.
- **Interactive Elements**:
  - Animated hero section with gradient text.
  - Smooth scroll and page transitions.
  - Interactive contact form with validation.
- **Dynamic Content**:
  - **Experience**: Timeline view of professional history.
  - **Projects**: Grid view of featured work with GitHub/Demo links.

## 🛠️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/PSanthoshini/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Deployment (Vercel)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository (already done).
2.  **Login to Vercel**: Go to [vercel.com](https://vercel.com) and log in with GitHub.
3.  **Add New Project**:
    - Click **"Add New..."** > **"Project"**.
    - Select your `portfolio` repository.
4.  **Configure**:
    - **Framework Preset**: It should auto-detect "Next.js".
    - **Root Directory**: Leave as default (`./`).
    - **Environment Variables**: No sensitive keys are required for this build.
5.  **Deploy**: Click **"Deploy"**.

Vercel will detect changes, build the app, and give you a live URL (e.g., `https://portfolio-santhoshini.vercel.app`).

## 📧 Contact Form Setup

The contact form is configured to use [Formspree](https://formspree.io/).
To enable it:
1.  Sign up for a free Formspree account.
2.  Create a new form and copy the **Form ID**.
3.  Update the ID in `app/contact/page.jsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

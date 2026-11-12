# Frame Salon ✂️✨

[![React](https://img.shields.io/badge/React-16.13.1-61dafb?logo=react&logoColor=white)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.4.1-7952b3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-5.1.2-ca4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

**Frame Salon** is a modern, responsive web application designed for a premier hair and beauty salon studio. It showcases the salon's brand identity, hair styling services, fashion blogs, client showcases, and comprehensive contact and appointment booking information across primary and alternative studio channels.

---

## 📋 Table of Contents

- [About Frame Salon](#-about-frame-salon)
- [📞 Contact Details & Alternative Details](#-contact-details--alternative-details)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Customization Guide](#-customization-guide)
- [📄 License](#-license)

---

## 💇 About Frame Salon

**Frame Salon** delivers upscale hairdressing, precision cutting, coloring, bridal styling, and therapeutic hair care treatments. The website provides visitors with an intuitive digital experience to explore styles, read hair care tips, and get in touch with salon stylists.

- **Brand Name**: Frame Salon
- **Tagline**: Crafting Timeless Style & Frame-Worthy Hair
- **Specialties**: Precision Haircuts, Custom Color & Highlights, Bridal Styling, Keratin & Restorative Treatments

---

## 📞 Contact Details & Alternative Details

Frame Salon provides primary and alternative contact options to ensure seamless communication and booking for clients:

| Contact Method | Primary Detail | Alternative Detail |
| :--- | :--- | :--- |
| **Phone Number** | `+1 (212) 555-0148` (Main Desk) | `+1 (212) 555-0199` (Booking Hotline & Same-Day) |
| **Email Address** | `info@framesalon.com` (Inquiries & Press) | `booking@framesalon.com` (Appointments & Support) |
| **Physical Studio** | **Upper East Side (Main):**<br>1280 Lexington Avenue, Suite 4A<br>New York, NY 10028 | **SoHo Studio (Alternative):**<br>452 Broadway, 2nd Floor<br>New York, NY 10013 |
| **Operating Hours** | **Monday – Friday:** 9:00 AM – 8:00 PM | **Saturday – Sunday:** 10:00 AM – 6:00 PM |

> 💡 **Walk-Ins & Appointments**: While walk-in guests are welcomed based on availability, scheduling an appointment via phone or the online contact form is recommended.

---

## ✨ Key Features

- **Responsive & Modern Design**: Optimized for desktops, tablets, and smartphones using Bootstrap 4 and custom responsive stylesheets.
- **Brand Consistency**: Styled with clean typography (Poppins & Montserrat), subtle gold-champagne accents (`#C89667`), and dark-contrast section designs.
- **Sticky / Parallax Header Navigation**: Dynamic navigation bar with TMStickUp and smooth scroll-to-top functionality.
- **Hair & Styling Blog**:
  - News & Advice feed featuring articles on hair care, styling trends, and maintenance.
  - Sidebar with category filters, keyword search, latest news snippets, and newsletter subscription.
- **Detailed Article View (`BlogPost`)**:
  - Complete article reading layout with quotes, typography, and social sharing.
  - Interactive **Owl Carousel** displaying related styling posts.
- **Dedicated Contact & Booking Page (`Contacts`)**:
  - Highlights primary and alternative phone numbers, email addresses, and studio locations.
  - Interactive appointment booking and inquiry submission form.
- **Footer with Contact Integration**:
  - Every page features prominent primary and alternative contact details, location highlights, social links, and quick navigation.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) (v16.13.1)
- **Routing**: [React Router DOM](https://v5.reactrouter.com/) (v5.1.2)
- **UI & Layout**: [Bootstrap](https://getbootstrap.com/) (v4.4.1)
- **Icon Sets**:
  - Font Awesome (`fa`)
  - Linearicons (`linearicons-`)
  - Material Design Icons (`mdi`)
- **Interactive Libraries**:
  - jQuery (v3.5.0)
  - Owl Carousel 2 (`react-owl-carousel`)
  - WOW.js (Viewport scroll animation)
  - Parallax.js (Depth scroll effect)

---

## 📁 Project Structure

```text
Frame-Salon/
├── public/
│   ├── favicon.ico             # Salon favicon
│   ├── index.html              # Main HTML entry with Frame Salon metadata
│   ├── manifest.json           # PWA web manifest
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── css/                # Bootstrap, fonts, and custom styles
│   │   ├── fonts/              # Icon fonts & typography
│   │   ├── images/             # Logos, banners, team, and blog imagery
│   │   └── js/                 # Carousel, parallax, and UI helper scripts
│   ├── components/
│   │   ├── Blog/
│   │   │   ├── Breadcrumbs.js  # Parallax breadcrumb header for blog
│   │   │   └── Haircut.js      # Blog feed and sidebar widgets
│   │   ├── BlogPost/
│   │   │   ├── Breadcrumbs.js  # Post breadcrumb header
│   │   │   ├── NewHaircut.js   # Main blog post content layout
│   │   │   └── RelatedPosts.js # Carousel showing related articles
│   │   ├── Contacts/
│   │   │   ├── Breadcrumbs.js  # Contact page header
│   │   │   └── ContactDetails.js # Contact cards, alternative channels & booking form
│   │   ├── Header.js           # Main navigation header with sticky bar
│   │   └── Footer.js           # Footer with primary & alternative contact info
│   ├── pages/
│   │   ├── Blog.js             # Blog listing page (Home route)
│   │   ├── BlogPost.js         # Single blog post page
│   │   └── Contacts.js         # Dedicated contact & appointment page
│   ├── App.js                  # Route definitions
│   ├── index.js                # React DOM root render
│   └── serviceWorker.js
├── package.json                # Project configuration and dependencies
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the Frame Salon website locally:

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (Node 16+ or Node 18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone or open the project directory:
   ```bash
   cd Frame-Salon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   > *Note for newer Node versions (Node 18+ / 20+)*: If dependency resolution warnings occur, use:
   > ```bash
   > npm install --legacy-peer-deps
   > ```

### Running the App

Start the local development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the Frame Salon website.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode with hot reload at [http://localhost:3000](http://localhost:3000).
- `npm run build`: Builds the app for production into the `build` folder, optimizing performance and assets.
- `npm test`: Launches the test runner in interactive watch mode.

---

## 🎨 Customization Guide

- **Update Contact Information**: Edit `src/components/Footer.js` and `src/components/Contacts/ContactDetails.js` to modify phone numbers, emails, addresses, or business hours.
- **Update Branding / Logos**: Replace or update `src/assets/images/logo-inverse-162x54.png` or modify the brand title in `public/index.html`.
- **Add / Modify Blog Posts**: Manage blog content and articles in `src/components/Blog/Haircut.js` and `src/components/BlogPost/NewHaircut.js`.
- **Navigation Routes**: Modify routes in `src/App.js` and corresponding links in `src/components/Header.js`.

---

## 📄 License

This project is created and maintained for **Frame Salon**. All rights reserved.


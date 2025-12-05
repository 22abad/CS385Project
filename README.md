<div align="center">
<h1>🌱 EcoBites</h1>
<p>
<b>Prevent Food Waste Today! Save Money, Save Food, Save the Planet.</b>
</p>

<!-- Badges for Tech Stack & Status -->

<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
<img src="https://img.shields.io/badge/Deployed%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" />
<img src="https://img.shields.io/badge/Firebase-Integration-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />


<img src="https://img.shields.io/github/last-commit/22abad/CS385Project?style=flat-square&color=green" alt="Last Commit" />
<img src="https://img.shields.io/badge/Status-Active_Development-success?style=flat-square" alt="Status" />

<br />
<br />

<!-- Live Demo Link Button -->

<a href="https://ecobites.nb.ax">
<img src="https://img.shields.io/badge/🚀_View_Live_Demo-ecobites.nb.ax-2ea44f?style=for-the-badge" alt="Live Demo" />
</a>
</div>

<br />

📖 About The Project (CS385)

EcoBites is a web application designed to help reduce food waste by connecting customers with local stores that have surplus food. Inspired by Too Good To Go, our platform allows users to browse "Magic Bags" at discounted prices.

This project serves as our group submission for CS385.

✨ Key Features (Highlights)

🚀 Automated Deployment: The project is hosted on Cloudflare Pages with CI/CD integration. Every push to the main branch is automatically deployed.

📱 Responsive UI: Built with Bootstrap 5, ensuring the app looks great on mobile, tablet, and desktop.

📦 Component-Based Architecture: Clean React project structure (Header, MainContent, Browse, Footer).

🛒 Dynamic Browse Section: Real-time rendering of store cards with "Sold Out" logic and dynamic styling based on item availability.

🚀 Firebase Integration: Utilizes Firebase for real-time database (Firestore) for product management and user authentication.

🔒 User Authentication: Implements secure user login, registration, global logout, and protected routes using Firebase Authentication.

🎨 Modern Design: Custom CSS styling, including circular design elements and professional footer layout.

🚧 Project Roadmap & Progress

Here is the current status of our development:

[x] Project Setup: React environment configured & dependencies fixed.

[x] CI/CD Pipeline: Connected GitHub to Cloudflare Pages for auto-deployment.

[x] Home Page: Hero section with circular feature highlights (Designed by Alyssa).

[x] Browse Feature: List view of available stores with mock data logic.

[x] Global Footer: Professional footer with links and branding.

[x] Navigation: React Router setup for multi-page navigation (including login, how-it-works).

[x] Order Page: Functionality to reserve items (with cart, place order).

[x] About Us Page: Team information and mission statement.

[x] State Management: Shopping cart or reservation state.

[x] Firebase Product Management: Dynamic product listing from Firestore.

[x] Firebase Authentication: User login, registration, and session management.

[x] Database Utility Buttons: Add/Delete products for easy testing.

💻 Technologies Used

Frontend: React.js

Styling: Bootstrap 5 & Custom CSS

Backend/Database: Firebase (Firestore, Authentication)

Deployment: Cloudflare Pages

Version Control: Git & GitHub

🛠️ Getting Started (For Developers)

To run this project locally, please follow these steps:

1. Clone the repository

```bash
git clone https://github.com/22abad/CS385Project.git
cd CS385Project
```

2. Install Dependencies

Important: You must run this command to install the necessary node modules.

```bash
npm install
```

3. Firebase Configuration

To connect your application to Firebase, you need to set up your Firebase project and provide its configuration details as environment variables.

   a. **Firebase Project Setup:**
      *   Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
      *   Add a web app to your project and obtain your `firebaseConfig` object from the project settings.
      *   Enable "Email/Password" provider in Firebase Authentication.

   b. **Environment Variables:**
      *   Create a file named `.env.local` in the root of your project. This file is ignored by Git and will not be committed.
      *   Populate it with your Firebase configuration values. Each variable name **must** be prefixed with `REACT_APP_` for React to recognize it.
      *   Example `.env.local` content (replace `YOUR_...` with your actual values):
          ```
          REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
          REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
          REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
          REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
          REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
          REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
          ```
      *   You can find these values in your Firebase project settings under "Your apps" > "Web" > "Config".

   c. **Local Development:**
      *   After creating/modifying `.env.local`, you **must completely stop and restart** your local development server (`Ctrl+C` then `npm start`) for the new environment variables to take effect.

   d. **Deployment:**
      *   For deployment to platforms like Cloudflare Pages, you **must configure these `REACT_APP_FIREBASE_` environment variables directly** in your hosting provider's settings. Online environments do not read your local `.env.local` file. Refer to your hosting platform's documentation for exact steps.

4. Run the App

```bash
npm start
```

Open http://localhost:3000 to view it in your browser.

👥 Contributors

Dong Li - Infrastructure, CI/CD Deployment, Git Management & Footer Component

Alyssa Lilly - UI/UX Design, Home Page & Visual Layout

Rujing Xu - API Integration & Data Management

Noah Montgomery - Frontend Support, Quality Assurance & Documentation

<div align="center">
<small>CS385 Project - Maynooth University</small>
</div>
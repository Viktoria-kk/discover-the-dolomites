# Discover the Dolomites

A responsive travel-themed React website about the Dolomite Mountains in Italy. The app includes a polished home page, a travelers page powered by JSONPlaceholder data, individual traveler review pages, and shared navigation using React Router.

## Features

- React Router application with home, travelers, and traveler review pages
- Home page with Dolomites hero section and call-to-action navigation
- Travelers page that fetches users from `https://jsonplaceholder.typicode.com/users`
- Individual traveler review pages with tour reviews and star ratings
- Shared header and footer across every page
- Active navigation link styling
- Responsive blue and green travel-inspired design
- Reusable component structure

## Tech Stack

- React
- React Router
- Vite
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a new GitHub repository.
2. Push this project to the repository.
3. In GitHub, open `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to the `main` branch.
6. Open the finished deployment from the repository `Actions` tab or from `Settings` > `Pages`.

## Project Structure

```text
src/
|-- components/
|   |-- Header.jsx
|   `-- Footer.jsx
|-- data/
|   `-- travelerReviews.js
|-- pages/
|   |-- Home.jsx
|   |-- TravelerReview.jsx
|   `-- Users.jsx
|-- App.jsx
|-- main.jsx
`-- App.css
```

## Credit

Created by Viktoria Kazarovi.

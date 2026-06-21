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

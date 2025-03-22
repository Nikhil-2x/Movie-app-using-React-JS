# Movie Search App

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-1.3-F02E65?logo=appwrite)](https://appwrite.io/)
[![TMDB](https://img.shields.io/badge/TMDB-API-01D277?logo=themoviedatabase)](https://www.themoviedb.org/)

A modern movie discovery platform combining real-time search analytics with trending content tracking, built with React and powered by TMDB API.


## ✨ Features

### Core Functionality
- **Smart Search** with 500ms debounce
- **Trending Movies** tracking (Top 5 searches)
- **Animated Movie Cards** using Framer Motion
- **Search Analytics** via Appwrite backend
- **Responsive Design** for all devices

### Technical Highlights
- 🎭 Smooth hover animations and transitions
- 📊 Real-time search frequency tracking
- 🛡️ Error boundaries and loading states
- 🖼️ Dynamic image loading with fallbacks
- 📈 Pagination-ready architecture

## 🛠 Tech Stack

| Category          | Technologies                                                                 |
|-------------------|------------------------------------------------------------------------------|
| Frontend          | React 18, Vite, React Router                                                 |
| Styling           | Tailwind CSS, CSS Modules, Custom Animations                                |
| State Management  | React Hooks (useState, useEffect), Context API                              |
| Backend Services  | Appwrite (Database, Analytics), TMDB API                                    |
| UI Components     | Framer Motion, Custom Spinner                     |

## 🚀 Quick Start

### Installation
1. Clone repository:
   ```bash
   git clone https://github.com/Nikhil-2x/Movie-app-using-React-JS.git
   cd Movie-app-using-React-JS
2. Install dependencies:
    ```bash
    npm install
3. Create .env file:
    ```bash
    VITE_TMDB_API_KEY=your_tmdb_key
    VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
    VITE_APPWRITE_DATABASE_ID=your_db_id
    VITE_APPWRITE_COLLECTION_ID=your_collection_id
4. Start development server:
    ```bash
    npm run dev
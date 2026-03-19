# SHSMS - Smart Homeless Shelter Management System

## Overview
A static web application (HopeHarbor) that helps homeless people find safe shelters. Built with plain HTML, CSS, and JavaScript.

## Project Structure
- `splash.html` - Entry point / splash screen (redirects to welcome.html after 3s)
- `welcome.html` - Welcome screen with login/signup options
- `index.html` - Main shelter search page with map integration
- `login.html` - User login (Firebase Auth)
- `createacc.html` - Account creation (Firebase Auth + Firestore)
- `preferences.html` - Shelter preferences form (Firestore)
- `dashboard.html` - Analytics dashboard with Chart.js
- `shelter.js` - Shelter data and search logic
- `map.js` - Google Maps integration
- `dashboard.js` - Chart.js dashboard
- `welcome.js` - Welcome page navigation
- `script.js` - Splash screen redirect timer
- `style.css` - Splash page styles
- `welcome.css` - Welcome page styles
- `server.js` - Simple Node.js static file server

## Backend / Services
- **Firebase Auth** - User authentication (email/password)
- **Firebase Firestore** - User data and preferences storage
- **Google Maps API** - Shelter map (requires API key in index.html)
- **Chart.js** (CDN) - Dashboard charts

## Running the App
The app is served by a simple Node.js static server:
```
node server.js
```
Runs on port 5000 (host: 0.0.0.0).

## Deployment
Configured for autoscale deployment using `node server.js`.

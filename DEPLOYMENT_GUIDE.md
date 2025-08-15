
# DEPLOYMENT_GUIDE - Learn ii Learn (MVP)

## Overview
This guide explains how to configure Firebase Authentication, MongoDB Atlas, and deploy the frontend to Vercel and backend to Render.

### Firebase
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Email/Password sign-in in Authentication > Sign-in method.
3. Create a Web App and copy the firebaseConfig to your frontend .env.

### MongoDB Atlas
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Create a database user and whitelist your IP (or allow access from Render).
3. Copy the connection string to backend .env as MONGODB_URI.

### Vercel (Frontend)
1. Create a Vercel account and link your GitHub repo.
2. Set environment variables (if any) in the Vercel dashboard.
3. Deploy the frontend project.

### Render (Backend)
1. Create an account at https://render.com/
2. Create a new Web Service, connect your GitHub repo branch.
3. Add environment variables in Render settings (MONGODB_URI, FIREBASE_ADMIN_CREDENTIALS).
4. Deploy and copy the service URL to frontend env for API calls.

## Local testing
- Start backend: `node server.js` (in backend/)
- Start frontend: `npm start` (in frontend/)

## Notes
- Replace placeholder routes and add authentication middleware as needed.
- Connect storage (Firebase Storage or S3) for assignment uploads and certificate files.

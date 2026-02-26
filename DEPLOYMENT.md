# Deployment Guide

## Deploying to Vercel

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/)
3. Sign in and click "Add New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Vercel will automatically detect this is a React app and configure the build settings
7. Your app will be deployed with a unique URL

### Option 2: Deploy from Command Line

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Navigate to your project directory:
   ```bash
   cd weather-app
   ```

3. Run the deploy command:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment
   - The `vercel.json` file is already configured for this project
   - Output directory is set to `build`

### Configuration Details

The `vercel.json` file contains the necessary configuration:
- Builds using `npm run build`
- Serves the `build` directory as static files
- Routes all URLs to `index.html` to support client-side routing

### Environment Variables

This application does not require any environment variables as it uses client-side API calls to Open-Meteo and OpenStreetMap Nominatim APIs.

### Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard under your project settings.
# Deployment Guide

This guide covers how to deploy your Date Invitation app to various hosting platforms.

## Quick Deploy Options

### 1. Deploy to Vercel (Recommended for Full-Stack Apps)

Vercel provides excellent support for Node.js applications with zero configuration.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect the configuration
6. Click "Deploy"

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The included `vercel.json` file handles the routing automatically.

### 2. Deploy to Railway

Railway offers simple deployment with automatic SSL and custom domains.

**Steps:**
1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js
6. Set environment variables if needed
7. Deploy!

**Settings:**
- Start Command: `npm start`
- Build Command: `npm install && npm run build`

### 3. Deploy to Render

Render provides free hosting for web services with easy configuration.

**Steps:**
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: your-app-name
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Click "Create Web Service"

### 4. Deploy to Heroku

Heroku is a classic platform with good Node.js support.

**Steps:**
1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Push to Heroku: `git push heroku main`

The `Procfile` is already configured for Heroku.

### 5. Deploy to Netlify (Static Export Alternative)

If you want to deploy as a static site (frontend only):

**Note:** This requires modifying the app to work without the backend.

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Deploy!

## Environment Variables

Most platforms allow you to set environment variables through their dashboard. Common variables you might need:

```env
PORT=5000
NODE_ENV=production
```

### Setting Environment Variables:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

**Railway:**
- Go to your service → Variables tab
- Add variables as needed

**Render:**
- Go to your service → Environment tab
- Add variables as key-value pairs

**Heroku:**
```bash
heroku config:set PORT=5000
heroku config:set NODE_ENV=production
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

### Railway
1. Go to your service → Settings
2. Click "Generate Domain" or add custom domain
3. Configure DNS settings

### Render
1. Go to your service → Settings
2. Add custom domain under "Custom Domains"
3. Update DNS records

## Post-Deployment Checklist

- [ ] Verify the application loads correctly
- [ ] Test all features and animations
- [ ] Check that environment variables are set correctly
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)
- [ ] Configure monitoring/analytics (optional)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json` (not devDependencies)
- Verify Node.js version compatibility
- Check build logs for specific errors

### App Doesn't Start
- Verify `PORT` environment variable is set correctly
- Check that start command is `npm start`
- Review application logs for errors

### 404 Errors
- Ensure routing configuration is correct
- For Vercel: check `vercel.json` routing rules
- For other platforms: verify build output directory

### Performance Issues
- Enable production builds (`NODE_ENV=production`)
- Consider upgrading to paid tier for better resources
- Optimize assets and images

## Monitoring

Consider setting up monitoring services:
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Google Analytics** - User analytics
- **UptimeRobot** - Uptime monitoring

## Continuous Deployment

All recommended platforms support automatic deployments:
1. Push to your GitHub repository
2. Platform automatically detects changes
3. New deployment is created automatically
4. Previous deployments remain accessible (rollback capability)

## Database Setup (If Needed)

If you need to add a database:

**PostgreSQL Options:**
- Vercel Postgres
- Railway Postgres
- Render PostgreSQL
- Supabase
- Neon

See the main README for database setup instructions.

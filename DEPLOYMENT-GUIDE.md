# Deployment Guide for Hana Berhe Portfolio

## Tech Stack Overview

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **State Management**: React Query
- **Routing**: Wouter

### Backend (Optional for Free Deployment)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL (via Neon Database)
- **ORM**: Drizzle ORM

## Vercel Free Tier Deployment (Frontend Only)

### Prerequisites
1. GitHub account
2. Vercel account (free)
3. Completed portfolio with all content

### Deployment Steps

1. **Prepare Your Code**
   ```bash
   # Make sure you're in the project root directory
   cd myportfolio
   
   # Ensure all dependencies are installed
   cd client
   npm install
   cd ..
   ```

2. **Test Build Locally**
   ```bash
   # Build the client application
   cd client
   npm run build
   
   # Preview the build
   npm run preview
   ```

3. **Push to GitHub**
   ```bash
   # Initialize git repository (if not already done)
   git init
   git add .
   git commit -m "Initial commit for deployment"
   
   # Create a GitHub repository and push your code
   # Follow GitHub's instructions to push an existing repository
   ```

4. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the framework settings:
     - **Build Command**: `cd client && npm run build`
     - **Output Directory**: `client/dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

5. **Configure Environment Variables (if needed)**
   - In Vercel project settings, go to "Environment Variables"
   - Add any required variables like EmailJS credentials

### Contact Form Configuration

Your portfolio uses EmailJS for the contact form. To make it work:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a new service and template
3. Update the EmailJS configuration in `client/src/components/sections/contact.tsx`:
   ```typescript
   // Initialize EmailJS with your User ID
   useEffect(() => {
     emailjs.init('YOUR_EMAILJS_USER_ID');
   }, []);

   const handleSubmit = async (e: React.FormEvent) => {
     // Use your Service ID and Template ID
     const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
     const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
     // ... rest of the code
   };
   ```

### Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Limitations of Free Tier

1. **No Serverless Functions**: The free tier doesn't support backend serverless functions
2. **Limited Build Minutes**: 6000 minutes per month
3. **No Analytics**: Advanced analytics require a paid plan

## Alternative Deployment Options

### Netlify (Free Tier)
- Similar to Vercel with comparable free tier features
- Good alternative for static sites

### GitHub Pages (Completely Free)
- Host directly from your GitHub repository
- Requires manual build process

### Render (Free Tier)
- Supports both frontend and backend
- Has some limitations on always-on hosting

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Ensure all dependencies are correctly listed in package.json
   - Check for TypeScript errors

2. **404 Errors on Routes**
   - Make sure vercel.json has the correct rewrites configuration

3. **Images Not Loading**
   - Verify all image paths are correct
   - Ensure images are in the public directory

### Contact Form Not Working
1. Verify EmailJS credentials
2. Check browser console for errors
3. Ensure the form is not blocked by ad blockers

## Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Check for security vulnerabilities

2. **Content Updates**
   - Simply push new commits to GitHub
   - Vercel will automatically redeploy

3. **Monitoring**
   - Use Vercel's built-in analytics
   - Monitor for build failures
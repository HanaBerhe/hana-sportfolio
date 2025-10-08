# Deployment Checklist for Hana Berhe Portfolio

## Pre-deployment Tasks

### [ ] 1. Final Testing
- [ ] Test all sections display correctly
- [ ] Verify all links work (social media, projects, etc.)
- [ ] Test contact form functionality locally
- [ ] Check responsive design on different screen sizes
- [ ] Verify dark/light theme toggle works

### [ ] 2. Content Review
- [ ] Proofread all text for typos and grammar
- [ ] Verify all personal information is current
- [ ] Confirm resume is in the correct location (client/public/resume/)
- [ ] Check that all images load correctly
- [ ] Verify project descriptions are accurate

### [ ] 3. Performance Optimization
- [ ] Optimize images for web (if needed)
- [ ] Remove any unused code or dependencies
- [ ] Confirm build completes without errors

## GitHub Setup

### [ ] 1. Create Repository
- [ ] Go to https://github.com/new
- [ ] Enter repository name (e.g., "hana-portfolio")
- [ ] Set visibility to Public
- [ ] Do NOT initialize with a README
- [ ] Click "Create repository"

### [ ] 2. Push Code
- [ ] Run: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git`
- [ ] Run: `git branch -M main`
- [ ] Run: `git push -u origin main`

## Vercel Deployment

### [ ] 1. Connect to Vercel
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign up or sign in
- [ ] Click "New Project"
- [ ] Import your GitHub repository

### [ ] 2. Configure Project Settings
- [ ] Build Command: `cd client && npm run build`
- [ ] Output Directory: `client/dist`
- [ ] Install Command: `npm install`

### [ ] 3. Add Environment Variables
- [ ] Go to project settings → Environment Variables
- [ ] Add:
  - `VITE_EMAILJS_USER_ID` = your EmailJS User ID
  - `VITE_EMAILJS_SERVICE_ID` = your EmailJS Service ID
  - `VITE_EMAILJS_TEMPLATE_ID` = your EmailJS Template ID

### [ ] 4. Deploy
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

## Post-deployment Tasks

### [ ] 1. Verify Deployment
- [ ] Visit your deployed portfolio URL
- [ ] Test all functionality works as expected
- [ ] Verify contact form works (check EmailJS dashboard)

### [ ] 2. Custom Domain (Optional)
- [ ] Purchase or configure custom domain
- [ ] Add domain in Vercel project settings
- [ ] Configure DNS records as instructed

### [ ] 3. Share Your Portfolio
- [ ] Update LinkedIn profile with portfolio link
- [ ] Share with potential employers/recruiters
- [ ] Add to email signature

## Troubleshooting

### Common Issues
1. **Contact form not working**: Verify EmailJS credentials in environment variables
2. **Images not loading**: Check file paths and ensure images are in public directory
3. **404 errors on routes**: Confirm vercel.json configuration
4. **Slow loading times**: Optimize images and check build output

### Need Help?
- Check the DEPLOYMENT-GUIDE.md file for detailed instructions
- Refer to EmailJS documentation for contact form setup
- Consult Vercel documentation for deployment issues
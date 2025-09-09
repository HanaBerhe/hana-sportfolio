# Resume Download Setup Guide

## 📁 File Structure

To enable the resume download functionality, create the following folder structure:

```
SkillShowcase/
├── client/
│   ├── public/
│   │   ├── resume/                    ← CREATE THIS FOLDER
│   │   │   └── Hana_Berhe_Girmay_Resume.pdf  ← PUT YOUR PDF HERE
│   │   ├── images/
│   │   └── index.html
│   └── src/
```

## 🚀 Setup Instructions

### Step 1: Create the Resume Folder
1. Navigate to: `SkillShowcase/client/public/`
2. Create a new folder named: `resume`
3. The full path should be: `SkillShowcase/client/public/resume/`

### Step 2: Add Your PDF Resume
1. Place your PDF resume file in the `resume` folder
2. Name it exactly: `Hana_Berhe_Girmay_Resume.pdf`
3. The full path should be: `SkillShowcase/client/public/resume/Hana_Berhe_Girmay_Resume.pdf`

### Step 3: Test the Download
1. Start your development server
2. Go to your portfolio website
3. Click the "Download Resume" button in the hero section
4. Your PDF should download automatically

## 📋 File Naming Options

You can use any of these filenames (update the code accordingly):
- `Hana_Berhe_Girmay_Resume.pdf` (recommended)
- `Hana_Berhe_Resume.pdf`
- `resume.pdf`
- `CV_Hana_Berhe.pdf`

## 🔄 Alternative Options

### Option 1: Use Your Own PDF (Recommended)
- Place your professionally designed PDF in the public/resume/ folder
- The download button will serve your actual resume file

### Option 2: Use Generated PDF (Fallback)
- If no PDF file is found, you can uncomment the generateResumePDF() function
- This will create a PDF dynamically from your portfolio data

## ✅ Benefits of Using Your Own PDF

1. **Professional Design**: Use your custom-designed resume
2. **Faster Loading**: No generation time required
3. **Consistent Formatting**: Exactly what you want employers to see
4. **Better Control**: Full control over layout, fonts, and styling

## 🛠️ Troubleshooting

### File Not Found Error
- Ensure the folder path is correct: `client/public/resume/`
- Check the filename matches exactly: `Hana_Berhe_Girmay_Resume.pdf`
- Make sure the file is in the public folder, not src folder

### Download Not Working
- Clear browser cache and try again
- Check browser console for any errors
- Verify the file path in the network tab

## 📝 Next Steps

1. Create the `resume` folder in `client/public/`
2. Add your PDF resume file
3. Test the download functionality
4. Customize the filename if needed

The download button is now configured and ready to work once you add your PDF file!
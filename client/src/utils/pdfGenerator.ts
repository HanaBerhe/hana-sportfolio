import jsPDF from 'jspdf';

export const generateResumePDF = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  
  // Set up the document
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Helper function to add text with wrapping
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    pdf.setFontSize(options.fontSize || 10);
    pdf.setFont(options.font || 'helvetica', options.style || 'normal');
    
    if (options.color) {
      pdf.setTextColor(options.color);
    }
    
    if (options.maxWidth) {
      const lines = pdf.splitTextToSize(text, options.maxWidth);
      pdf.text(lines, x, y);
      return y + (lines.length * (options.lineHeight || 5));
    } else {
      pdf.text(text, x, y);
      return y + (options.lineHeight || 5);
    }
  };

  // Header
  pdf.setFillColor(41, 128, 185);
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  pdf.setTextColor(255, 255, 255);
  yPosition = addText('Hana Berhe Girmay', margin, 20, { fontSize: 18, font: 'helvetica', style: 'bold' });
  yPosition = addText('Data Analyst & Software Developer', margin, yPosition + 5, { fontSize: 12 });
  
  // Contact Information
  pdf.setTextColor(0, 0, 0);
  yPosition = 50;
  yPosition = addText('Contact Information', margin, yPosition, { fontSize: 14, style: 'bold' });
  yPosition = addText('Phone: +251942684581', margin, yPosition + 5, { fontSize: 10 });
  yPosition = addText('Email: hanagrimay@gmail.com', margin, yPosition + 5, { fontSize: 10 });
  yPosition = addText('Location: Addis Ababa, Ethiopia', margin, yPosition + 5, { fontSize: 10 });
  
  // Profile
  yPosition += 10;
  yPosition = addText('PROFILE', margin, yPosition, { fontSize: 14, style: 'bold' });
  const profileText = 'A highly driven and adaptable information systems graduate with a strong background in data analysis and software development. Earned a B.Sc. in Information Systems from Addis Ababa University in July 2024. Gained proven business experience through internships at the Commercial Bank of Ethiopia and Unilever, applying technical expertise and analytical skills to deliver positive outcomes.';
  yPosition = addText(profileText, margin, yPosition + 5, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 5 });

  // Work Experience
  yPosition += 10;
  yPosition = addText('WORK EXPERIENCE', margin, yPosition, { fontSize: 14, style: 'bold' });
  
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Commercial Bank of Ethiopia',
      location: 'Addis Ababa',
      period: 'Present',
      description: 'Analyzing financial data and market trends to support strategic decision-making.'
    },
    {
      title: 'Virtual Assistant & Data Entry Specialist (Freelancer)',
      company: 'Freelance',
      location: 'Remote',
      period: 'Present',
      description: 'Providing comprehensive virtual assistance services including data entry, administrative support, research, and client communication.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Ministry of Tourism',
      location: 'Addis Ababa',
      period: '3 Months (September 2024)',
      description: 'Contributed to the development of tourism information systems and digital platforms.'
    },
    {
      title: 'Marketing Data Analyst (Contract)',
      company: 'Unilever',
      location: 'Addis Ababa',
      period: '3 Months (May 2024)',
      description: 'Analyzed consumer behavior and market trends to support marketing campaign optimization.'
    }
  ];

  experiences.forEach((exp) => {
    yPosition += 5;
    yPosition = addText(`${exp.title} | ${exp.company}`, margin, yPosition, { fontSize: 11, style: 'bold' });
    yPosition = addText(`${exp.location} | ${exp.period}`, margin, yPosition + 3, { fontSize: 9, color: [100, 100, 100] });
    yPosition = addText(exp.description, margin, yPosition + 3, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });
  });

  // Education
  yPosition += 10;
  yPosition = addText('EDUCATION', margin, yPosition, { fontSize: 14, style: 'bold' });
  yPosition = addText('Addis Ababa University (2021–2024) | B.Sc. in Information Systems', margin, yPosition + 5, { fontSize: 11, style: 'bold' });

  // Skills
  yPosition += 10;
  yPosition = addText('SKILLS', margin, yPosition, { fontSize: 14, style: 'bold' });
  yPosition = addText('Data Analysis & ML: Python (Pandas, NumPy, Scikit-learn), R, SQL, TensorFlow, Power BI, Tableau, Excel', margin, yPosition + 5, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });
  yPosition = addText('Software Development: JavaScript (ES6+), React, Node.js, Express.js, HTML5, CSS3, REST APIs, Git & GitHub', margin, yPosition + 3, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });
  yPosition = addText('Virtual Assistant: Data Entry, Administrative Support, Project Management, Client Communication, Research', margin, yPosition + 3, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });
  
  // Languages
  yPosition += 10;
  yPosition = addText('LANGUAGES', margin, yPosition, { fontSize: 14, style: 'bold' });
  yPosition = addText('Amharic (Native), English (Fluent), Afan Oromo (Fluent), Af-Somali (Fluent), Tigrigna (Intermediate), Arabic (Intermediate)', margin, yPosition + 5, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });

  // Voluntary Participation
  yPosition += 10;
  yPosition = addText('VOLUNTARY PARTICIPATION', margin, yPosition, { fontSize: 14, style: 'bold' });
  const voluntaryWork = [
    'Human Rights Trainer & Facilitator - Leading training sessions and workshops on human rights awareness and advocacy',
    'Women\'s Rights Advocate - Promoting gender equality and women\'s empowerment through educational programs',
    'Child Rights Protection Leader - Developing programs focused on child protection and education rights',
    'Disability Rights Facilitator - Advocating for accessibility and inclusion while facilitating awareness programs',
    'Sustainable Peace Dialogue Leader & Initiator - Initiating and leading peace dialogue sessions on campus'
  ];
  
  voluntaryWork.forEach((work) => {
    yPosition = addText(`• ${work}`, margin, yPosition + 4, { fontSize: 10, maxWidth: pageWidth - 2 * margin, lineHeight: 4 });
  });

  // Certifications
  yPosition += 10;
  yPosition = addText('CERTIFICATIONS', margin, yPosition, { fontSize: 14, style: 'bold' });
  const certifications = [
    'Introduction to Data Analytics',
    'Introduction to Artificial Intelligence',
    'Virtual Assistant',
    'Employability, Entrepreneurship, Servant Leadership (Mastercard Foundation)',
    'Digital Literacy (Mastercard Foundation)',
    'Human Rights Awareness Program (AAU Center & Sweden Embassy)'
  ];
  
  certifications.forEach((cert) => {
    yPosition = addText(`• ${cert}`, margin, yPosition + 4, { fontSize: 10 });
  });

  // Save the PDF
  pdf.save('Hana_Berhe_Girmay_Resume.pdf');
};
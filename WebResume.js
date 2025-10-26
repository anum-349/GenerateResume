const PdfPrinter = require('pdfmake');
const fs = require('fs');

// ---------------------- Resume Data ----------------------
const resumeData = {
  name: "ANUM KOUSAR",
  field: "Software Engineer",
  profile: "Creative and detail-oriented Software Engineering undergraduate with hands-on experience in developing responsive and interactive web applications using React, Tailwind, and Node.js/Express.js. Skilled in building secure RESTful APIs, managing frontend–backend integration, and deploying scalable applications with Docker. Strong foundation in JavaScript, Python, and C++, with a passion for creating clean, user-focused, and visually appealing digital experiences.",
  contacts: {
    email: "anumkousar552@gmail.com",
    phone: "+92 349 5445560",
    address: "Scheme III, Rawalpindi",
    linkedin: "linkedin.com/in/anum-kousar/",
    github: "github.com/anum-349",
  },
  technicalSkills: {
    Languages: "JavaScript, Python, C++, Java, HTML, CSS",
    Frameworks: "React, Tailwind, Node.js, Express.js, Flask",
    Tools: "Git, Docker, Postman, VS Code, PyCharm, Jira",
    Databases: "MongoDB, MySQL",
    Technologies: "RESTful APIs, Frontend Development, OAuth Authentication, Mapbox Integration, UI/UX Design, Responsive Web Design"
  },
  internships: [
    {
      title: "Machine Learning",
      date: "Aug 2025 - Sep 2025",
      company: "Next Gen Learners, Islamabad",
      details: [
        "Developed and optimized Machine Learning models",
        "Implemented NLP solutions"
      ],
    },
    {
      title: "Python & JavaScript",
      date: "Oct 2024 - Dec 2024",
      company: "PHP Laravel Experts, Lahore",
      details: [
        "Developed REST APIs using Flask",
        "Reduced bugs through comprehensive unit testing",
      ],
    },
    {
      title: "C++ Developer",
      date: "Jun 2024 - Jul 2024",
      company: "Digital Empowerment Network, Islamabad",
      details: [
        "Optimized algorithms that reduced memory usage",
        "Applied debugging techniques to resolve errors",
      ],
    },
  ],
 projects: [
  {
    title: "MuseTales – Artist Portfolio Website",
    date: "Oct 2025",
    details: [
      "Engineered a responsive artist portfolio platform, boosting page load speed by 30%.",
      "Improved backend API performance by 25%."
    ],
  },
  {
    title: "DevPortfolio",
    date: "Feb 2025",
    details: [
      "Designed an elegant developer portfolio using EJS templates.",
      "Deployed containerized build with Docker, reducing setup time by 40%."
    ],
  },
  {
    title: "Interactive 3D Project Globe",
    date: "Dec 2024",
    details: [
      "Crafted an interactive 3D globe using Three.js to visualize global project locations.",
      "Optimized user interaction, increase engagement time by 35%."
    ],
  },
  {
    title: "Stock Screener App",
    date: "Oct 2024",
    details: [
      "Developed a real-time stock screening tool powered by Flask backend and financial APIs.",
      "Implemented efficient data filtering, improving query response speed by 45%."
    ],
  },
],
  languages: ["Urdu (Native)", "English (Advanced)"],
  hobbies: ["Painting", "Calligraphy", "Arts & Crafts", "Novel Reading"],
  certifications: [
    "NextGenLearners (Machine Learning)",
    "Build with AI (Google workshop)",
    "DigiSkills (Freelancing)",
    "DEN (C++ Developer)",
    "HackerRank (Python)",
  ],
  education: "Bachelors in Software Engineering",
  educationdate: "2022 - 2026 (Expected)",
  university: "International Islamic University, Islamabad",
  educationSummary: {
    course: "Data Structures, Database, Operating Systems, Computer Networks, Machine Learning",
    gpa: "3.49/4.0",
  }
};

// ---------------------- Fonts ----------------------
const fonts = {
  Roboto: {
    normal: './fonts/times.ttf',
    bold: './fonts/timesbd.ttf',
    italics: './fonts/timesi.ttf',
    bolditalics: './fonts/timesbi.ttf',
  },
  FontAwesome: {
    normal: 'fonts/Solid-900.otf',
  },
  FontAwesomeBrands: {
    normal: 'fonts/fa-brands-400.ttf'
  },
};

const printer = new PdfPrinter(fonts);

// ---------------------- PDF Builder ----------------------
function buildPdfDoc(data) {
  return {
    pageSize: 'A4',
    pageMargins: [0, 0, 0, 0],
    content: [
      {
        columns: [
          // ----------------- LEFT SIDE -----------------
          {
            width: '60%',
            margin: [25, 25, 10, 25],
            stack: [
              { text: data.name, style: 'header', alignment: 'center' },
              { text: data.field, bold: true, color: '#014d4d', italics: true, alignment: 'center', fontSize: 16 },

              { text: 'SUMMARY', style: 'sectionHeader' },
              {
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 316,     // length of the line
                    y2: 0,       // same y for horizontal
                    lineWidth: 1,
                    lineColor: '#014d4d'
                  }
                ],
                margin: [0, 0, 0, 5]  // optional spacing above/below
              },
              { text: data.profile, alignment: 'justify', margin: [0, 0, 0, 10] },

              { text: 'EDUCATION', style: 'sectionHeader' },
              {
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 316,     // length of the line
                    y2: 0,       // same y for horizontal
                    lineWidth: 1,
                    lineColor: '#014d4d'
                  }
                ],
                margin: [0, 0, 0, 5]  // optional spacing above/below
              },
              {
                columns: [
                  { text: data.education, bold: true, width: 'auto' },
                  { text: data.educationdate, alignment: 'right', width: '*', bold: true },
                ],
              },
              { text: data.university },
              {
                text: [
                  { text: 'Relevant Coursework: ', bold: true, fontSize: 12 },
                  { text: data.educationSummary.course }
                ],
                margin: [0, 2]
              }, {
                text: [
                  { text: 'CGPA: ', bold: true, fontSize: 12 },
                  { text: data.educationSummary.gpa }
                ],
                margin: [0, 0, 2, 8]
              },

              { text: 'INTERNSHIPS', style: 'sectionHeader' },
              {
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 316,     // length of the line
                    y2: 0,       // same y for horizontal
                    lineWidth: 1,
                    lineColor: '#014d4d'
                  }
                ],
                margin: [0, 0, 0, 5]  // optional spacing above/below
              },
              ...data.internships
                .map((p) => [
                  {
                    columns: [
                      { text: p.title, bold: true, width: 'auto' },
                      { text: p.date, alignment: 'right', width: '*', bold: true },
                    ],
                  },
                  { text: p.company },
                  { ul: p.details, margin: [0, 0, 0, 8] },
                ])
                .flat(),

              { text: 'PROJECTS', style: 'sectionHeader' },
              {
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 316,     // length of the line
                    y2: 0,       // same y for horizontal
                    lineWidth: 1,
                    lineColor: '#014d4d'
                  }
                ],
                margin: [0, 0, 0, 5]  // optional spacing above/below
              },
              ...data.projects
                .map((p) => [
                  {
                    columns: [
                      { text: p.title, bold: true, width: 'auto' },
                      { text: p.date, alignment: 'right', width: '*', bold: true },
                    ],
                  },
                  { ul: p.details, margin: [0, 0, 0, 8] },
                ])
                .flat(),
            ],
          },

          // ----------------- RIGHT SIDE -----------------
          {
            width: '40%',
            table: {
              widths: ['*'],
              body: [
                [
                  {
                    stack: [
                      { text: 'CONTACTS', style: 'sectionHeader' },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 0,
                            x2: 200,     // length of the line
                            y2: 0,       // same y for horizontal
                            lineWidth: 1,
                            lineColor: '#66CCCC'
                          }
                        ],
                        margin: [0, 0, 0, 5]  // optional spacing above/below
                      },
                      {
                        text: [
                          { text: '\uf3c5  ', font: 'FontAwesome', fontSize: 12 },
                          { text: data.contacts.address }
                        ],
                        margin: [0, 2]
                      },
                      {
                        text: [
                          { text: '\uf095  ', font: 'FontAwesome', fontSize: 12 },
                          { text: data.contacts.phone }
                        ],
                        margin: [0, 2]
                      },
                      {
                        text: [
                          { text: '\uf0e0  ', font: 'FontAwesome', fontSize: 12 },
                          { text: data.contacts.email, link: `mailto:${data.contacts.email}`, color: '#66CCCC' }
                        ],
                        margin: [0, 2]
                      },
                      {
                        text: [
                          { text: '\uf08c', font: 'FontAwesomeBrands', fontSize: 12 },
                          { text: '    ' + data.contacts.linkedin, link: 'https://www.' + data.contacts.linkedin, color: '#66CCCC' }
                        ],
                        margin: [0, 2]
                      },
                      {
                        text: [
                          { text: '\uf09b', font: 'FontAwesomeBrands', fontSize: 12 },
                          { text: '    ' + data.contacts.github, link: 'https://www.' + data.contacts.github, color: '#66CCCC' }
                        ],
                        margin: [0, 0, 2, 20]
                      },

                      { text: 'TECHNICAL SKILLS', style: 'sectionHeader' },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 0,
                            x2: 200,     // length of the line
                            y2: 0,       // same y for horizontal
                            lineWidth: 1,
                            lineColor: '#66CCCC'
                          }
                        ],
                        margin: [0, 0, 0, 5]  // optional spacing above/below
                      },
                      {
                        ul: [
                          {
                            text: [
                              { text: 'Languages: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Languages }
                            ],
                            margin: [0, 5]
                          }, {
                            text: [
                              { text: 'Frameworks: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Frameworks }
                            ],
                            margin: [0, 5]
                          }, {
                            text: [
                              { text: 'Tools: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Tools }
                            ],
                            margin: [0, 5]
                          }, {
                            text: [
                              { text: 'Databases: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Databases }
                            ],
                            margin: [0, 5]
                          }, {
                            text: [
                              { text: 'Technologies: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Technologies }
                            ],
                            margin: [0, 0, 5, 20]
                          }
                        ],
                      },

                      { text: 'CERTIFICATIONS', style: 'sectionHeader' },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 0,
                            x2: 200,     // length of the line
                            y2: 0,       // same y for horizontal
                            lineWidth: 1,
                            lineColor: '#66CCCC'
                          }
                        ],
                        margin: [0, 0, 0, 5]  // optional spacing above/below
                      },
                      { ul: data.certifications },
                      { text: "", margin: [0, 0, 0, 20] },

                      { text: 'HOBBIES', style: 'sectionHeader' },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 0,
                            x2: 200,     // length of the line
                            y2: 0,       // same y for horizontal
                            lineWidth: 1,
                            lineColor: '#66CCCC'
                          }
                        ],
                        margin: [0, 0, 0, 5]  // optional spacing above/below
                      },
                      { ul: data.hobbies },
                      { text: "", margin: [0, 0, 0, 20] },

                      { text: 'LANGUAGES', style: 'sectionHeader' },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 0,
                            x2: 200,     // length of the line
                            y2: 0,       // same y for horizontal
                            lineWidth: 1,
                            lineColor: '#66CCCC'
                          }
                        ],
                        margin: [0, 0, 0, 5]  // optional spacing above/below
                      },
                      { ul: data.languages },
                    ],
                    margin: [15, 70, 15, 132],
                    color: 'white',
                  },
                ],
              ],
            },
            layout: {
              fillColor: () => '#014d4d',
              hLineWidth: () => 0,
              vLineWidth: () => 0,
            },
          },
        ],
        columnGap: 10,
        fontSize: 12,
      },
    ],
    styles: {
      header: { fontSize: 26, bold: true, margin: [0, 0, 0, 1], font: 'Roboto' },
      sectionHeader: {
        fontSize: 14,
        bold: true,
        margin: [0, 5, 0, 0],
      },
    },
  };
}

// ---------------------- Generate PDF ----------------------
const pdfDoc = printer.createPdfKitDocument(buildPdfDoc(resumeData));
const pdfPath = 'AnumKousarWebResume.pdf';
pdfDoc.pipe(fs.createWriteStream(pdfPath));
pdfDoc.end();

console.log('✅ Resume generated as resume.pdf');

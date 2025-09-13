const PdfPrinter = require('pdfmake');
const fs = require('fs');

// ---------------------- Resume Data ----------------------
const resumeData = {
  name: "ANUM KOUSAR",
  field: "Software Engineer",
  profile:
    "Software Engineering undergraduate skilled in Python, C++, Java, and full-stack web development with React and Tailwind. Experienced in building APIs and backend systems using FastAPI, deploying applications with Docker, and developing intelligent solutions with Machine Learning and NLP. Proficient with tools like Postman, VS Code, and PyCharm, and eager to apply technical expertise and problem-solving skills to create efficient, scalable, and impactful software solutions.",
  contacts: {
    email: "anumkousar552@gmail.com",
    phone: "+92 349 5445560",
    address: "Scheme III, Rawalpindi",
    linkedin: "linkedin.com/in/anum-kousar/",
    github: "github.com/anum-349",
  },
  technicalSkills: {
    Languages: "Python, C++, Java, JavaScript, HTML/CSS",
    Frameworks: "React, Tailwind, Flask, FastAPI, Express.js",
    Tools: "Git, Docker, Postman, VS Code, PyCharm, AWS EC2, Jira, WAMP",
    Databases: "MongoDB, MySQL, Oracle"
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
      title: "Artist Website (React, Node.js, Tailwind)",
      date: "Ongoing",
      details: [
        "Developing dynamic frontend with React and Tailwind",
        "Ensuring responsive design and secure database connections",
      ],
    },
    {
      title: "Career Guidance Chatbot (Python, ML/NLP)",
      date: "Sep 2025",
      details: [
        "Trained ML model to predict career roles from user queries",
        "Integrated chatbot with Streamlit for an interactive interface",
      ],
    },
    {
      title: "Custom Terminal/Shell (Python)",
      date: "Jun 2025",
      details: [
        "Implemented shell supporting commands, piping, background jobs, file operations, system information retrieval, and process management",
      ],
    },
    {
      title: "Job Portal System (Java)",
      date: "Jan 2025",
      details: [
        "Built terminal-based portal using Facade Pattern",
        "Implemented role-based access control",
      ],
    },
    {
      title: "Library Management System (C++)",
      date: "Nov 2023",
      details: [
        "Designed a system to manage book and patron information",
        "Automated book tracking and late fee calculations",
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
                            margin: [0, 2]
                          }, {
                            text: [
                              { text: 'Frameworks: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Frameworks }
                            ],
                            margin: [0, 2]
                          }, {
                            text: [
                              { text: 'Tools: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Tools }
                            ],
                            margin: [0, 2]
                          }, {
                            text: [
                              { text: 'Databases: ', bold: true, fontSize: 12 },
                              { text: data.technicalSkills.Databases }
                            ],
                            margin: [0, 0, 2, 20]
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
                    margin: [15, 70, 15, 200],
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
const pdfPath = 'resume2.pdf';
pdfDoc.pipe(fs.createWriteStream(pdfPath));
pdfDoc.end();

console.log('✅ Resume generated as resume.pdf');

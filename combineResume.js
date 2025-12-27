const PdfPrinter = require('pdfmake');
const fs = require('fs');

// ---------------------- Combined Job-Ready Resume Data ----------------------
const resumeData = {
    name: "ANUM KOUSAR",
    field: "Software Engineer",
    profile:
        "Results-driven and creative Software Engineering undergraduate with strong expertise in both web and backend development. Proficient in building scalable, user-focused applications using React, Next.js and Python frameworks such as FastAPI and Flask. Experienced in developing secure RESTful APIs, integrating databases, and containerizing systems with Docker. Adept at problem-solving, performance optimization, and delivering maintainable software solutions.",

    contacts: {
        email: "anumkousar552@gmail.com",
        phone: "+92 349 5445560",
        address: "Scheme III, Rawalpindi",
        linkedin: "linkedin.com/in/anum-kousar/",
        github: "github.com/anum-349",
    },

    technicalSkills: {
        Languages: "JavaScript, Python, C++, Java, HTML, CSS",
        Frameworks:
            "React, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI, Flask, Streamlit",
        Tools: "Git, Docker, Postman, VS Code, PyCharm, Jira, Figma",
        Databases: "MongoDB, MySQL, SQLite, PostgreSQL",
        Technologies:
            "RESTful APIs, MERN Stack, Machine Learning, NLP, OAuth Authentication, Responsive Web Design, UI/UX Design",
    },

    internships: [
        {
            title: "MERN Stack Intern",
            date: "Oct 10, 2025 – Present",
            company: "HH Tech Hub, Rawalpindi",
            details: [
                "Collaborating with teams to develop LMS and ERP.",
        "Developing and maintaining full-stack modules.",
            ],
        },
        {
            title: "Machine Learning Intern",
            date: "Aug 2025 – Sep 2025",
            company: "Next Gen Learners, Islamabad",
            details: [
                "Developed and optimized ML models for real-world datasets.",
                "Implemented NLP-based solutions for automation.",
            ],
        },
        {
            title: "Python & JavaScript Intern",
            date: "Oct 2024 – Dec 2024",
            company: "PHP Laravel Experts, Lahore",
            details: [
                "Developed RESTful APIs using Flask.",
                "Improved code quality and reduced bugs through debugging.",
            ],
        },
    ],

    projects: [
        {
            title: "Learning Management System (LMS)",
            date: "Ongoing",
            details: [
                "Developing a full-featured LMS with role-based access for admins, instructors, and students.",
                "Integrated backend APIs with a responsive Next.js frontend.",
            ],
        },
        {
            title: "MuseTales – Artist Portfolio Website",
            date: "Oct 2025",
            details: [
                "Built a responsive portfolio platform using React and Tailwind.",
                "Optimized page load performance and backend APIs.",
            ],
        },
        {
            title: "SmartDoc Retriever",
            date: "Sep 2025",
            details: [
                "Engineered a RAG-based document retrieval system using FAISS.",
                "Improved query relevance and response accuracy by 35%.",
            ],
        },
        {
            title: "Career Guidance Chatbot",
            date: "Jul 2025",
            details: [
                "Built an ML-powered chatbot to predict career paths with 85% accuracy.",
                "Designed an interactive Streamlit interface to enhance user engagement.",
            ],
        },
    ],

    languages: ["Urdu (Native)", "English (Advanced)"],

    hobbies: ["Painting", "Calligraphy", "Arts & Crafts", "Novel Reading"],

    certifications: [
        "NextGenLearners (Machine Learning)",
        "Build with AI – Google Workshop",
        "DigiSkills (Freelancing)",
        "DEN (C++ Developer)",
        "HackerRank (Python)",
    ],

    education: "Bachelors in Software Engineering",
    educationdate: "2022 – 2026 (Expected)",
    university: "International Islamic University, Islamabad",

    educationSummary: {
        course:
            "Data Structures, Databases, Operating Systems, Computer Networks, Machine Learning, Human Computer Interaction, Mobile Application Development",
        gpa: "3.49 / 4.0",
    },
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
                                        margin: [15, 70, 15, 118],
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
const pdfPath = 'AnumKousarCombineResume.pdf';
pdfDoc.pipe(fs.createWriteStream(pdfPath));
pdfDoc.end();

console.log('✅ Resume generated as resume.pdf');

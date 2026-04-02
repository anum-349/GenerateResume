const PdfPrinter = require('pdfmake');
const fs = require('fs');

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

// ---------------------- Resume Data ----------------------
const resumeData = {
    name: "Tanzila Kosar",
    field: "Educator / Teacher",
    profile: "Dedicated educator with a B.Ed (Honors Secondary) and extensive teaching experience across multiple schools. Skilled in creating engaging and effective learning environments, fostering student growth, and integrating practical laboratory sessions into the curriculum. Strong communication, problem-solving, and interpersonal skills enhance classroom management and student engagement.",

    contacts: {
        email: "tanzilakosar0340@gmail.com",
        phone: "+92 340 8985236",
        address: "Bagh, Azad Jammu & Kashmir",
    },

    technicalSkills: {
        Skills: "Communication, Time Management, Interpersonal Skills, Attention to Detail, Adaptability",
        Tools: "Basic Computer Skills",
    },

    projects: [
        {
            title: "Practical Performance in Secondary Level Chemistry",
            date: "2023 – 2024",
            details: [
                "Researched and analyzed the effectiveness of practical laboratory sessions in enhancing students' understanding of key chemistry concepts.",
                "Focused on hands-on experiments’ impact on engagement, theoretical knowledge retention, and skill development.",
                "Examined best practices for integrating practical work with curriculum goals, experimental design, student assessment, and resource allocation challenges in school laboratories.",
            ],
        },
    ],

    languages: ["Urdu (Native)", "English (Advanced)"],

    hobbies: ["Reading", "Arts & Crafts"],

    certifications: [
        "Computer Course – Lubaba Academy, Bagh AJK",
    ],

    education: [
        {
            degree: "MPhil",
            year: "Ongoing",
            university: "University of Azad Jammu & Kashmir, Muzaffarabad",
        },
        {
            degree: "Bachelor of Education (Honors Secondary)",
            year: "2020 – 2024",
            university: "University of Azad Jammu Kashmir, Muzaffarabad",
            gpa: "3.47 / 4",
        },
        {
            degree: "Intermediate (FSC)",
            year: "2018 - 2020",
            university: "BISE Rawalpindi",
            score: "672 / 1100",
        },
        {
            degree: "Matriculation",
            year: "2016 - 2018",
            university: "BISE Rawalpindi",
            score: "740 / 1100",
        },
    ],

    experience: [  
        {
            title: " Supply Path Optimization",
            school: "ROYRAN Pharmaceuticals, Muzaffarabad AJK",
            year: "2024 – 2025",
        },
        {
            
            title: "Teacher",
            school: "Spring Field, Bagh AJK",
            year: "2024",
        },
        {
            title: "Teacher",
            school: "Govt. Girls High School Bagh AJK",
            year: "2023",
        },
        {
            title: "Teacher",
            school: "Read Foundation, Bagh AJK",
            year: "2023",
        },
    ],
};

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
                                    { type: 'line', x1: 0, y1: 0, x2: 316, y2: 0, lineWidth: 1, lineColor: '#014d4d' }
                                ],
                                margin: [0, 0, 0, 5]
                            },
                            { text: data.profile, alignment: 'justify', margin: [0, 0, 0, 10] },

                            { text: 'EDUCATION', style: 'sectionHeader' },
                            {
                                canvas: [
                                    { type: 'line', x1: 0, y1: 0, x2: 316, y2: 0, lineWidth: 1, lineColor: '#014d4d' }
                                ],
                                margin: [0, 0, 0, 5]
                            },
                            ...data.education.map(ed => ({
                                stack: [
                                    {
                                        columns: [

                                            { text: ed.degree, bold: true, width: 'auto' },
                                            { text: ed.year, alignment: 'right', width: '*', bold: true },
                                        ],
                                    }, { text: ed.university },
                                    ed.gpa ? { text: `GPA: ${ed.gpa}` } : ed.score ? { text: `Score: ${ed.score}` } : {},
                                    { text: "", margin: [0, 0, 0, 5] }
                                ]
                            })),

                            { text: 'EXPERIENCE', style: 'sectionHeader' },
                            {
                                canvas: [
                                    { type: 'line', x1: 0, y1: 0, x2: 316, y2: 0, lineWidth: 1, lineColor: '#014d4d' }
                                ],
                                margin: [0, 0, 0, 5]
                            },
                            ...data.experience.map(exp => ({
                                stack: [
                                    { text: `${exp.title} (${exp.year})`, bold: true },
                                    { text: exp.school },
                                    { text: "", margin: [0, 0, 0, 5] }
                                ]
                            })),

                            { text: 'RESEARCH / PROJECTS', style: 'sectionHeader' },
                            {
                                canvas: [
                                    { type: 'line', x1: 0, y1: 0, x2: 316, y2: 0, lineWidth: 1, lineColor: '#014d4d' }
                                ],
                                margin: [0, 0, 0, 5]
                            },
                            ...data.projects.map(p => ({
                                stack: [
                                    { text: `${p.title} (${p.date})`, bold: true },
                                    { ul: p.details },
                                    { text: "", margin: [0, 0, 0, 5] }
                                ]
                            })),
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
                                                    { type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: '#66CCCC' }
                                                ],
                                                margin: [0, 0, 0, 5]
                                            },
                                            { text: data.contacts.address, margin: [0, 2] },
                                            { text: data.contacts.phone, margin: [0, 2] },
                                            { text: data.contacts.email, margin: [0, 2] },
                                            { text: "", margin: [0, 0, 0, 20] },

                                            { text: 'TECHNICAL SKILLS', style: 'sectionHeader' },
                                            {
                                                canvas: [
                                                    { type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: '#66CCCC' }
                                                ],
                                                margin: [0, 0, 0, 5]
                                            },
                                            { ul: [`Skills: ${data.technicalSkills.Skills}`, `Tools: ${data.technicalSkills.Tools}`] },
                                            { text: "", margin: [0, 0, 0, 20] },

                                            { text: 'CERTIFICATIONS', style: 'sectionHeader' },
                                            {
                                                canvas: [
                                                    { type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: '#66CCCC' }
                                                ],
                                                margin: [0, 0, 0, 5]
                                            },
                                            { ul: data.certifications, margin: [0, 0, 0, 10] },
                                            { text: "", margin: [0, 0, 0, 20] },

                                            { text: 'HOBBIES', style: 'sectionHeader' },
                                            {
                                                canvas: [
                                                    { type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: '#66CCCC' }
                                                ],
                                                margin: [0, 0, 0, 5]
                                            },
                                            { ul: data.hobbies },
                                            { text: "", margin: [0, 0, 0, 20] },

                                            { text: 'LANGUAGES', style: 'sectionHeader', margin: [0, 10, 0, 5] },
                                            {
                                                canvas: [
                                                    { type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: '#66CCCC' }
                                                ],
                                                margin: [0, 0, 0, 5]
                                            },
                                            { ul: data.languages },
                                        ],
                                        margin: [10, 75, 10, 342],
                                        color: 'white',
                                    }
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
            header: { fontSize: 26, bold: true, margin: [0, 0, 0, 5], font: 'Roboto' },
            sectionHeader: { fontSize: 14, bold: true, margin: [0, 5, 0, 2] },
        },
    };
}

// ---------------------- Generate PDF ----------------------
const pdfDoc = printer.createPdfKitDocument(buildPdfDoc(resumeData));
const pdfPath = 'TanzilaKosarResume.pdf';
pdfDoc.pipe(fs.createWriteStream(pdfPath));
pdfDoc.end();

console.log('✅ Resume generated as TanzilaKosarResume.pdf');

# 📄 Resume Generator (pdfmake)

This project generates a **professional resume PDF** using [pdfmake](http://pdfmake.org) in **Node.js**.
It reads structured resume data (skills, education, projects, internships, etc.) and produces a polished, ATS-friendly resume.

---

## 🚀 Features

* Dynamic PDF generation with **pdfmake**
* Custom fonts (Times New Roman, FontAwesome for icons)
* Clean, modern formatting for:

  * Profile summary
  * Skills
  * Education
  * Work experience
  * Projects
  * Certifications & hobbies
* Easily customizable data in one place (`resumeData`)

---

## 📂 Project Structure

```
.
├── fonts/                # Font files (Times, FontAwesome, etc.)
│   ├── times.ttf
│   ├── timesbd.ttf
│   ├── timesi.ttf
│   ├── timesbi.ttf
│   ├── Solid-900.otf
│   └── fa-brands-400.ttf
├── resume.js             # Main code to build and generate the PDF
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/resume-generator.git
   cd resume-generator
   ```

2. **Install dependencies**

   ```bash
   npm install pdfmake
   ```

3. **Add fonts**
   Place the required font files inside the `fonts/` directory:

   * `times.ttf`, `timesbd.ttf`, `timesi.ttf`, `timesbi.ttf`
   * `Solid-900.otf` (FontAwesome Solid)
   * `fa-brands-400.ttf` (FontAwesome Brands)

---

## 🖨️ Usage

Run the following command for backend resume:

```bash
node PythonResume.js
```

This will generate a file:

```
AnumKousarPythonResume.pdf
```

in the project root folder ✅

Run the following command for backend resume:

```bash
node WebResume.js
```

This will generate a file:

```
AnumKousarWebResume.pdf
```

in the project root folder ✅

---

## ✨ Customization

* Update your personal details, skills, education, and projects inside `resume.js`:

  ```js
  const resumeData = {
    name: "Your Name",
    field: "Software Engineer",
    profile: "Your professional summary...",
    contacts: {
      email: "youremail@example.com",
      phone: "+123456789",
      github: "github.com/yourusername",
    },
    // add skills, projects, internships...
  };
  ```

* Modify styles (fonts, colors, layout) in the `buildPdfDoc()` function.

---

## 📌 Example Output

A clean, ATS-friendly PDF resume with sections like:

* Name & Title (centered header)
* Summary
* Technical Skills
* Internships & Experience
* Projects
* Education
* Certifications
* Languages & Hobbies

---

## 🛠️ Tech Stack

* **Node.js**
* **pdfmake**
* **FontAwesome** (icons)
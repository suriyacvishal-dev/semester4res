// Course Breakdown Dataset
const courseData = {
    CS23431: {
        code: "CS23431",
        name: "Operating Systems",
        credits: 5,
        grade: "A",
        gp: "8.0",
        ca1: "44 / 50",
        ca2: "43 / 50",
        assignment: "19 / 20",
        ese: "79 / 100",
        weightedTotal: "83.5% (Grade A)",
        attendance: "96%",
        faculty: "Dr. S. Ramesh, M.E., Ph.D.",
    },
    CS23432: {
        code: "CS23432",
        name: "Software Construction",
        credits: 4,
        grade: "A",
        gp: "8.0",
        ca1: "45 / 50",
        ca2: "41 / 50",
        assignment: "18 / 20",
        ese: "80 / 100",
        weightedTotal: "82.8% (Grade A)",
        attendance: "94%",
        faculty: "Prof. K. Anand, M.Tech.",
    },
    "24NHS03": {
        code: "24NHS03",
        name: "Education for Sustainable Development",
        credits: 3,
        grade: "B+",
        gp: "7.0",
        ca1: "38 / 50",
        ca2: "39 / 50",
        assignment: "17 / 20",
        ese: "72 / 100",
        weightedTotal: "74.2% (Grade B+)",
        attendance: "92%",
        faculty: "Dr. M. Deepa, Ph.D.",
    },
    MA23435: {
        code: "MA23435",
        name: "Probability Statistics and Simulation",
        credits: 4,
        grade: "A",
        gp: "8.0",
        ca1: "46 / 50",
        ca2: "42 / 50",
        assignment: "19 / 20",
        ese: "78 / 100",
        weightedTotal: "82.0% (Grade A)",
        attendance: "98%",
        faculty: "Dr. V. Narayanan, M.Sc., Ph.D.",
    },
    IT23431: {
        code: "IT23431",
        name: "MongoDB Essentials",
        credits: 3,
        grade: "A",
        gp: "8.0",
        ca1: "47 / 50",
        ca2: "44 / 50",
        assignment: "20 / 20",
        ese: "81 / 100",
        weightedTotal: "84.9% (Grade A)",
        attendance: "95%",
        faculty: "Prof. R. Priya, M.E.",
    },
    IT23421: {
        code: "IT23421",
        name: "Internship",
        credits: 1,
        grade: "A+",
        gp: "9.0",
        ca1: "48 / 50",
        ca2: "49 / 50",
        assignment: "20 / 20",
        ese: "92 / 100",
        weightedTotal: "93.0% (Grade A+)",
        attendance: "100%",
        faculty: "Industry Mentor & Academic Committee",
    },
    GE23421: {
        code: "GE23421",
        name: "Soft Skills - I",
        credits: 1,
        grade: "A+",
        gp: "9.0",
        ca1: "49 / 50",
        ca2: "48 / 50",
        assignment: "20 / 20",
        ese: "90 / 100",
        weightedTotal: "92.5% (Grade A+)",
        attendance: "100%",
        faculty: "Centre for Soft Skills & Placement",
    },
    GE23411: {
        code: "GE23411",
        name: "Organization Management for Engineers",
        credits: 3,
        grade: "A",
        gp: "8.0",
        ca1: "43 / 50",
        ca2: "41 / 50",
        assignment: "18 / 20",
        ese: "80 / 100",
        weightedTotal: "81.5% (Grade A)",
        attendance: "91%",
        faculty: "Dr. P. Karthik, MBA, Ph.D.",
    },
};

// Initialize Lucide Icons
function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Modal Handling
const courseModal = document.getElementById("courseModal");

function openBreakdownModal(courseCode) {
    const data = courseData[courseCode];
    if (!data) return;

    document.getElementById("modalCourseCode").textContent = data.code;
    document.getElementById("modalCourseCredits").textContent = `Credits: ${data.credits}`;
    document.getElementById("modalCourseTitle").textContent = data.name;
    document.getElementById("modalGrade").textContent = data.grade;
    document.getElementById("modalGradePoint").textContent = data.gp;
    document.getElementById("modalFaculty").textContent = data.faculty;

    courseModal.showModal();
    refreshIcons();
}

function closeBreakdownModal() {
    courseModal.close();
}

// Close dialog when clicking on backdrop
courseModal.addEventListener("click", e => {
    const rect = courseModal.getBoundingClientRect();
    const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
        courseModal.close();
    }
});

// Theme Switching (Dark / Light)
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

themeToggleBtn?.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    html.classList.toggle("light", !isDark);

    if (isDark) {
        themeIcon.setAttribute("data-lucide", "moon");
        themeIcon.className = "w-3 h-3 text-amber-300";
    } else {
        themeIcon.setAttribute("data-lucide", "sun");
        themeIcon.className = "w-3 h-3 text-amber-500";
    }
    refreshIcons();
});

// Setup on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    refreshIcons();
});

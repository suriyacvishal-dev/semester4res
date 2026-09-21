// Initialize Lucide Icons
function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

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

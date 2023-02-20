const BASE_URL = "https://melon-potent-period.glitch.me";
const viewSkillsBtn = document.querySelector("#view-skills-btn");
const addSkillBtn = document.querySelector("#add-btn");
const skillInput = document.querySelector("#skill");

viewSkillsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
});

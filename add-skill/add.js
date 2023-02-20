const BASE_URL = "https://melon-potent-period.glitch.me";
const viewSkillsBtn = document.querySelector("#view-skills-btn");
const addSkillBtn = document.querySelector("#add-btn");
const skillInput = document.querySelector("#skill");

async function sendData() {
    const skill = skillInput.value;
    const dataToSend = {
        skill: skill,
    }

    try {
        const response = await fetch(BASE_URL + "/skills", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        });
        const result = await response.json();
        alert("Success!");
        window.location.href = "../index.html";
    } catch {
        alert("Error");
    }
}

addSkillBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sendData();
})

viewSkillsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
});

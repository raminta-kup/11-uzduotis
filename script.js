const BASE_URL = "https://melon-potent-period.glitch.me";
const addSkillBtn = document.querySelector("#add-skill-btn");
const dataTable = document.querySelector(".skill-data");

function getData() {
    fetch(BASE_URL + "/skills", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not OK');
            }
        })
        .then((data) => {
            data.forEach(element => {
                const id = element.id;
                const skill = element.skill;
                dataToTable(id, skill);
            });
        })
        .catch((error) => alert("problem with fetch operation:", error));
}

getData();

function dataToTable(id, skill) {
    const skillTr = document.createElement("tr");
    const idData = document.createElement("td");
    const skillData = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    idData.classList.add("id");

    idData.textContent = id;
    skillData.textContent = skill;
    deleteBtn.textContent = "delete";

    dataTable.append(skillTr);
    skillTr.append(idData, skillData, deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        deleteSkill(id)
    });
}

async function deleteSkill(id) {
    fetch(BASE_URL + "/skill/" + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
        .then(response => response.json())
        .then(() => {
            alert("Success!");
            location.reload();
        })
        .catch(err => alert("Error: ", err));
}

addSkillBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./add-skill/add.html";
});

let members = [];

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function addMember() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let plan = document.getElementById("plan").value;

    if (name === "" || age === "") {
        alert("Please fill all fields");
        return;
    }

    let member = {
        name,
        age,
        plan
    };

    members.push(member);
    displayMembers();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function displayMembers() {
    let list = document.getElementById("memberList");
    list.innerHTML = "";

    members.forEach((m, index) => {
        list.innerHTML += `
            <li>
                ${m.name} - Age: ${m.age} - Plan: ${m.plan}
                <button onclick="deleteMember(${index})">Delete</button>
            </li>
        `;
    });
}

function deleteMember(index) {
    members.splice(index, 1);
    displayMembers();
}
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "male1.png",
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "female1.png",
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "male2.png",
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martaipsum@team.com",
        img: "female2.png",
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "male3.png",
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "female3.png",
    }
]

let cardHTML = "";

for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];

    cardHTML += `<div class="col-12 col-md-6 col-xl-4">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0 bg-black">
                            <div class="col-12 col-xl-4">
                            <img class="h-100 card-img" src="./img/${teamMember.img}" class="img-fluid rounded-start" alt="${teamMember.name}">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body text-white">
                                <h5 class="card-title">${teamMember.name}</h5>
                                <p class="card-text">${teamMember.role}</p>
                                <p class="card-text">${teamMember.email}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>`
    
}

const addCardHTML = document.getElementById("row");
addCardHTML.innerHTML = cardHTML;
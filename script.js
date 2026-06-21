function login() {

    if (username.value != "" && password.value != "") {

        loginPage.style.display = "none";
        portfolioPage.style.display = "block";

    } else {
        alert("Enter Username and Password");
    }
}

function logout() {

    portfolioPage.style.display = "none";
    loginPage.style.display = "block";
}

function showSection(id) {

    let sections = document.querySelectorAll('.section');

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
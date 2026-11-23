// ================================
// EDUTRACK JAVASCRIPT
// ================================


// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const errorMessage =
            document.getElementById("errorMessage");


        // Demo username and password

        if (username === "student123" && password === "12345") {

            localStorage.setItem(
                "studentLoggedIn",
                "true"
            );

            localStorage.setItem(
                "studentName",
                "Student"
            );

            window.location.href = "dashboard.html";

        } else {

            errorMessage.textContent =
                "Invalid Student ID or Password.";

        }

    });

}


// ================================
// DASHBOARD STUDENT NAME
// ================================

const studentNameElement =
    document.getElementById("studentName");

const topStudentName =
    document.getElementById("topStudentName");

const profileName =
    document.getElementById("profileName");


const savedName =
    localStorage.getItem("studentName") || "Student";


if (studentNameElement) {
    studentNameElement.textContent = savedName;
}

if (topStudentName) {
    topStudentName.textContent = savedName;
}

if (profileName) {
    profileName.textContent = savedName;
}


// ================================
// CHANGE DASHBOARD SECTION
// ================================

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".section");

    const buttons =
        document.querySelectorAll(".nav-item");


    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add(
            "active-section"
        );

    }


    // Highlight clicked menu

    buttons.forEach(function(button) {

        if (
            button.getAttribute("onclick") ===
            "showSection('" + sectionId + "')"
        ) {

            button.classList.add("active");

        }

    });

}


// ================================
// LOGOUT
// ================================

function logout() {

    localStorage.removeItem("studentLoggedIn");
    localStorage.removeItem("studentName");

    window.location.href = "login.html";

}


// ================================
// FEE RECEIPT DEMO
// ================================

function showReceipt() {

    alert(
        "EduTrack Fee Receipt\n\n" +
        "Student: " + savedName + "\n" +
        "Amount: ₹45,000\n" +
        "Status: Paid\n" +
        "Date: 15 August 2026"
    );

}
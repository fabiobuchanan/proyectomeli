// LOGIN

function showLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function hideLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function cerrarModal() {
  const modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

// Event listener for the login button in the header
const login = document.getElementById("logInputBtn");
login.addEventListener("click", function () {
  showLoginModal();
});

document.querySelector(".close").addEventListener("click", function () {
  hideLoginModal();
});

const modal = document.getElementById("loginModal");
window.onclick = function (event) {
  if (event.target == modal) {
    cerrarModal();
  }
};

// Login dentro de Registrarse

function hideSignupModal() {
  document.getElementById("signupModal").style.display = "none";
}

const irALogin = document.getElementById("irALogin");
  irALogin.addEventListener("click", function () {
   showLoginModal();
   hideSignupModal();
  });

// Event listener for the cancel button within the modal
document
  .getElementById("cancelBtnLogin")
  .addEventListener("click", function () {
    hideLoginModal();
  });

// LOGIN
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email =  document.getElementById("p_username").value;
    let password = document.getElementById("p_password").value;
    const uploadButton = document.getElementById("p_cargasAdmin");
    const misCursos = document.getElementById("p_cursos2");



    let requestBody = JSON.stringify({ email, password });

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    })
      .then((response) => {
        console.log(response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((result) => {
        if (result.payload.role === "ADMIN") {
          // alert("Admin login Correcto");
          console.log('resultados backend',result.payload)
          loginForm.reset();
          document.getElementById("loginModal").style.display="none";
          uploadButton.style.display="block";
          misCursos.style.display="block";
        } else if (result.payload.role === "USER") {
          alert("User login Correcto");
          loginForm.reset();
          document.getElementById("loginModal").style.display="none";
          misCursos.style.display="block";
        } else {
          alert("Error ingreso");
        }
      })
      .catch((error) => {
        console.error("Error during fetch operation:", error);
        alert(error.message || "An error occurred. Please try again.");
      });

    uploadButton.addEventListener("click", () => {
      uploadContainer.classList.toggle("hidden");
    });
  });

/*
      fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
        .then((response) => {
          if (response.ok) {
            user = response.user;
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          if (data.success) {
            document.getElementById("message").textContent = "Login successful!";
            hideLoginModal();
          } else {
            document.getElementById("message").textContent =
              "Invalid username or password. Please try again.";
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          document.getElementById("message").textContent =
            "There was a problem with the login process. Please try again later.";
        });
    }); 
  */

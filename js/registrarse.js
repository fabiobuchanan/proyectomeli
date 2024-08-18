// REGISTER

function showSignupModal() {
    document.getElementById("signupModal").style.display = "block";
  }
  
function hideSignupModal() {
    document.getElementById("signupModal").style.display = "none";
  }
  
  const signUp = document.getElementById("signInputBtn");
  signUp.addEventListener("click", function () {
    showSignupModal();
  });

  // REGISTRARSE Formulario
  const regForm = document.getElementById("reg-form");
  regForm.addEventListener("click", function () {
    showSignupModal();
  });
  
  // Event listener for the close button within the modal
  document.querySelector(".close").addEventListener("click", function () {
    hideSignupModal();
  });

  document.getElementById("cancelBtnSignup").addEventListener("click", function () {
    hideSignupModal();
  });

  
  // Event listener for clicks outside of the modal to close it
  window.addEventListener("click", function (event) {
    let modalRegister = document.getElementById("signupModal");
    if (event.target == modalRegister) {
      hideSignupModal();
    }
  });
  
  // Event listener for the login form submission
  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Información para mandarle a César y que guarde al usuario, para luego poder hacer el LOGIN.
      let firstName = document.getElementById("r_name").value;
      let lastName = document.getElementById("r_lastName").value;
      let email = document.getElementById("r_username").value;
      let password = document.getElementById("r_password").value;
      let reingresePassword = document.getElementById("r_confirmPassword").value;
      let role = "USER";
      let provider = "USER";

      const uploadButton = document.getElementById("p_cargasAdmin");
      const misCursos = document.getElementById("p_cursos2");
      // Construct the request body
      let requestBody = JSON.stringify({ firstName, lastName, email, password, reingresePassword, role, provider});
  
      // Send the request to the server
      fetch("http://localhost:8080/api/auth/register", {
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
            document.getElementById("signupModal").style.display="none";
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
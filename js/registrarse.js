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

  // REGISTER Formulario
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
    let modalRegister = document.getElementById("signUpModal");
    if (event.target == modalRegister) {
      hideSignupModal();
    }
  });
  
  // Event listener for the cancel button within the modal
  document
    .getElementById("cancelBtnSignup")
    .addEventListener("click", function () {
      hideSignupModal();
    });
  
  // Event listener for the login form submission
  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Información para mandarle a César y que guarde al usuario, para luego poder hacer el LOGIN.
      let firstName = document.getElementById("nombre").value;
      let lastName = document.getElementById("apellido").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let reingresePassword = document.getElementById(
        "reingreseContraseña"
      ).value;
  
      // Construct the request body
      let requestBody = JSON.stringify({ firstName, lastName, email, password });
  
      // Send the request to the server
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          if (data.success) {
            document.getElementById("message").textContent = "Login successful!";
            hideSignupModal();
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
  
  
// REGISTER

function showSignUpModal() {
    document.getElementById("signUpModal").style.display = "block";
  }
  
  function hideSignUpModal() {
    document.getElementById("signUpModal").style.display = "none";
  }
  
  // Event listener for the login button in the header
  const signUp = document.getElementById("signInputBtn");
  signUp.addEventListener("click", function () {
    showSignUpModal();
  });
  
  // Event listener for the close button within the modal
  document.querySelector(".close").addEventListener("click", function () {
    hideSignUpModal();
  });
  
  // Event listener for clicks outside of the modal to close it
  window.addEventListener("click", function (event) {
    let modalRegister = document.getElementById("signUpModal");
    if (event.target == modalRegister) {
      hideSignUpModal();
    }
  });
  
  // Event listener for the cancel button within the modal
  document
    .getElementById("cancelBtnSignup")
    .addEventListener("click", function () {
      hideSignUpModal();
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
            hideSignUpModal();
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
  
  
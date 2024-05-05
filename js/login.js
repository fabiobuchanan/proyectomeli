// LOGIN

function showLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function hideLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // Event listener for the login button in the header
  const login = document.getElementById("logInputBtn");
  login.addEventListener("click", function () {
    showLoginModal();
  });
  
  // Event listener for the close button within the modal
  document.querySelector(".close").addEventListener("click", function () {
    hideLoginModal();
  });
  
  // Event listener for clicks outside of the modal to close it
  window.addEventListener("click", function (event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
      hideLoginModal();
    }
  });
  
  // Event listener for the cancel button within the modal
  document.getElementById("cancelBtnLogin").addEventListener("click", function () {
      hideLoginModal();
    });
  
  // Event listener for the login form submission
  document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const misCursos = document.getElementById("cursos2");
      misCursos.classList.add("enabled");
  
      // Get the input values
      let email = document.getElementById("username").value;
      let password = document.getElementById("password").value;
  
      // Construct the request body
      let requestBody = JSON.stringify({ email, password });
  
      // Send the request to the server
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
  
  
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
  window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

  
  // Event listener for the cancel button within the modal
  document.getElementById("cancelBtnLogin").addEventListener("click", function () {
      hideLoginModal();
    });


  
  // LOGIN 
  document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      let email = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      const uploadButton = document.getElementById("cargasAdmin");
      const misCursos = document.getElementById("cursos2");

      let requestBody = JSON.stringify({ email, password });
  
      try {
        const response = fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody,
        });
    
      
        if (response.ok) {
            const result = response.json();
            if (result.role === 'admin') {
                alert('Admin login successful');
                loginForm.reset();
                document.getElementById('login-container').classList.add('hidden');
                uploadButton.classList.remove('hidden');
            } else if (result.role === 'cliente') {
                alert('Customer login successful');
                loginForm.reset();
                document.getElementById('login-container').classList.add('hidden');
                misCursos.classList.add("enabled");
            } else {
                alert('Unknown role');
            }
        } else {
            alert('Invalid credentials');
        }
    } catch (error) {
        console.error('Error during fetch operation:', error);
        alert('An error occurred. Please try again.');
    };

uploadButton.addEventListener('click', () => {
    uploadContainer.classList.toggle('hidden');
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
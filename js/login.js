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
  .getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email =  document.getElementById("p_username").value;
    let password = document.getElementById("p_password").value;
    const uploadButton = document.getElementById("p_cargasAdmin");
    const misCursos = document.getElementById("p_cursos2");
    // TOKEN USUARIO valido - guardar en localStorage.
  /*  const token = localStorage.getItem('authToken');
    if(token) {
      console.log('Usuario autenticado');
    } else {
      window.location.href = "/index.html";
    }
*/

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
          alert("Admin login Correcto");
          console.log('resultados backend',result.payload)
          // Guardar el token en una cookie
          setCookie("authToken", result.token, 1);  // 1 día de duración
          loginForm.reset();

          document.getElementById("loginModal").style.display="none";
          uploadButton.style.display="block";
          misCursos.style.display="block";
        } else if (result.payload.role === "USER") {
          alert("User login Correcto");
          setCookie("authToken", result.token, 1);  // 1 día de duración
          loginForm.reset();

       /*   localStorage.setItem('authTokem', data.token);
          window.location.href = '/index.html';*/

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

  // Función para establecer una cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(name + "=") == 0) {
          return cookie.substring(name.length + 1);
      }
  }
  return "";
}

// Función para verificar la autenticación del usuario
function checkAuth() {
  const token = getCookie("authToken");
  if (token) {
      // Usuario autenticado, puedes mostrar la información correspondiente
      console.log("Usuario autenticado con token:", token);
  } else {
      // Redirigir al usuario a la página de login si no está autenticado
      window.location.href = "/login.html";
  }
}

// Llamar a la función de verificación de autenticación cuando se cargue la página
window.onload = checkAuth;
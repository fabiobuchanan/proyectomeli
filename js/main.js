// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("menu-fixed");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// MENU HAMBURGUESA - seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});



// LOGIN

// Function to show the login modal
function showLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

// Function to hide the login modal
function hideLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Event listener for the login button in the header
document.getElementById('loginButton').addEventListener('click', function() {
  showLoginModal();
});

// Event listener for the close button within the modal
document.querySelector('.close').addEventListener('click', function() {
  hideLoginModal();
});

// Event listener for clicks outside of the modal to close it
window.addEventListener('click', function(event) {
  var modal = document.getElementById('loginModal');
  if (event.target == modal) {
    hideLoginModal();
  }
});

// Event listener for the cancel button within the modal
document.getElementById('cancelButton').addEventListener('click', function() {
  hideLoginModal();
});

// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Construct the request body
  var requestBody = JSON.stringify({ username: username, password: password });

  // Send the request to the server
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBody
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // If login successful, show success message
      document.getElementById('message').textContent = 'Login successful!';
      // Hide the login modal after successful login
      hideLoginModal();
    } else {
      // If login failed, show error message
      document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Show error message if there's a problem with the fetch operation
    document.getElementById('message').textContent = 'There was a problem with the login process. Please try again later.';
  });
});



// SIGN UP

// Function to show the login modal
function showSignUpModal() {
  document.getElementById('signUpModal').style.display = 'block';
}

// Function to hide the login modal
function hideSignUpModal() {
  document.getElementById('signUpModal').style.display = 'none';
}

// Event listener for the login button in the header
document.getElementById('signUpButton').addEventListener('click', function() {
  showSignUpModal();
});

// Event listener for the close button within the modal
document.querySelector('.close').addEventListener('click', function() {
  hideSignUpModal();
});

// Event listener for clicks outside of the modal to close it
window.addEventListener('click', function(event) {
  var modal = document.getElementById('signUpModal');
  if (event.target == modal) {
    hideSignUpModal();
  }
});

// Event listener for the cancel button within the modal
document.getElementById('cancelButton').addEventListener('click', function() {
  hideSignUpModal();
});

// Event listener for the login form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Construct the request body
  var requestBody = JSON.stringify({ username: username, password: password });

  // Send the request to the server
  fetch('/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBody
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // If login successful, show success message
      document.getElementById('message').textContent = 'Login successful!';
      // Hide the login modal after successful login
      hideSignUpModal();
    } else {
      // If login failed, show error message
      document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Show error message if there's a problem with the fetch operation
    document.getElementById('message').textContent = 'There was a problem with the login process. Please try again later.';
  });
});


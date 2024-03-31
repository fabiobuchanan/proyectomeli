

// LOGIN POST (Request)

document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  });
  
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
        document.getElementById('loginModal').style.display = 'none';
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
  
  
  // SIGN UP REQUEST

//Schimbare intre logIn si register
document.getElementById('switch-button').addEventListener('click', function(event) {
    event.preventDefault();
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
    
    const switchButtonText = loginForm.classList.contains('active') ? 'Switch to Register' : 'Switch to Login';
    document.getElementById('switch-button').textContent = switchButtonText;
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    //Introducerea ambelor date
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }
  
    const storedUser = localStorage.getItem('registeredUser');
  
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        alert('Login successful!');
        console.log('Logged in User:', user);
        //In caz de nu exista cont cu datele date sa ne apara invalid username or password
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('Invalid username or password.');
    }
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Introducerea ambelor date
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }
  
    const user = {
      username: username,
      password: password
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));
  
    console.log('Registered User:', user);
  
    alert('Registration successful!');
  
    location.reload();
  });

  //Logare
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    console.log('Login:', username, password);
  });

  //Crearea contului
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    console.log('Register:', username, password);
  });
document.addEventListener('DOMContentLoaded', function() {
    //Setarea % la 14
    document.getElementById('interest-rate').value = 14;
  });
  
  document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Introducerea datelor
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value);
    var loanDuration = parseInt(document.getElementById('loan-duration').value);
  
    //Calcularea platii lunare
    var monthlyInterest = interestRate / 100 / 12;
    var monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -loanDuration));
  
    //Calcularea dobanzii
    var totalPayment = monthlyPayment * loanDuration;
    var totalInterest = totalPayment - loanAmount;
  
    //Afisarea datelor creditului
    var result = document.getElementById('result');
    result.innerHTML = 'Plata Lunară: $' + monthlyPayment.toFixed(2) + '<br>' +
                       'Suma Totală: $' + totalPayment.toFixed(2) + '<br>' +
                       'Dobânda: $' + totalInterest.toFixed(2);
  });

  document.addEventListener('DOMContentLoaded', function() {
    //Crearea sectiunilor
    var sectionItems = document.querySelectorAll('#section-list li');
    var sections = document.querySelectorAll('.credit_section');
  
    //Selectarea sectiunii
    sectionItems.forEach(function(item, index) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
  
        //Ascunderea restor sectiunilor
        sections.forEach(function(section) {
          section.style.display = 'none';
        });
  
        //Afisarea sectiunii potrivite
        sections[index].style.display = 'block';
      });
    });
  });
  
  
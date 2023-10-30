//Verificare date card si afisarea lor in Consola
function checkInputs() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="text"], input[type="month"], input[type="password"]');
    const values = [];
    let isValid = true;

    inputs.forEach(input => {
        values.push(input.value);
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (isValid) {
        // Afisare Plata efectuata cu succes
        alert('Plata efectuată cu succes');
    }

    console.log(values);
}
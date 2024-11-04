document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
  
    if (isNaN(height) || height <= 0) {
      results.innerHTML = `<p id="error">Please enter a valid height in CM.</p>`;
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = `<p id="error">Please enter a valid weight in KG.</p>`;
    } else {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      let category = '';
  
      if (bmi < 18.6) {
        category = 'Underweight';
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal weight';
      } else {
        category = 'Overweight';
      }
  
      results.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> (${category})</p>`;
    }
  });
  
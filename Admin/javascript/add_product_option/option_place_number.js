function rearrangeInputs() {
    const inputValues = [];
    const inputs = document.querySelectorAll('.in');
  
    inputs.forEach((input) => {
      inputValues.push(input.value);
    });
  
    inputValues.sort((a, b) => parseInt(a) - parseInt(b));
  
    inputs.forEach((input, index) => {
      input.value = inputValues[index];
    });
  }
  
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('focus', rearrangeInputs);
  });
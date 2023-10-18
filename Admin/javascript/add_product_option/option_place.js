const sizes = ["4XL", "XXXXL", "3XL", "XXXL", "2XL", "XXL", "XL", "X", "M", "S", "XS", "XXS", "2XS"];

function rearrangeInputs() {
  const inputValues = [];
  const inputs = document.querySelectorAll('.in');

  inputs.forEach((input) => {
    inputValues.push(input.value);
  });

  inputValues.sort((a, b) => {
    const indexA = sizes.findIndex((size) => size.toLowerCase() === a.toLowerCase());
    const indexB = sizes.findIndex((size) => size.toLowerCase() === b.toLowerCase());
    return indexA - indexB;
  });

  inputs.forEach((input, index) => {
    input.value = inputValues[index];
  });
}

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('focus', function() {
    rearrangeInputs();

    const sortedValues = Array.from(inputs).map((input) => input.value);
    const sortedByObject = sortedValues.sort((a, b) => {
      const indexA = sizes.findIndex((size) => size.toLowerCase() === a.toLowerCase());
      const indexB = sizes.findIndex((size) => size.toLowerCase() === b.toLowerCase());
      return indexA - indexB;
    });
    
    console.log(sortedByObject);
  });
});

const plusButton = document.getElementById('plus');
inputs.forEach((input) => {
plusButton.addEventListener('click', () =>{
    rearrangeInputs();

    const sortedValues = Array.from(inputs).map((input) => input.value);
    const sortedByObject = sortedValues.sort((a, b) => {
      const indexA = sizes.findIndex((size) => size.toLowerCase() === a.toLowerCase());
      const indexB = sizes.findIndex((size) => size.toLowerCase() === b.toLowerCase());
      return indexA - indexB;
});
});
});


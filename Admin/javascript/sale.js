// function handleChange(selectElement) {
//     const inputElement = document.createElement('input');
//     if (selectElement.value === 'Add Sale') {
        
//         inputElement.setAttribute('type', 'text');
//         inputElement.setAttribute('class', 'sale');
//         inputElement.setAttribute('placeholder', 'Enter Sale');
//         inputElement.setAttribute('onchange', 'handleChange(this)');
//         selectElement.parentNode.replaceChild(inputElement, selectElement);
//         inputElement.focus();
//     };
//     const remove = document.querySelector('.remove_sale');
//     const sale = document.querySelector('.sale');
//     if(selectElement.value === 'Add Sale') {
//         remove.style.display = 'flex';
//         remove.addEventListener('click', () =>{
//             const opptionElement = document.createElement('select');
//             opptionElement.innerHTML = `
//             <option selected>No Sale</option>
//             <option>Add Sale</option>`
//             selectElement.parentNode.replaceChild(opptionElement , selectElement);
//         })
//         // const backElement = document.createElement('button');
//         // backElement.innerHTML = `Remove Sale`
//         }sale.appendChild(back)
 
// }
function handleChange(selectElement) {
    const inputElement = document.createElement('input');
    if (selectElement.value === 'Add Sale') {
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('class', 'sale');
        inputElement.setAttribute('placeholder', 'Enter Sale');
        inputElement.addEventListener('change', function() {
            handleChange(this);
        });
        selectElement.parentNode.replaceChild(inputElement, selectElement);
        inputElement.focus();
    }
    
    const remove = document.querySelector('.remove_sale');
    const sale = document.querySelector('.sale');
    
    if (selectElement.value === 'Add Sale') {
        remove.style.display = 'flex';
        
        remove.addEventListener('click', function() {
            const optionElement = document.createElement('select');
            optionElement.setAttribute('class', 'sale')
            optionElement.addEventListener('change' , function(){
                handleChange(this)
            })
            optionElement.innerHTML = `
                <option selected>No Sale</option>
                <option>Add Sale</option>
            `;
            sale.parentNode.replaceChild(optionElement, sale);
            remove.style.display = 'none';
        });
    }
}

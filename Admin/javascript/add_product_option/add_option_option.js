const plusButton = document.getElementById('plus');
const optionMenu = document.querySelector('.option_menu');
number = 5
numbers = [1,2,3,4,5]
size = ["XL", "X" , "M" , "S" , "XS"]
plusButton.addEventListener('click', function() {
    number +=1
    const newItem = document.createElement('div');
    newItem.classList.add(`item(${number})`);
    newItem.classList.add(`item`);
    newItem.innerHTML = `
        <div class="prop1">
            <p class="p1"><input type="text" placeholder="Size Name" class="in"></p>
            <input type="text" class="p2" placeholder="Stock">
        </div>
        <div class="x_but"><p>X</p></div>
    `;
    optionMenu.appendChild(newItem);
    newItem.querySelector('.x_but').addEventListener('click', function() {
        newItem.remove();
        number -= 1
    });
});
numbers.forEach( num =>{
    size.forEach( size => {
    const newItem = document.createElement('div');
    newItem.classList.add(`item(${num})`);
    newItem.classList.add('item');
        newItem.innerHTML = `
        <div class="prop1">
            <p class="p1"><input type="text" value="${size}" class="in"></p>
            <input type="text" class="p2" placeholder="Stock">
        </div>
        <div class="x_but"><p>X</p></div>
    `;
    optionMenu.appendChild(newItem);
    newItem.querySelector('.x_but').addEventListener('click', () => {
    newItem.remove();
    });
});
    newItem.querySelector('.x_but').addEventListener('click', () => {
    newItem.remove();
    });
});


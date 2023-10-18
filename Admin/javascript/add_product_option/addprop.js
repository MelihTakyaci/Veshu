const bg = document.querySelector('.bg');
const add = document.querySelector('.add_model_btn');
const popup = document.querySelector('.add_popup');
add.addEventListener('click', () => {
    bg.style.display = 'block';
    popup.style.display = 'flex';
})
 bg.addEventListener('click', () => {
    bg.style.display = 'none';
    popup.style.display = 'none';
 });
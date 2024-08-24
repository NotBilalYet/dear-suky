const fadeSvg = document.querySelector('.fade');

document.addEventListener('click', () => {
    fadeSvg.classList.add('faded');
    
    setTimeout(() => {
        fadeSvg.remove(); 
    }, 500);
});
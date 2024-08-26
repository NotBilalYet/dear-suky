const fadeSvg = document.querySelector('.fade');

const adjectives = [
    'Amazing.',
    'Beautiful.',
    'Radiant.',
    'Lovely.',
    'Elegant.',
    'Adorable.',
    'Magical.',
    'Serene.',
    'Gorgeous.', 
    'Breathtaking.',
    'Graceful.',
    'Luminous.',
    'Gentle.',
    'Caring.',
    'Sweet.',
    'Heartwarming.',
    'Consistent.',
    'Kind.',
    'Soothing.',
    'Cute.',
    'Patient.',
    'Sincere.'
];

function displayAdjectives() {
    let index = 0;
    
    function showNextAdjective() {
        if (index < adjectives.length) {
            document.getElementById('adjective').innerText = adjectives[index++];
            setTimeout(showNextAdjective, 1000);
        }
    }
    
    showNextAdjective();
}


function startFadeAndAdjectives() {
    fadeSvg.classList.add('faded');
    displayAdjectives();
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', startFadeAndAdjectives);
    document.body.addEventListener('touchstart', startFadeAndAdjectives);
});
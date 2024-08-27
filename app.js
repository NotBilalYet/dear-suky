const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');

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
        } else {
            box2.classList.add('faded');
            setTimeout(createHearts, 500);
        }
    }
    
    showNextAdjective();
}

function startFadeAndAdjectives() {
    box1.classList.add('faded');
    displayAdjectives();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createHearts() {
    setInterval(createHeart, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', startFadeAndAdjectives);
    document.body.addEventListener('touchstart', startFadeAndAdjectives);
});
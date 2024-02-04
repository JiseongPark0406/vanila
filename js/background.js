const images = [
    "01.webp",
    "02.webp",
"03.avif"
]

let chosen__image = images[Math.floor(Math.random() * images.length)];

const bg__img = document.createElement("img");
bg__img.src= `img/${chosen__image}`;
document.body.appendChild(bg__img)
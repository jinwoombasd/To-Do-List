const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroudImage = document.createElement("img");

backgroudImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroudImage);
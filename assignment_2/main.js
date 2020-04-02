const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'Images/pic' + i + '.png');
    thumbBar.appendChild(newImage);
    
}


/* Wiring up the Darken/Lighten button */

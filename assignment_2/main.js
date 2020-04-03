const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'Images/pic' + i + '.png');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(){
        displayedImage.src = newImage.src;
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    const newbtn = btn.getAttribute('class');
    if(newbtn = 'dark'){
        btn.setAttribute('class','light');
        btn.textContent('Lighten');
        overlay.style.backgroundColor = 'gba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent('Darken');
        overlay.style.backgroundColor = 'gba(0,0,0,0)';
    }

}



/* Source: MDN */
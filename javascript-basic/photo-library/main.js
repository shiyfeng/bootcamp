const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photo = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',];
/* Declaring the alternative text for each image file */

/* Looping through images */
let i=0;
while(i<photo.length){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${photo[i]}`);
    newImage.setAttribute('alt', `images/${photo[i]}`);
    newImage.addEventListener("click",e=>{
        /* const imgsrc = this.src;
        displayedImage.src = imgsrc;*/
        displayedImage.src = e.target.src; 
    });
    thumbBar.appendChild(newImage);
    i++;
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",e=>{
    let bname = btn.getAttribute("class");
    if(bname === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});


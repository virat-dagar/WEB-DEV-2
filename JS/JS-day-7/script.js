const heading = document.getElementById("myheading");
console.log(heading);

heading.style.color ='tomato'
heading.style.background = 'yellow'
heading.textContent = 'hello students'

const subheading = document.
getElementsByClassName('sub-heading');
console.log(subheading);

for(let i = 0; i<subheading.length; i++){
    subheading[i].style.color='red'
}
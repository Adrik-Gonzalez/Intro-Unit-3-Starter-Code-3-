/* Declare variables below to save the different sections (divs) of your story*/
let storyopening = document.querySelector('.story-opening')
let optionone = document.querySelector('.option-one');
let optiontwo = document.querySelector('.option-two');
let optiononescreen = document.querySelector('.option-one-screen')
let optiontwoscreen = document.querySelector('.option-two-screen')
let optiononeend = document.querySelector('.option-one-end')
let optiontwoend = document.querySelector('.option-two-end')



// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
optionone.onclick=function(){
storyopening.style.display = 'none'
  optiononescreen.style.display = 'block'
  optiontwoscreen.style.display = 'none'
};
//
optiontwo.onclick=function(){
storyopening.style.display = 'none'
  optiontwoscreen.style.display = 'block'
};
/*
INSERT_VARIABLE.onclick=function(){

};

*/

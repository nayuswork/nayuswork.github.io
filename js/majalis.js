
function toggleMenu(){
  let navigation = document.querySelector('.navigation');
  let toggle = document.querySelector('.toggle');
  navigation.classList.toggle('active');
  toggle.classList.toggle('active');
}
// let bg = document.querySelector('#bg');
// window.addEventListener('scroll', function(){
//   let value = window.scrollY;
//   bg.style.backgroundSize = 100 + value*5 + 'px';
// })


var about_top = document.querySelector('.about_top')
window.addEventListener('scroll', function(){
  var value = window.scrollY;
  about_top.style.clipPath = "circle("+ value +"px at center)"
})

function toggleForm(){
  var container_res = document.querySelector('.container_res');
  container_res.classList.toggle('act')
}

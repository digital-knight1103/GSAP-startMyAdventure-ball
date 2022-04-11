const ball = document.querySelector('.ball')
const winHeight = window.innerHeight - 150;
console.log(winHeight);


TweenMax.to(ball, 3, {y: winHeight,  duration: 2.5, ease: "bounce.out"} )
TweenMax.to(ball, 2, {backgroundColor: '#1E293B', delay: 4} )
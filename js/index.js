// Your code goes here

let headerNav = document.querySelector('.main-navigation')
    headerNav.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'red'
    })


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
  
    el.style.transform = `scale(${scale})`;
}
    let scale = 1;
    const el = document.querySelector('.intro img');
    el.onwheel = zoom;



window.addEventListener('load', event => {
    console.log('onload event happpened')
})


let clickListener = document.querySelector('.footer')
    clickListener.addEventListener('click', event => {
            event.target.style.backgroundColor = 'red'
    })

addEventListener('click', (e) => e.stopPropagation())
    
let dblclickListener = document.querySelector('.footer')
    dblclickListener.addEventListener('dblclick', event => {
            event.target.style.backgroundColor = 'blue'
    })

let scrollListener = document.querySelector('.intro p')
    scrollListener.addEventListener('scroll', event => {
        event.target.backgroundColor = 'purple'
    })
 let menu=document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

 window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');

} 

 var typed = new Typed('.multiple-text', {
      strings: ['Front end developer', 'Backend developer'],
      typeSpeed: 80,
      backspeed: 80,
      backdelay: 1200,
      loop: true,
    });
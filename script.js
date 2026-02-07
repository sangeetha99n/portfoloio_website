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
      strings: ['Front end developer'],
      typeSpeed: 80,
      backspeed: 80,
      backdelay: 1200,
      loop: true,
    });

 
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }

    alert("Thank you! Your message has been submitted.");
    form.reset();
  });


   function openTab(tabId) {
    const tabs = document.querySelectorAll(".tab-box");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.target.classList.add("active");
  }
 
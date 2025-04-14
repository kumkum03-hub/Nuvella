const navbar = document.getElementById('navbar');
const section2 = document.getElementById('section');  
const romance = document.getElementById('card1');
const url = 'romance.html';
const mystery=document.getElementById('card2');
const url2 = 'mystery.html';


romance.addEventListener('click',function(){
    window.location.assign(url);
  });

  mystery.addEventListener('click',function(){
    window.location.assign(url2);
  });


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  });
}, {
  root: null,  
  threshold: 0.1 
});


observer.observe(section2);

window.onload = function() {
   
    if (window.location.hash) {
    
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  
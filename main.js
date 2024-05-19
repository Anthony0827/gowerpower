
  var canvas = document.getElementById('miCanvas');
  var ctx = canvas.getContext('2d');

  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var dx = 2;
  var dy = -2;
  var ballRadius = 10;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(animate);
  }

  animate();
//Tarea6- actividad 2 - 3
  document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
      window.scrollTo(0, 0);
    }
  });
//Tarea6- actividad 2 - 4
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animar');
    } else {
      entry.target.classList.remove('animar');
    }
  });
});

document.querySelectorAll('.exposicion').forEach(item => {
  observer.observe(item);
});

  
  document.getElementById('menu-icon').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  });

  //Tarea 6 Actividad 4
  document.addEventListener('DOMContentLoaded', function() {
    // Listener para el scroll
    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var backToTopButton = document.getElementById('back-to-top');

        // Mostrar u ocultar el boton basado en la posición del scroll
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Listener para el clic del botón
    document.getElementById('back-to-top').addEventListener('click', function() {
        // Smooth scroll hacia el top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

  

// ejercicio 5

const carousel = document.querySelector('.carousel-inner');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carousel.children.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carousel.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const width = carousel.clientWidth;
    const offset = -currentIndex * width;
    carousel.style.transform = `translateX(${offset}px)`;
}




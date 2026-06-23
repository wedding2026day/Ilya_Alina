// БЛОК 1: стартовый экран

const startScreen = document.getElementById("startScreen");
const openSiteBtn = document.getElementById("openSiteBtn");
const siteContent = document.getElementById("siteContent");
const bgMusic = document.getElementById("bgMusic");



if(openSiteBtn && startScreen && siteContent){
  openSiteBtn.addEventListener("click", function(){
    siteContent.classList.add("show");
    startScreen.classList.add("hide");

    if(bgMusic){
      bgMusic.play().catch(error => {
        console.log("Музыка не запустилась:", error);
  });
}
});
}

document.addEventListener('DOMContentLoaded', () => {
  const heroButton = document.querySelector('.hero-button');
  const block2 = document.querySelector('.block-2');

  if (heroButton && block2) {
    heroButton.addEventListener('click', (e) => {
      e.preventDefault();
      block2.classList.add('visible');
      
    });
  }
});

// Появление блока 3 при скролле (можно настроить порог)
const block3 = document.querySelector('.block-3');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      block3.classList.add('visible');
      // observer.unobserve(block3); // если нужно показать только один раз
    }
  });
}, {
  threshold: 0.3  // 30% блока видно → запускаем анимацию
});

if (block3) {
  observer.observe(block3);
}



// БЛОК 4 — анимация при скролле

// БЛОК 4 — стабильная анимация при появлении

const block4 = document.querySelector(".block4");

if(block4){

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block4.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer.observe(block4);

}

// БЛОК 5

const block5 = document.querySelector(".block5");

if(block5){

const observer5 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block5.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer5.observe(block5);

}

// БЛОК 6

const block6 = document.querySelector(".block6");

if(block6){

const observer6 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block6.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer6.observe(block6);

}

// БЛОК 7

const block7 = document.querySelector(".block7");

if(block7){

const observer7 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block7.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer7.observe(block7);

}

// БЛОК 8

const block8 = document.querySelector(".block8");

if(block8){

const observer8 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block8.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer8.observe(block8);

}

// БЛОК 10 — анимация при скролле

const block10 = document.querySelector(".block10");

if(block10){
  const observer10 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        block10.classList.add("show");
      }
    });
  }, {
    threshold: 0.3
  });

  observer10.observe(block10);
}


// БЛОК 10 — отправка в Telegram

const form = document.getElementById('block10Form');

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const checkbox = document.querySelector('.block10-checkbox');
    const attendance = checkbox.checked ? 'Приду' : 'Не приду';

    const formData = new FormData(form);
    formData.append('attendance', attendance);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      form.reset();
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
    }
  });
}



// БЛОК 11

const block11 = document.querySelector(".block11");

if(block11){

const observer11 = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
block11.classList.add("show");
}
});
}, {
threshold: 0.3
});

observer11.observe(block11);

}


const weddingDate = new Date('2026-09-19T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
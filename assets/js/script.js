
// AOS Init
AOS.init({
    once: true,
    offset: 80,
    easing: 'ease-out-cubic',
    duration: 800
});


// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// Hero Slider
let cur = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
const numEl = document.getElementById('slideNum');
const nums = ['01', '02', '03', '04'];

function goSlide(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = n;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
    numEl.textContent = nums[cur];
}

let timer = setInterval(() => goSlide((cur + 1) % slides.length), 5000);
const hero = document.querySelector('.hero');
// hero.addEventListener('mouseenter', () => clearInterval(timer));
// hero.addEventListener('mouseleave', () => { timer = setInterval(() => goSlide((cur + 1) % slides.length), 5000); });


// Mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('menuToggle').classList.toggle('open');
});


// Form
// function handleSubmit(btn) {
//     btn.textContent = 'Sending…';
//     btn.style.opacity = '0.7';
//     btn.disabled = true;
//     setTimeout(() => {
//         btn.textContent = '✓ Enquiry Sent Successfully';
//         btn.style.background = '#3a6b47';
//         btn.style.color = '#fff';
//         btn.style.opacity = '1';
//         btn.closest('.contact-form').querySelectorAll('input,select,textarea').forEach(i => i.value = '');
//     }, 1600);
// }


// gallery view
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("imgCaption");
const closeBtn = document.querySelector(".img-close");

const images = document.querySelectorAll(".gallery-grid img");

let currentIndex = 0;

// open modal
images.forEach((img, index) => {
  img.addEventListener("click", function () {
    currentIndex = index;
    showImage();
    modal.style.display = "block";
  });
});

function showImage() {
  modalImg.src = images[currentIndex].src;
  captionText.innerText =
    images[currentIndex].nextElementSibling?.innerText || "";
}

// next
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// prev
document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

// close
closeBtn.onclick = () => modal.style.display = "none";

// outside click
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    } else if (e.key === "Escape") {
      modal.style.display = "none";
    }
  }
});


// email form

// =============================================
// 🔧 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
const EMAILJS_PUBLIC_KEY = "xq2SsJLGLDgLvyw36";   // from Account > API Keys
const EMAILJS_SERVICE_ID = "service_70sqgwn";   // from Email Services
const EMAILJS_TEMPLATE_ID = "template_598dzqb";  // from Email Templates
// =============================================

// init
emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.getElementById('contactForm');
const btn = document.querySelector('.form-submit');

// validation helpers
function markInvalid(id, invalid) {
    document.getElementById(id).classList.toggle('invalid', invalid);
}

function validate() {
    let ok = true;

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    const nameOk = name.length >= 2;
    const addressOk = address.length >= 5;
    const mobileOk = /^[+\d\s\-()]{7,15}$/.test(mobile);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    markInvalid('name', !nameOk);
    markInvalid('address', !addressOk);
    markInvalid('mobile', !mobileOk);
    markInvalid('email', !emailOk);

    return nameOk && addressOk && mobileOk && emailOk;
}

// FORM SUBMIT (MAIN LOGIC)
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!validate()) return;

    // button loading UI
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    const templateParams = {
        from_name: document.getElementById('name').value.trim(),
        address: document.getElementById('address').value.trim(),
        mobile: document.getElementById('mobile').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        purpose: document.querySelector('select').value,
        to_email: "aryasahilkeorak@gmail.com"
    };

    try {
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        // SUCCESS UI (your style preserved)
        btn.textContent = '✓ Enquiry Sent Successfully';
        btn.style.background = '#3a6b47';
        btn.style.color = '#fff';

        // reset form
        form.reset();

    } catch (error) {
        console.error(error);

        btn.textContent = '❌ Failed! Try Again';
        btn.style.background = '#8B0000';
        btn.style.color = '#fff';
    }

    // reset button after 2 sec
    setTimeout(() => {
        btn.textContent = 'Submit';
        btn.style.opacity = '1';
        btn.disabled = false;
        btn.style.background = '';
        btn.style.color = '';
    }, 2000);
});

// LIVE INPUT FIX (remove red border while typing)
['name', 'address', 'mobile', 'email'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        markInvalid(id, false);
    });
});
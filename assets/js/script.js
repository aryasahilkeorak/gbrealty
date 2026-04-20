
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

function closeMob() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('menuToggle').classList.remove('open');
}

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


// // email form

// // =============================================
// // 🔧 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
// const EMAILJS_PUBLIC_KEY = "xq2SsJLGLDgLvyw36";   // from Account > API Keys
// const EMAILJS_SERVICE_ID = "service_70sqgwn";   // from Email Services
// const EMAILJS_TEMPLATE_ID = "template_598dzqb";  // from Email Templates
// // =============================================

// // init
// emailjs.init(EMAILJS_PUBLIC_KEY);

// const form = document.getElementById('contactForm');
// const btn = document.querySelector('.form-submit');

// // validation helpers
// function markInvalid(id, invalid) {
//     document.getElementById(id).classList.toggle('invalid', invalid);
// }

// function validate() {
//     let ok = true;

//     const name = document.getElementById('name').value.trim();
//     const address = document.getElementById('address').value.trim();
//     const mobile = document.getElementById('mobile').value.trim();
//     const email = document.getElementById('email').value.trim();

//     const nameOk = name.length >= 2;
//     const addressOk = address.length >= 5;
//     const mobileOk = /^[+\d\s\-()]{7,15}$/.test(mobile);
//     const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//     markInvalid('name', !nameOk);
//     markInvalid('address', !addressOk);
//     markInvalid('mobile', !mobileOk);
//     markInvalid('email', !emailOk);

//     return nameOk && addressOk && mobileOk && emailOk;
// }

// // FORM SUBMIT (MAIN LOGIC)
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();

//     if (!validate()) return;

//     // button loading UI
//     btn.textContent = 'Sending...';
//     btn.style.opacity = '0.7';
//     btn.disabled = true;

//     const templateParams = {
//         from_name: document.getElementById('name').value.trim(),
//         address: document.getElementById('address').value.trim(),
//         mobile: document.getElementById('mobile').value.trim(),
//         from_email: document.getElementById('email').value.trim(),
//         purpose: document.querySelector('select').value,
//         to_email: "aryasahilkeorak@gmail.com"
//     };

//     try {
//         await emailjs.send(
//             EMAILJS_SERVICE_ID,
//             EMAILJS_TEMPLATE_ID,
//             templateParams
//         );

//         // SUCCESS UI (your style preserved)
//         btn.textContent = '✓ Enquiry Sent Successfully';
//         btn.style.background = '#3a6b47';
//         btn.style.color = '#fff';

//         // reset form
//         form.reset();

//     } catch (error) {
//         console.error(error);

//         btn.textContent = '❌ Failed! Try Again';
//         btn.style.background = '#8B0000';
//         btn.style.color = '#fff';
//     }

//     // reset button after 2 sec
//     setTimeout(() => {
//         btn.textContent = 'Submit';
//         btn.style.opacity = '1';
//         btn.disabled = false;
//         btn.style.background = '';
//         btn.style.color = '';
//     }, 2000);
// });

// // LIVE INPUT FIX (remove red border while typing)
// ['name', 'address', 'mobile', 'email'].forEach(id => {
//     document.getElementById(id).addEventListener('input', () => {
//         markInvalid(id, false);
//     });
// });



// // banner form
// // =============================================
// // EMAILJS CONFIG (same)
// const EMAILJS_PUBLIC_KEY = "xq2SsJLGLDgLvyw36";
// const EMAILJS_SERVICE_ID = "service_70sqgwn";
// const EMAILJS_TEMPLATE_ID = "template_598dzqb";
// // =============================================

// emailjs.init(EMAILJS_PUBLIC_KEY);

// const form2 = document.getElementById('contactForm2');
// const btn2 = form2.querySelector('.form-submit');

// // validation helper
// function markInvalid2(id, invalid) {
//     document.getElementById(id).classList.toggle('invalid', invalid);
// }

// function validate2() {
//     let ok = true;

//     const name = document.getElementById('name2').value.trim();
//     const mobile = document.getElementById('mobile2').value.trim();
//     const purpose = document.getElementById('purpose2').value;

//     const nameOk = name.length >= 2;
//     const mobileOk = /^[+\d\s\-()]{7,15}$/.test(mobile);
//     const purposeOk = purpose !== "";

//     markInvalid2('name2', !nameOk);
//     markInvalid2('mobile2', !mobileOk);
//     document.getElementById('purpose2').classList.toggle('invalid', !purposeOk);

//     return nameOk && mobileOk && purposeOk;
// }

// // FORM SUBMIT
// form2.addEventListener('submit', async function (e) {
//     e.preventDefault();

//     if (!validate2()) return;

//     btn2.textContent = 'Sending...';
//     btn2.style.opacity = '0.7';
//     btn2.disabled = true;

//     const templateParams = {
//         from_name: document.getElementById('name2').value.trim(),
//         mobile: document.getElementById('mobile2').value.trim(),
//         purpose: document.getElementById('purpose2').value,
//         to_email: "aryasahilkeorak@gmail.com"
//     };

//     try {
//         await emailjs.send(
//             EMAILJS_SERVICE_ID,
//             EMAILJS_TEMPLATE_ID,
//             templateParams
//         );

//         btn2.textContent = '✓ Enquiry Sent Successfully';
//         btn2.style.background = '#3a6b47';
//         btn2.style.color = '#fff';

//         form2.reset();

//     } catch (error) {
//         console.error(error);

//         btn2.textContent = '❌ Failed! Try Again';
//         btn2.style.background = '#8B0000';
//         btn2.style.color = '#fff';
//     }

//     setTimeout(() => {
//         btn2.textContent = 'Submit';
//         btn2.style.opacity = '1';
//         btn2.disabled = false;
//         btn2.style.background = '';
//         btn2.style.color = '';
//     }, 2000);
// });

// // LIVE INPUT FIX
// ['name2', 'mobile2'].forEach(id => {
//     document.getElementById(id).addEventListener('input', () => {
//         markInvalid2(id, false);
//     });
// });




// =============================================
// EMAILJS CONFIG (ONLY ONCE)
const EMAILJS_PUBLIC_KEY = "xq2SsJLGLDgLvyw36";
const EMAILJS_SERVICE_ID = "service_70sqgwn";
const EMAILJS_TEMPLATE_ID = "template_598dzqb";
// =============================================

emailjs.init(EMAILJS_PUBLIC_KEY);


// 🔥 COMMON VALIDATION
function validateForm(form, isFullForm = false) {
  let ok = true;

  const name = form.querySelector('[id^="name"]').value.trim();
  const mobile = form.querySelector('[id^="mobile"]').value.trim();

  const purposeEl = form.querySelector('[id^="purpose"], select');
  const purpose = purposeEl ? purposeEl.value : "";

  const nameOk = name.length >= 2;
  const mobileOk = /^[+\d\s\-()]{7,15}$/.test(mobile);
  const purposeOk = purpose !== "";

  form.querySelector('[id^="name"]').classList.toggle('invalid', !nameOk);
  form.querySelector('[id^="mobile"]').classList.toggle('invalid', !mobileOk);
  purposeEl?.classList.toggle('invalid', !purposeOk);

  // optional fields (only for first form)
  if (isFullForm) {
    const email = form.querySelector('#email')?.value.trim() || "";
    const address = form.querySelector('#address')?.value.trim() || "";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const addressOk = address.length >= 5;

    form.querySelector('#email')?.classList.toggle('invalid', !emailOk);
    form.querySelector('#address')?.classList.toggle('invalid', !addressOk);

    return nameOk && mobileOk && purposeOk && emailOk && addressOk;
  }

  return nameOk && mobileOk && purposeOk;
}


// 🔥 COMMON SUBMIT HANDLER
function handleFormSubmit(form, isFullForm = false) {

  const btn = form.querySelector('.form-submit');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!validateForm(form, isFullForm)) return;

    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    const templateParams = {
      from_name: form.querySelector('[id^="name"]').value.trim(),
      mobile: form.querySelector('[id^="mobile"]').value.trim(),
      purpose: form.querySelector('[id^="purpose"], select')?.value || "",
      to_email: "aryasahilkeorak@gmail.com"
    };

    // optional fields
    if (isFullForm) {
      templateParams.from_email = form.querySelector('#email')?.value.trim();
      templateParams.address = form.querySelector('#address')?.value.trim();
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      btn.textContent = '✓ Enquiry Sent Successfully';
      btn.style.background = '#3a6b47';
      btn.style.color = '#fff';

      form.reset();

    } catch (error) {
      console.error(error);

      btn.textContent = '❌ Failed! Try Again';
      btn.style.background = '#8B0000';
      btn.style.color = '#fff';
    }

    setTimeout(() => {
      btn.textContent = 'Submit';
      btn.style.opacity = '1';
      btn.disabled = false;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });


  // 🔥 LIVE INPUT FIX
  form.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('invalid');
    });
  });
}


// =============================================
// 🚀 INIT  FORMS

document.addEventListener("DOMContentLoaded", function () {

  const form1 = document.getElementById('contactForm');   // full form
  const form2 = document.getElementById('contactForm2');  // simple form
  const form3 = document.getElementById('contactForm3');  // NEW FORM 3

  if (form1) handleFormSubmit(form1, true);   // full (email + address)
  if (form2) handleFormSubmit(form2, false);  // simple
  if (form3) handleFormSubmit(form3, false);  // 👉 configure as needed

});

// ========== /MOBILE POPUP FORM ========== -->

(function () {
  if (window.matchMedia('(min-width: 992px)').matches) return;

  // Don't show if already dismissed or submitted
  if (sessionStorage.getItem('gbPopupDismissed')) return;

  const popup = document.getElementById('mobilePopup');
  const sheet = document.getElementById('mpSheet');
  const closeBtn = document.getElementById('mpClose');

  function openPopup() {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePopup(cb) {
    sheet.classList.add('closing');
    sheet.addEventListener('animationend', function handler() {
      popup.classList.remove('active');
      sheet.classList.remove('closing');
      document.body.style.overflow = '';
      sheet.removeEventListener('animationend', handler);
      if (cb) cb();
    });
  }

  function dismissPopup(reason) {
    sessionStorage.setItem('gbPopupDismissed', reason); // 'closed' or 'submitted'
    closePopup();
  }

  // Show after 5 seconds
  setTimeout(openPopup, 5000);

  // Close on ✕ button
  closeBtn.addEventListener('click', () => dismissPopup('closed'));

  // Close on backdrop click
  popup.addEventListener('click', (e) => {
    if (e.target === popup) dismissPopup('closed');
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) dismissPopup('closed');
  });

  // // Form submit
  // document.getElementById('contactForm3').addEventListener('submit', function (e) {
  //   e.preventDefault();
  //   const name = document.getElementById('name3').value.trim();
  //   const phone = document.getElementById('mobile3').value.trim();
  //   const purpose = document.getElementById('purpose3').value;

  //   if (!name || !phone) {
  //     alert('Please fill in your name and phone number.');
  //     return;
  //   }

  //   // TODO: your EmailJS / fetch call here
  //   console.log('Popup enquiry:', { name, phone, purpose });

  //   dismissPopup('submitted');
  // });
})();
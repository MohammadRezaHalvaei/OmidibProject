$(document).ready(function () {
  const popup = document.querySelector(".popup");
  const openPopup = document.querySelector(".search-section");
  const closePopup = document.querySelector(".popup .close");

  openPopup.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  closePopup.addEventListener("mouseover", function () {
    closePopup.setAttribute("name", "remove");
  });

  closePopup.addEventListener("mouseout", () => {
    closePopup.setAttribute("name", "close");
  });

  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 20,
  });

  const customerSwiper = new Swiper(".customers-swiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  VanillaTilt.init(document.querySelector(".events-image"), {
    max: 50,
    speed: 400,
  });

  VanillaTilt.init(document.querySelectorAll(".events-image"));

  const sections = document.querySelectorAll("div");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

$(".loop").owlCarousel({
  loop: true,
  margin: 50,
  responsiveClass: true,
  items: 3,
  autoWidth: true,
  center: true,
  responsive: {
    576: {
      items: 2,
      nav: false,
      loop: true,
    },
    600: {
      items: 5,
      nav: false,
      loop: true,
    },
  },
});

// Mobile Nav - Bar

const toggleButton = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navItems");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

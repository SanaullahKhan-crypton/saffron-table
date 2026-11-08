// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// MENU CATEGORY FILTERS

const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.filter;

    dishes.forEach(dish => {

      const show =
        category === "all" ||
        dish.dataset.category === category;

      dish.classList.toggle("hidden", !show);

    });
  });
});


// PREVENT SELECTING A PAST RESERVATION DATE

const dateInput = document.querySelector("#booking-date");

const today = new Date();

const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

dateInput.min = localToday;


// RESERVATION FORM

// This is a front-end demo.
// Connect a backend or booking service for real reservations.

const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

bookingForm.addEventListener("submit", event => {

  event.preventDefault();

  if (!bookingForm.reportValidity()) return;

  const guestName = bookingForm.elements.name.value.trim();

  formMessage.textContent =
    `Thank you, ${guestName}! This demo form is working, but reservations are not sent to the restaurant yet.`;

  bookingForm.reset();

  dateInput.min = localToday;

});


// AUTOMATIC FOOTER YEAR

document.querySelector("#year").textContent =
  new Date().getFullYear();
window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// const navbar = document.getElementsByTagName("nav")[0];
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > 1) {
//     navbar.classList.replace("bg-transparent", "nav-color");
//   } else if (window.scrollY <= 0) {
//     navbar.classList.replace("nav-color", "bg-transparent");
//   }
// });

window.onclick = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-color");
  } else {
    header.classList.remove("navbar-color");
  }
};

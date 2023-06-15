function HeaderColor() {
  // About Section

  var aboutLink = document.getElementById("aboutLink");
  var servicesLink = document.getElementById("servicesLink");
  var projectsLink = document.getElementById("projectsLink");
  var contactsLink = document.getElementById("contactsLink");
  if (window.scrollY >= 340 && window.scrollY < 840) {
    aboutLink.style.color = "var(--yellow-color)";
    servicesLink.style.color = "";
    projectsLink.style.color = "";
    contactsLink.style.color = "";
  } else if (window.scrollY >= 840 && window.scrollY < 1450) {
    aboutLink.style.color = "white";
    servicesLink.style.color = "var(--yellow-color)";
    projectsLink.style.color = "white";
    contactsLink.style.color = "white";
  } else if (window.scrollY >= 1450 && window.scrollY < 2500) {
    aboutLink.style.color = "";
    servicesLink.style.color = "";
    projectsLink.style.color = "var(--yellow-color)";
    contactsLink.style.color = "";
  } else if (window.scrollY >= 2500) {
    aboutLink.style.color = "";
    servicesLink.style.color = "";
    projectsLink.style.color = "";
    contactsLink.style.color = "var(--yellow-color)";
  } else {
    aboutLink.style.color = "";
    servicesLink.style.color = "";
    projectsLink.style.color = "";
    contactsLink.style.color = "";
  }
}

window.addEventListener("scroll", HeaderColor);

export default HeaderColor;

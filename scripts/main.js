const main = () => {
  const title = "lodomo.dev";
  const sections = [
    "Home",
    "About",
    "Previous Work",
    "Projects",
    "Contact",
  ];

  document.title = title;
  renderHeader(sections, title);
  renderMain();
  renderFooter();
};


const renderHeader = (sections, title) => {
  const header = document.getElementById('header');
  console.log(sections);
  renderNavbar(header, title, sections);
};

/*
 * Render the navbar with the title and sections.
 * Sections id's are "section-nameinlowercase"
 */
const renderNavbar = (header, title_text, sections) => {
  const navbar = elementAsChild(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "sticky-top",
    "navbar-dark",
    "bg-dark",
    "p-3",
  ]);

  const navbarSubContainer = elementAsChild(navbar, "div", ["container"]);


  const brand = elementAsChild(navbarSubContainer, "a", ["navbar-brand"], title_text);
  brand.href = "#";

  const toggler = elementAsChild(navbarSubContainer, "button", ["navbar-toggler"]);
  toggler.dataset.bsToggle = "collapse";
  toggler.dataset.bsTarget = "#navbarSupportedContent";
  toggler.alt = "Toggle Navigation";
  toggler.ariaLabel = "Toggle Navigation";

  // Toggler Icon
  elementAsChild(toggler, "span", ["navbar-toggler-icon"]);

  const collapse = elementAsChild(navbarSubContainer, "div", [
    "collapse",
    "navbar-collapse",
  ]);
  collapse.id = "navbarSupportedContent";

  const list = elementAsChild(collapse, "ul", ["navbar-nav", "mr-auto"]);

  sections.forEach((item) => {
    const listItem = elementAsChild(list, "li", ["nav-item"]);
    listItem.id = item.toLowerCase() + "-nav";
    const link = elementAsChild(listItem, "a", ["nav-link"], item);
    link.href = "#" + item.toLowerCase();
  });
};


const renderMain = () => {
  const main = document.getElementById('main');
};

const renderFooter = () => {
  const footer = document.getElementById('footer');
};

/*********** Helper Functions ***********/

/*
 * Helper function to create an element and append it to a parent.
 * You can optionally add classes and text to the element.
 * Adding text is only for buttons and anchors.
 */
const elementAsChild = (parent, type, classes = [], text = "") => {
  const element = document.createElement(type);
  parent.appendChild(element);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;
  return element;
};

main();

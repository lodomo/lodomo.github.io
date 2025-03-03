const main = () => {
  const title = "lodomo.dev";
  const sections = [
    "Home",
    "About",
    "PreviousWork",
    "Projects",
    "Contact",
  ];
  const branding_image_2x = "assets/branding-2x.png";

  document.title = title;
  renderHeader(sections, title);
  renderMain(sections);
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
  const branding_image_1x = "assets/branding-1x.png";
  const branding_w_logo = "assets/branding-w-logo.png";
  const navbar = createElement(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "sticky-top",
    "navbar-dark",
    "bg-dark",
    "p-3",
  ]);

  const navbarSubContainer = createElement(navbar, "div", ["container"]);


  const brand = createElement(navbarSubContainer, "a", ["navbar-brand"]);
  brand.href = "#";
  brand_img = createElement(brand, "img", ["branding"]);
  brand_img.alt = title_text;
  brand_img.src = branding_w_logo;
  brand_img.width = 162;
  brand_img.height = 37;

  const toggler = createElement(navbarSubContainer, "button", ["navbar-toggler"]);
  toggler.dataset.bsToggle = "collapse";
  toggler.dataset.bsTarget = "#navbarSupportedContent";
  toggler.alt = "Toggle Navigation";
  toggler.ariaLabel = "Toggle Navigation";

  // Toggler Icon
  createElement(toggler, "span", ["navbar-toggler-icon"]);

  const collapse = createElement(navbarSubContainer, "div", [
    "collapse",
    "navbar-collapse",
  ]);
  collapse.id = "navbarSupportedContent";

  const list = createElement(collapse, "ul", ["navbar-nav", "mr-auto"]);

  sections.forEach((item) => {
    const listItem = createElement(list, "li", ["nav-item"]);
    listItem.id = item.toLowerCase() + "-nav";
    const link = createElement(listItem, "a", ["nav-link"], item);
    link.href = "#" + item.toLowerCase();
  });
};


const renderMain = (sections) => {
  const main = document.getElementById('main');
  sectionGenerator(main, sections);
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
const createElement = (parent, type, classes = [], text = "") => {
  const element = document.createElement(type);
  parent.appendChild(element);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;
  return element;
};

/*
 * Generates the sections into the DOM.
 * Sections id's are "section-nameinlowercase"
 * Each section has an h2 heading and a div for content.
 * The content div id is "section-nameinlowercase-content"
 */
const sectionGenerator = (app, arr) => {
  arr.forEach((item) => {
    const row = createElement(app, "section", ["row"]);
    row.id = item.toLowerCase() + "-section";
    const heading = createElement(row, "h2", ["text-center"]);
    heading.textContent = item;

    // Section Content
    const contentid = row.id + "-content";
    const content = createElement(row, "div", ["row", contentid]);
    content.id = contentid;
    createElement(app, "hr");
  });
};

main();

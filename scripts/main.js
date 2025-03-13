import {
  title,
  sections,
  about,
  workExperience,
  projects,
  publicAccessKey,
} from "./data.mjs";

/*
 * Render the content of the website
 * return {void}
 */
function main() {
  document.title = title;
  renderHeader(sections, title);
  renderMain(sections, title);
  renderFooter(title);
}

/*
 * Render the header of the website.
 * Currently only renders the navbar.
 * There may be more content in the future.
 * return {void}
 */
function renderHeader(sections, title) {
  const header = document.getElementById("header");
  renderNavbar(header, title, sections);
}

/*
 * Renders each section of the website.
 * return {void}
 */
function renderMain(sections, title) {
  const main = document.getElementById("main");
  main.classList.add("container-fluid", "p-0");
  renderHome(main, title);
  renderAbout(main);
  renderPreviousWork(main);
  renderProjects(main);
  renderContact(main);
}

/*
 * Renders the footer of the website.
 * return {void}
 */
function renderFooter(title) {
  const footer = document.getElementById("footer");
  footer.classList.add(
    "container-fluid",
    "p-3",
    "bg-dark",
    "text-white",
    "text-center",
  );
  const footerRow = addElement(footer, "div", ["row"]);
  const spacer = addElement(footerRow, "div", ["col-md-4"]);
  const socials = addElement(footerRow, "div", [
    "col-md-4",
    "d-flex",
    "align-items-center",
    "justify-content-center",
  ]);

  const bluesky = addSocialButton(
    socials,
    "https://bsky.app/profile/lodomo.dev",
    "nf-fae-butterfly",
    "Bluesky Profile",
  );
  const email = addSocialButton(
    socials,
    "mailto:lodomo@lodomo.dev",
    "nf-md-email",
    "Email Lodomo",
  );
  const linkedin = addSocialButton(
    socials,
    "https://linkedin.com/in/ldmoon",
    "nf-dev-linkedin",
    "LinkedIn Profile",
  );
  const github = addSocialButton(
    socials,
    "https://github.com/lodomo",
    "nf-dev-github",
    "GitHub Profile",
  );

  const copyright = addElement(footerRow, "div", ["col-md-4"]);
  const footerImg = addElement(copyright, "img", ["p-0", "m-2"]);
  footerImg.src = "assets/footer-logo.png";
  footerImg.alt = "Pixel art computer logo with katakana ロドモ";
  footerImg.width = 28;
  footerImg.height = 35;
  const p = addElement(copyright, "span", ["p-0", "m-0"]);
  p.textContent = "© " + 2025 + " " + title;
}

function addSocialButton(parent, href, icon, ariaLabel = "") {
  const button = addElement(parent, "div", ["socials"]);
  // const iconElement = addElement("i", ["nf", "m-2", "socials", icon]);
  const link = addElement(button, "a");
  link.href = href;
  link.target = "_blank";
  link.innerHTML = `<i class="nf m-2 socials ${icon}"></i>`;
  link.ariaLabel = ariaLabel;
  return;
}

/*
 * Renders the navbar of the website.
 * The navbar is a fixed-top navbar with a logo and a list of sections.
 *
 * @param {HTMLElement} header - The header element to append the navbar to.
 * @param {String} title - The title of the website.
 * @param {Array} sections - An array of sections to render in the navbar.
 *
 * return {void}
 */
function renderNavbar(header, title, sections) {
  const branding_w_logo = "assets/branding-w-logo.png";
  const navbar = addElement(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "fixed-top",
    "navbar-dark",
    "bg-dark",
    "p-2",
  ]);

  const navbarSubContainer = addElement(navbar, "div", ["container"]);
  const brand = addElement(navbarSubContainer, "a", ["navbar-brand"]);
  brand.href = "#";

  const brandImage = addElement(brand, "img", [
    "branding-w-logo",
    "jiggle-hover",
  ]);
  brandImage.src = branding_w_logo;
  brandImage.alt = title;
  brandImage.height = 37;
  brandImage.width = 160;

  const toggler = addElement(navbarSubContainer, "button", ["navbar-toggler"]);
  toggler.dataset.bsToggle = "collapse";
  toggler.dataset.bsTarget = "#navbarSupportedContent";
  toggler.alt = "Toggle Navigation";
  toggler.ariaLabel = "Toggle Navigation";

  // Toggler Icon
  addElement(toggler, "span", ["navbar-toggler-icon"]);

  const collapse = addElement(navbarSubContainer, "div", [
    "collapse",
    "navbar-collapse",
  ]);
  collapse.id = "navbarSupportedContent";

  const list = addElement(collapse, "ul", ["navbar-nav", "mr-auto"]);

  sections.forEach((item) => {
    const listItem = addElement(list, "li", "", ["nav-item"]);
    listItem.id = item.toLowerCase() + "-nav";
    const link = addElement(listItem, "a", ["nav-link", "h-100", "fs-4"], item);
    let href = item.toLowerCase();
    link.textContent = item;
    href = href.replace(/\s+/g, "-"); // Fixes the issue with "Previous Work"
    link.href = "#" + href;

    // Found this and altered it from
    // https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
    link.addEventListener("click", () => {
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbar)?.hide();
      }
    });
  });
}

/*
 * Renders the home section of the website.
 * The home section is a jumbotron splash of my portrait and logo
 * with a scrolling checkerboard background.
 * return {void}
 */
function renderHome(main, title) {
  const homeRow = addElement(main, "div", ["row", "relative"]);
  homeRow.id = "home";
  const home = addElement(homeRow, "div", [
    "jumbotron",
    "jumbotron-fluid",
    "p-0",
    "vh-100",
    "home",
    "black",
  ]);

  // Keep an h1 element for accessibility
  const h1 = addElement(home, "h1");
  h1.ariaLabel = "Welcome to " + title;

  const logoContainer = addElement(home, "div", ["logo-container"]);
  const verticalLogo = addElement(logoContainer, "img", [
    "floating-logo",
    "vertical-logo",
  ]);
  verticalLogo.src = "assets/logo-vertical.png";
  verticalLogo.alt = "Pixel art logo that says 'Lodomo.Dev'";

  const horizontalLogo = addElement(logoContainer, "img", [
    "floating-logo",
    "horizontal-logo",
  ]);
  horizontalLogo.src = "assets/logo-horizontal.png";
  horizontalLogo.alt = "Pixel art logo that says 'Lodomo.Dev'";

  const portrait = addElement(home, "img", ["portrait", "pixel-art"]);
  portrait.src = "assets/pixel_portrait.png";
  portrait.alt = "Pixel art portrait of a man with a beard, and glasses.";
}

/*
 * Renders the about/bio section inside the 'okeska' text container.
 * return {void}
 */
function renderAbout(main) {
  const section = sectionTemplate(main, "About");
  section.container.classList.add("pb-4");

  section.span.classList.add("heading-bg-dark", "silkscreen");
  section.elem.classList.add("p-3", "okeska");

  for (let i = 0; i < about.length; i++) {
    const p = addElement(section.elem, "p");
    p.textContent = about[i];
  }
}

/*
 * Renders my resume in the previous work section.
 * TODO: Add education.
 */
function renderPreviousWork(main) {
  const section = sectionTemplate(main, "Previous Work");
  document.getElementById("previous-work").classList.add("text-center");

  for (let i = 0; i < workExperience.length; i++) {
    addWorkExperience(section.elem, workExperience[i]);
    if (i < workExperience.length - 1 && workExperience[i + 1]["company"]) {
      addElement(section.elem, "hr", ["d-none", "d-lg-block"]);
    }
  }
}

/*
 * Renders everything for a single work experience entry.
 * Adds it to the 'parent' element.
 * returns {void}
 */
function addWorkExperience(parent, data) {
  // Work Experience data keys
  const company = "company";
  const location = "location";
  const role = "role";
  const date = "date";
  const bullets = "bullets";

  if (data[company]) {
    const row = addElement(parent, "div", ["row", "previous-work-font"]);
    const companyCol = addElement(row, "div", [
      "col-md-6",
      "fs-2",
      "fw-bolder",
      "text-md-start",
      "previous-work-font",
    ]);
    companyCol.textContent = data[company];
    const locationCol = addElement(row, "div", [
      "col-md-6",
      "fw-light",
      "text-md-end",
      "fst-italic",
      "previous-work-font",
    ]);
    locationCol.textContent = data[location];
  }

  const row2 = addElement(parent, "div", ["row"]);
  const roleCol = addElement(row2, "div", [
    "col-md",
    "fst-italic",
    "text-md-start",
    "previous-work-font",
  ]);
  roleCol.textContent = data[role];
  const dateCol = addElement(row2, "div", [
    "col-md-4",
    "fw-bold",
    "text-md-end",
    "previous-work-font",
  ]);
  dateCol.textContent = data[date];

  if (data[bullets]) {
    const row3 = addElement(parent, "div", [
      "row",
      "text-start",
      "d-none",
      "d-lg-block",
    ]);
    const ul = addElement(row3, "ul", [
      "work-ul",
      "p-0",
      "m-0",
      "previous-work-font",
    ]);
    for (let i = 0; i < data[bullets].length; i++) {
      const li = addElement(ul, "li", ["work-li", "previous-work-font"]);
      li.textContent = data[bullets][i];
    }
  }
}

/*
 * Renders the projects section of the website.
 * return {void}
 */
function renderProjects(main) {
  const section = sectionTemplate(main, "Projects");
  const gap = "g-4";
  const rowMargin = "mb-4";

  const container = addElement(section.elem, "div", ["container", "p-1"]);

  let currentRow = addElement(container, "div", [
    "row",
    "align-items-stretch",
    gap,
    rowMargin,
  ]);
  for (let i = 0; i < projects.length; i++) {
    addProjectCard(currentRow, projects[i]);
  }
}

/*
 * Renders a single card.
 * @param {HTMLElement} parent - The parent element to append the card to.
 * @param {Object} data - The data to render in the card.
 */
function addProjectCard(parent, data) {
  // Project data keys
  const title = "title";
  const description = "description";
  const img = "img";
  const imgAlt = "imgAlt";
  const visit = "visit";
  const phone = "phone";
  const sourceCode = "sourceCode";
  const download = "download";
  const playBrowser = "playBrowser";

  const imgPath = "/assets/project-images/";

  const cardPadding = "p-2";
  const cardCorner = "rounded-3";

  const card = addElement(parent, "div", ["d-flex", "col-lg-6", "col-xl-4"]);
  const cardData = addElement(card, "div", [
    cardPadding,
    cardCorner,
    "container-fluid",
    "okeska",
    "position-relative",
  ]);

  const cardTitle = addElement(cardData, "h3", ["relative"]);
  const cardSubSpan = addElement(cardTitle, "span", [
    "silkscreen",
    "heading-bg-dark",
  ]);
  cardSubSpan.textContent = data[title];

  // Row with image and description.
  const cardImgRow = addElement(cardData, "div", ["row", "p-2"]);
  const cardImg = addElement(cardImgRow, "img", ["project-img"]);
  cardImg.src = imgPath + data[img];
  cardImg.alt = data[imgAlt];
  const cardDescRow = addElement(cardData, "div", ["row", "p-2"]);
  const cardDesc = addElement(cardDescRow, "p");
  cardDesc.textContent = data[description];

  const spacer = addElement(cardData, "div", ["mt-5"]);
  spacer.textContent = " ";

  // Row with buttons.
  const cardButtonRow = addElement(cardData, "div", [
    "row",
    "m-1",
    "p-2",
    "position-absolute",
    "bottom-0",
    "start-0",
    "end-0",
  ]);

  if (data[visit]) {
    const visitButton = projectCardButton(
      cardButtonRow,
      data[visit],
      "Visit",
      "nf-md-link",
    );
  }

  if (data[phone]) {
    const phoneFormatted = data[phone].replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3",
    );

    const phoneText = "Call " + phoneFormatted;
    const href = "tel:" + "+1" + data[phone];
    const phoneButton = projectCardButton(
      cardButtonRow,
      href,
      phoneText,
      "nf-fa-phone",
    );
  }

  if (data[sourceCode]) {
    const sourceCodeButton = projectCardButton(
      cardButtonRow,
      data[sourceCode],
      "Source",
      "nf-cod-github",
    );
  }

  if (data[download]) {
    const downloadButton = projectCardButton(
      cardButtonRow,
      data[download],
      "Download",
      "nf-oct-download",
    );
  }

  if (data[playBrowser]) {
    const playButton = projectCardButton(
      cardButtonRow,
      data[playBrowser],
      "Play",
      "nf-md-controller_classic",
    );
    playButton.classList.add("d-none", "d-lg-block");
  }
}

function projectCardButton(parent, href, text, nfIcon) {
  const button = addElement(parent, "a", [
    "btn",
    "btn-primary",
    "fs-4",
    "m-1",
    "col",
  ]);
  button.href = href;
  const icon = addElement(button, "i", ["nf", "m-2", nfIcon]);
  const span = addElement(button, "span");
  span.textContent = text;
  button.target = "_blank";
  return button;
}

function renderContact(main) {
  const section = sectionTemplate(main, "Contact");

  section.container.classList.add("pb-4");
  section.h2.classList.add("mx-auto", "text-center");
  section.span.classList.add("heading-bg-dark", "silkscreen", "offset-left");
  section.elem.classList.add("p-3", "okeska", "container", "max-400");

  const form = addElement(section.elem, "form");
  form.id = "contact-form";
  form.method = "POST";

  const accessKey = addElement(form, "input", ["form-control", "mb-3"]);
  accessKey.type = "hidden";
  accessKey.name = "access_key";
  accessKey.value = publicAccessKey;

  addFormTextInput(form, "Name");
  addFormTextInput(form, "Email");
  addFormTextInput(form, "Subject");

  /* Special for Message Input */
  const message = addElement(form, "div", ["form-group"]);
  const messageLabel = addElement(message, "label");
  messageLabel.htmlFor = "message";
  messageLabel.textContent = "Message";
  const messageInput = addElement(message, "textarea", [
    "form-control",
    "mb-2",
  ]);
  messageInput.id = "message";
  messageInput.required = true;
  messageInput.name = "message";

  const botCheck = addElement(form, "input", ["form-check-input", "hidden"]);
  botCheck.type = "checkbox";
  botCheck.name = "botcheck";
  botCheck.style.display = "none";

  // Submit and Reset Buttons
  const buttonRow = addElement(form, "div", ["row", "g-3", "p-2"]);
  const submitButton = addElement(buttonRow, "button", [
    "btn",
    "btn-primary",
    "col",
  ]);
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  addElement(buttonRow, "div", ["col-1"]);
  const resetButton = addElement(buttonRow, "button", [
    "btn",
    "btn-secondary",
    "col",
  ]);
  resetButton.type = "reset";
  resetButton.textContent = "Reset";

  const result = addElement(form, "div", ["row", "p-2"]);
  result.id = "result";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
  });
}

/**
 * Create a text input and the corresponding label.
 * Works for text, email, password, and date inputs.
 */
function addFormTextInput(parent, type) {
  const formGroup = addElement(parent, "div", ["form-group"]);
  const label = addElement(formGroup, "label");
  const typeIdFor = type.toLowerCase();
  label.htmlFor = typeIdFor;
  label.textContent = type;
  const input = addElement(formGroup, "input", ["form-control", "mb-2"]);
  input.type = typeIdFor;
  input.id = typeIdFor;
  input.required = true;
  input.name = typeIdFor;
}

function submitForm() {
  const form = document.getElementById("contact-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = "Message Sent!";
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });
}

function sectionTemplate(parent, sectionName) {
  let cssName = sectionName.toLowerCase();
  cssName = cssName.replace(/\s+/g, "-"); // Fixes the issue with "Previous Work"
  const container = addElement(parent, "section", [
    "container-fluid",
    "section",
    "p-0",
    cssName,
  ]);
  const seperator = addElement(container, "div", [
    "container-fluid",
    "drop-shadow",
  ]);
  const row = addElement(container, "div", [
    "row",
    "p-3",
    "container",
    "mx-auto",
    "section-top",
  ]);
  row.id = cssName;

  let headingClass = sectionName.toLowerCase().replace(/\s+/g, "-");
  headingClass = headingClass + "-heading";
  const h2 = addElement(row, "h2", [headingClass]);
  const span = addElement(h2, "span");
  span.textContent = sectionName;

  const elem = addElement(row, "div");

  return { h2, span, container, row, elem };
}

/* Helper Functions */

/*
 * Print the import data to the console.
 * Used for debugging purposes.
 */
function logImportData() {
  console.log(title);
  console.log(sections);
  console.log(workExperience);
  console.log(projects);
  console.log("Public Email Key: " + publicAccessKey);
}

function createElement(tag, classes = []) {
  const element = document.createElement(tag);
  if (classes.length > 0) element.classList.add(...classes);
  return element;
}

function addElement(parent, tag, classes = []) {
  const element = createElement(tag, classes);
  parent.appendChild(element);
  return element;
}

logImportData();
main();

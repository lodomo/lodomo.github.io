/*
 * Renders the entire page.
 */
const main = () => {
  const title_text = "Homework #3";
  const sections = ["Welcome", "Starships", "Form"];
  const starship_url = "https://swapi.dev/api/starships/";

  const header = document.getElementById("header");
  const app = document.getElementById("app");

  app.classList.add("container");
  renderNavbar(header, title_text, sections);
  createElement(header, "h1", ["h1"], title_text); // Render Title
  sectionGenerator(app, sections);
  renderWelcome();
  renderStarships(starship_url);
  renderForm();
};

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
 * Render the navbar with the title and sections.
 * Sections id's are "section-nameinlowercase"
 */
const renderNavbar = (header, title_text, sections) => {
  const navbar = createElement(header, "nav", [
    "navbar",
    "navbar-expand-md",
    "sticky-top",
    "navbar-dark",
    "bg-dark",
    "p-3",
  ]);

  const brand = createElement(navbar, "a", ["navbar-brand"], title_text);
  brand.href = "#";

  const toggler = createElement(navbar, "button", ["navbar-toggler"]);
  toggler.dataset.bsToggle = "collapse";
  toggler.dataset.bsTarget = "#navbarSupportedContent";
  toggler.alt = "Toggle Navigation";
  toggler.ariaLabel = "Toggle Navigation";

  // Toggler Icon
  createElement(toggler, "span", ["navbar-toggler-icon"]);

  const collapse = createElement(navbar, "div", [
    "collapse",
    "navbar-collapse",
  ]);
  collapse.id = "navbarSupportedContent";

  const list = createElement(collapse, "ul", ["navbar-nav", "mr-auto"]);

  sections.forEach((item) => {
    const listItem = createElement(list, "li", ["nav-item"]);
    listItem.id = item.toLowerCase() + "-nav";
    const link = createElement(listItem, "a", ["nav-link"], item);
    link.href = "#" + item.toLowerCase() + "-section";
  });
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

/**
 * Fetch data from a URL and return the JSON response
 * Throws an error if the request fails.
 */
const fetchData = async (url) => {
  response = await fetch(url);
  data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return data;
};

/**
 * Render the welcome section with a picture and bio.
 */
const renderWelcome = () => {
  const welcomeContent = document.getElementById("welcome-section-content");
  const pfpdiv = createElement(welcomeContent, "div", [
    "text-center",
    "mx-auto",
  ]);
  const pfp = createElement(pfpdiv, "img", [
    "m-3",
    "rounded-circle",
    "text-center",
  ]);
  const bio = createElement(welcomeContent, "p", [
    "bio",
    "text-start",
    "mx-auto",
  ]);
  pfp.src = "../images/lorenzo.png";
  pfp.alt =
    "A black and white portrait of a man with a beard, glasses, and dark hair.";
  pfp.width = 200;
  pfp.height = 200;

  bio.textContent =
    "My name is Lorenzo Moon. I am a dad, a sailor, and a huge nerd. I am " +
    "always working on a project, be it art, games, or code. One time I " +
    "made an escape room. I hope to bring that experience to Portland one " +
    "day.";
};

/**
 * Render the starships section with a card for each starship.
 * Starships are 1 wide on sm and 2 wide on md and up.
 */
const renderStarships = async (api_url) => {
  const gap = "g-3";
  const rowMargin = "mb-3";

  const starshipsContent = document.getElementById("starships-section-content");
  starshipsContent.classList.add("p-3");
  createLoader(starshipsContent, "starships-loader");
  let data = null;

  try {
    data = await fetchData(api_url);
  } catch (error) {
    console.error("Error fetching data:", error);
    destroyLoader("starships-loader");
    starshipsContent.textContent =
      "Error fetching data. Please try again later.";
    starshipsContent.classList.add("text-danger");
    return;
  }

  destroyLoader("starships-loader");

  const container = createElement(starshipsContent, "div", [
    "container",
    "p-1",
  ]);

  let currentRow = null;

  for (let i = 0; i < data.results.length; i++) {
    if (i % 2 === 0) {
      currentRow = createElement(container, "div", ["row", gap, rowMargin]);
    }
    createCard(currentRow, data.results[i]);
  }
};

/**
 * Helper function to create a card for a starship.
 * The card has the starship name, manufacturer, speed, and cargo capacity.
 * The cost is in credits and formatted with commas.
 * If any data is missing, it is replaced with "n/a".
 */
const createCard = (parent, data) => {
  const colBreak = "col-md-6";
  const cardPadding = "p-2";
  const cardCorner = "rounded-3";
  const cardBg = "bg-white";

  const card = createElement(parent, "div", [colBreak]);
  const cardData = createElement(card, "div", [
    cardPadding,
    cardCorner,
    cardBg,
    "container-fluid",
  ]);

  // Replace missing data with "n/a"
  for (const dataKey in data) {
    if (
      data[dataKey] === null ||
      data[dataKey] === "" ||
      data[dataKey] === "unknown"
    ) {
      data[dataKey] = "n/a";
    }
  }

  const rowNameCredits = createElement(cardData, "div", ["row"]);
  const name = createElement(rowNameCredits, "p", ["col", "fw-bold"]);
  name.textContent = data.name;
  const credits = createElement(rowNameCredits, "p", [
    "col",
    "fw-bold",
    "text-end",
  ]);
  credits.textContent = stringNumberToCommas(data.cost_in_credits) + " credits";

  const rowManufacturer = createElement(cardData, "div", ["row"]);
  const manufacturer = createElement(rowManufacturer, "p", ["col"]);
  manufacturer.textContent = data.manufacturer;

  const rowSpeedCargo = createElement(cardData, "div", ["row"]);
  const speed = createElement(rowSpeedCargo, "p", [
    "col",
    "border-end",
    "border-2",
    "text-center",
  ]);

  /* I was having a hard time getting the break and bold to work with bootstrap and <p> tags.
   * I just hard coded the styles with html, and put a break.
   * It ain't perfect, but it works. */
  speed.innerHTML = `
    <b>${stringNumberToCommas(data.max_atmosphering_speed)}</b> <br>
    Max Atmosphering Speed
  `;

  const cargo = createElement(rowSpeedCargo, "p", ["col", "text-center"]);
  cargo.innerHTML = `
    <b>${stringNumberToCommas(data.cargo_capacity)}</b> <br>
    Cargo Capacity
  `;
};

/**
 * Add commas to a string number to make it more readable.
 * For example, "1000" becomes "1,000".
 * The regex is from https://sebhastian.com/javascript-format-number-commas/
 */
const stringNumberToCommas = (str) => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Create a spinner loader and append it to the parent.
 */
const createLoader = (parent, id) => {
  const loader = createElement(parent, "div", [
    "spinner-border",
    "text-secondary",
    "mx-auto",
  ]);
  loader.id = id;
  loader.role = "status";
  createElement(loader, "span", ["sr-only"], "");
  return loader;
};

/**
 * Destroy a loader by removing it from the DOM.
 * The loader is identified by its id.
 */
const destroyLoader = (id) => {
  const loader = document.getElementById(id);
  loader.remove();
};

/**
 * Render the form section with text inputs and radio buttons.
 * Submitting the form runs the submitForm function.
 * All form fields are required and will prompt the user if they are empty.
 */
const renderForm = () => {
  const form_text_inputs = ["Name", "Username", "Email", "Password", "Date"];
  const form_pronouns = [
    "She/Her",
    "He/Him",
    "They/Them",
    "I prefer not to say",
  ];

  const form = createElement(
    document.getElementById("form-section-content"),
    "form",
    ["form", "bg-light", "border", "rounded", "mx-auto", "p-2"],
  );

  const formTitle = createElement(form, "h3", ["mb-3", "text-center"], "Form");
  formTitle.textContent = "Sign Up Form";
  const formSubtitle = createElement(form, "p", ["text-center"]);
  formSubtitle.textContent = "Fill out the items in the form below.";

  for (const input of form_text_inputs) {
    createFormTextInput(form, input);
  }

  const pronounFieldset = createElement(form, "fieldset", ["mb-3"]);
  const pronounLegendTitle = createElement(pronounFieldset, "legend", [
    "fs-6",
  ]);
  pronounLegendTitle.textContent = "Pronouns";

  for (const pronoun of form_pronouns) {
    createFormRadio(pronounFieldset, "Pronouns", pronoun);
  }

  // Submit and Reset Buttons
  const buttonRow = createElement(form, "div", ["row", "g-3", "p-2"]);
  const submitButton = createElement(buttonRow, "button", [
    "btn",
    "btn-primary",
    "col",
  ]);
  createElement(buttonRow, "div", ["col-1"]);
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  const resetButton = createElement(buttonRow, "button", [
    "btn",
    "btn-secondary",
    "col",
  ]);
  resetButton.type = "reset";
  resetButton.textContent = "Reset";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
  });
};

/**
 * Print the form data to the console.
 */
const submitForm = () => {
  console.log("========== Form Submission ==========");
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const pronouns = document.querySelectorAll("input[type=radio]");

  console.log("Name: " + name);
  console.log("Username: " + username);
  console.log("Email: " + email);
  console.log("Date: " + date);
  for (const pronoun of pronouns) {
    if (pronoun.checked) {
      const label = document.querySelector(`label[for="${pronoun.id}"]`);
      console.log("Pronouns: " + (label ? label.textContent : pronoun.value));
    }
  }

  alert("Submit Successful! Check the console for the form data.");
};

/**
 * Create a text input and the corresponding label.
 * Works for text, email, password, and date inputs.
 */
const createFormTextInput = (parent, type) => {
  const formGroup = createElement(parent, "div", ["form-group"]);
  const label = createElement(formGroup, "label");
  const typeIdFor = type.toLowerCase();
  label.htmlFor = typeIdFor;
  label.textContent = type;
  const input = createElement(formGroup, "input", ["form-control", "mb-2"]);
  input.type = typeIdFor;
  input.id = typeIdFor;
  input.required = true;
};

/**
 * Create a radio input and the corresponding label.
 * This makes sure all radio inputs are connected properly.
 */
const createFormRadio = (parent, legend, type) => {
  let typeValid = type.toLowerCase();
  typeValid = typeValid.replace(/\s/g, "-");
  typeValid = typeValid.replace(/\//g, "-");
  const formCheck = createElement(parent, "div", ["form-check"]);
  const input = createElement(formCheck, "input", ["form-check-input"]);
  input.type = "radio";
  input.name = legend;
  input.id = legend + "-" + typeValid;
  const label = createElement(formCheck, "label", ["form-check-label"]);
  label.htmlFor = input.id;
  label.textContent = type;
  input.required = true;
};

main();

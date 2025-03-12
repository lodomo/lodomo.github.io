/*
 * Render the content of the website
 * return {void}
 */
function main() {
  const title = "lodomo.dev";
  const sections = ["Home", "About", "Previous Work", "Projects", "Contact"];
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
  const socials = addElement(footerRow, "div", ["col-md-4"]);

  const bluesky = addElement(socials, "p");
  bluesky.textContent = "Placeholder";

  const copyright = addElement(footerRow, "div", ["col-md-4"]);
  const footerImg = addElement(copyright, "img", ["p-0", "m-2"]);
  footerImg.src = "assets/footer-logo.png";
  footerImg.alt = "Pixel art computer logo with katakana ロドモ";
  footerImg.width = 28;
  footerImg.height = 35;
  const p = addElement(copyright, "span", ["p-0", "m-0"]);
  p.textContent = "© " + 2025 + " " + title;
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
    "p-3",
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
    const link = addElement(listItem, "a", ["nav-link", "h-100", "fs-3"], item);
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
 * return {void}
 */
function renderHome(main, title) {
  const homeRow = addElement(main, "div", ["row", "relative"]);
  homeRow.id = "home";
  const home = addElement(homeRow, "div", [
    "jumbotron",
    "jumbotron-fluid",
    "vh-100",
    "home",
    "black",
  ]);

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

function renderAbout(main) {
  const section = sectionTemplate(main, "About");
  section.container.classList.add("pb-4");

  section.row.classList.add("okeska", "mt-4");
  section.span.classList.add("heading-bg-dark");
  // section.row
  // section.elem

  const p = addElement(section.elem, "p");
  p.textContent = "My bio should go here, I have no idea how to write a bio.";
}

function renderPreviousWork(main) {
  const section = sectionTemplate(main, "Previous Work");

  // Get element by id previous-work"

  document.getElementById("previous-work").classList.add("text-center");

  workExperience(
    section.elem,
    "Plastic Goose, LLC",
    "Remote",
    "Project Management, Systems Solution Engineer",
    "Feb 2023-Nov 2024",
    [
      "Designed and implemented a distributed system architecture, ensuring efficient data aggregation, processing, & coordination.",
      "Developed custom software to facilitate real-time data collection and analysis, optimizing system performance and reliability.",
      "Deployed and maintained the system, implementing scalable solutions for long-term functionality and adaptability.",
    ],
  );

  addElement(section.elem, "hr", ["divider"]);

  workExperience(
    section.elem,
    "U.S. Navy",
    "Point Loma, CA / Norfolk, VA / Yokosuka, JP",
    "Petty Officer First Class - Lead Petty Officer - Master Training Specialist",
    "Dec 2018-Jul 2022",
    [
      "Designed, developed, and created a Microsoft Office based solution (Word, Excel, & Outlook) for tracking personnel training, scheduling classroom availability for instructor Sonar Technicians, and all incoming Sonar Technicians for the entire US Navy.",
      "Developed a $20 million dollar course for the US Navy. Designed and created the trainee guide used by thousands of students.",
      "Directly led 27 senior personnel, and their 500 subordinates, 4625 hours of instruction for over 800 Graduated students.",
      "Managed credentials for civilian staff of 52 at the command for four years. Involving processing paperwork for ID cards, and maintaining detailed records of their employment and contract status. Maintained spreadsheets for renewals and expiration.",
      "As Master Training Specialist Mentor and Coordinator, directly mentored 10 MTS Candidates, and chaired 3 MTS Boards.",
      "Conducted 30 instructor evaluations, certified 15 instructors, and held weekly staff training to ensure instructional excellence.",
    ],
  );

  workExperience(
    section.elem,
    " ",
    " ",
    "Petty Officer Second Class - Sonar Supervisor",
    "Nov 2015-Dec 2018",
    [
      "Designed, and created an Excel solution for tracking training across 7 departments, 300 personnel, and 1000 + requirements.",
      "Created, and presented daily sonar operation & range forecasting presentations to the Captain, Wardroom, and Chief’s mess.",
      "Led 34 personnel to receive 85 % advancement(double the average), 90 % of personnel qualified ESWS, and 50 qualifications.",
      "Lead 16 torpedo handling evolutions, six air - water interchanges, 342 maintenance checks, near - perfect certification USW 2.4",
      "Tracked submarines, contributing to high - profile events, compiling 688 data packages that enhanced operational intelligence.",
      "Served as Sonar Supervisor for thousands of real world search hours, 19 at - sea USW scenarios, lead the first successful JDAM exercise in collaboration with the U.S.Air Force, helicopter navigation assistance, and communication with other aircraft.",
    ],
  );

  workExperience(
    section.elem,
    " ",
    " ",
    "Petty Officer Third Class - Sonar Technician",
    "Dec 2014-Nov 2015",
    [
      "Oversight on 55 emergency dry dock work orders, including $1.8 million dollars in repair parts.",
    ],
  );

  workExperience(
    section.elem,
    " ",
    " ",
    "Seaman - Sonar Technician",
    "Jul 2013-Dec 2014",
    [],
  );

  addElement(section.elem, "hr", ["divider"]);

  workExperience(
    section.elem,
    "Polycraft, Inc.",
    "Temecula, CA",
    "Head of Art Department",
    "Jan 2009-Jul 2013",
    [
      "Collaborated with customers to produce high-precision proofs, Quality Assurance: ISO certification",
      "Maintained records, proofs, plates. and artwork for thousands of orders with streamlined reproducibility in re-orders.",
    ],
  );
}

function renderProjects(main) {
  const section = sectionTemplate(main, "Projects");

  const gap = "g-3";
  const rowMargin = "mb-3";

  const container = addElement(section.elem, "div", ["container", "p-1"]);

  const projects = projectCards();

  let currentRow = null;
  for (let i = 0; i < projects.length; i++) {
    if (i % 4 === 0) {
      currentRow = addElement(container, "div", ["row", gap, rowMargin]);
    }
    currentRow.appendChild(projects[i]);
  }

  const p = addElement(section.elem, "p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function projectData() {
  return [
    {
      title: "Escape The Arcade",
      description: "The year is 198X, and from the veiled origins of Katana Corp. comes a new gaming frontier—Escape the Arcade. The why and how are shrouded in mystery, but one thing is clear: this is where next-level technology and imagination fuse to create experiences unlike anything you've ever encountered. I was the sole-programmer for anything technical in this project. From the hardware architecture to the software that runs the room, I coded it all.",
      img: "escapethearcade.png",
      visit: "https://www.escapethearcade.com",
    },
    {
      title: "Neon Haven",
      description: "The year is 208X. You've just been recruited by the Code Samurai, an elite group of renegades with a mission to dismantle the corrupt RONIN Crime Syndicate. After a major operation, you're tasked with handling the return of your team. But something's wrong. Instead of the five expected Samurai, fifteen figures are at your doorstep, all claiming to be on your side. Can you figure out who is friend, and who is foe? This game requires NO download, NO install, NO registration, NO payment, NO ads, and NO tracking of ANY kind.",
      img: "neonhaven.png",
      phone: "+13618801802",
    },
    {
      title: "Escape Wright",
      description: "An open source initiative to help anyone create complex immersive escape room experience. Currently in development, not ready for use.",
      img: "escapewright.png",
      sourceCode: "https://git.lodomo.dev/escapewright",
    },
    {
      title: "Boulder Mage",
      description: "Boulder Mage and the Eternal Nightmare is a proof of concept of a game currently in development by Lodomo.Dev. This game was 2nd place in the LOSPEC LTRO-1 GameJam. I am very proud of this game.",
      img: "bouldermage.png",
      download: "https://lodomo.itch.io/bouldermagenightmare",
      playBrowser: "https://lodomo.itch.io/bouldermagenightmare",
      sourceCode: "https://git.lodomo.dev/bmaten",
    },
    {
      title: "Don't Eat Poison",
      description: "Created for iOS, Android, Linux, and Windows, Don't Eat Poison is a simple game where you are a mindless pig who must avoid eating poison. The trick? He's allergic to a random poison fruit each life. Unlock costumes, compete for high scores, and maybe one day you'll be a merpig. Note: Sorry, this is no longer available on any app store.",
      img: "donteatpoison.png",
      download: "https://lodomo.itch.io/dont-eat-poison",
    },
    {
      title: "Peasants in a Dungeon",
      description: "A text based adventure where you're unfairly thrown into a dungeon. Will you escape? Will you die? Will you rob a mouse to save yourself? Who knows!",
      img: "peasantsinadungeon.png",
      download: "https://lodomo.itch.io/peasants-in-a-dungeon",
      sourceCode: "https://git.lodomo.dev/piad",
    },
    {
      title: "Trajectory Oracle",
      description: "What if we could figure out where things are going? Trajectory Oracle is an experiment that combines machine learning with YOLO object detection to predict the trajectory of objects in a video. Does it work? Sometimes. Was it fun to make? Absolutely.",
      img: "trajectoryoracle.png",
      sourceCode: "https://git.lodomo.dev/trajorc",
    },
    {
      title: "LunaSea",
      description: "What if the moon fell into the sea? What if humanity was compelled to conquer it? What if you... succeeded? Text-Based Adventure. Full GUI version in the works.",
      img: "lunasea.png",
      sourceCode: "https://git.lodomo.dev/lunasea",
    },
    {
      title: "Variable Boot Device",
      description: "",
      img: "variablebootdevice.png",
      sourceCode: "https://git.lodomo.dev/vbd",
    },
    {
      title: "Neovim Theme: Orion",
      description: "",
      img: "orion.png",
      sourceCode: "https://git.lodomo.dev/orion",
      phone: "(555) 555-5555",
    },
    {
      title: "Messengern",
      description: "MERN Stack based chat application. This is a proof of concept for a chat application that uses the MERN stack. It is not intended for production use.",
      img: "assets/project6.png",
      sourceCode: "https://git.lodomo.dev/mern",
    },
  ]
}

function projectCards() {
  return [];
}

function renderContact(main) {
  const section = sectionTemplate(main, "Contact");

  const p = addElement(section.elem, "p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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

  const h2 = addElement(row, "h2");
  const span = addElement(h2, "span");
  span.textContent = sectionName;

  const elem = addElement(row, "div");

  return { h2, span, container, row, elem };
}

/* Helper Functions */
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

function workExperience(parent, company, location, role, date, bullets) {
  // sm layout
  // Company (bold)
  // Location (italic)
  // italic (bold)
  // Date (bold)
  // Bullets
  //
  // md layout
  // Company (bold) (left) | Location (italic) (right)
  // Role (bold) (left) | Date (italic) (right)
  // Bullets

  if (company !== " ") {
    const row = addElement(parent, "div", ["row", "previous-work-font"]);
    const companyCol = addElement(row, "div", [
      "col-md-6",
      "fs-2",
      "fw-bolder",
      "text-md-start",
      "previous-work-font",
    ]);
    companyCol.textContent = company;
    const locationCol = addElement(row, "div", [
      "col-md-6",
      "fw-light",
      "text-md-end",
      "fst-italic",
      "previous-work-font",
    ]);
    locationCol.textContent = location;
  }

  const row2 = addElement(parent, "div", ["row"]);
  const roleCol = addElement(row2, "div", [
    "col-md",
    "fst-italic",
    "text-md-start",
    "previous-work-font",
  ]);
  roleCol.textContent = role;
  const dateCol = addElement(row2, "div", [
    "col-md-4",
    "fw-bold",
    "text-md-end",
    "previous-work-font",
  ]);
  dateCol.textContent = date;

  if (bullets.length > 0) {
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
    bullets.forEach((bullet) => {
      const li = addElement(ul, "li", ["work-li", "previous-work-font"]);
      li.textContent = bullet;
    });
  }
}

main();

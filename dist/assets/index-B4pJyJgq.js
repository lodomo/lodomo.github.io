(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.title="Lodomo.Dev";document.querySelector("#header").innerHTML=`
  <h1 class="h1 okeska">Lodomo.Dev</h1>
  <nav class="navigation" id="nav"></nav>        
`;document.querySelector("#nav").innerHTML=`
    <ul class="nav-list okeska">
      <li class="nav-item"><a class="nav-anchor" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-anchor" href="#about">About</a></li>
      <li class="nav-item"><a class="nav-anchor" href="#projects">Projects</a></li>
      <li class="nav-item"><a class="nav-anchor" href="#source-code">Source Code</a></li>
      <li class="nav-item"><a class="nav-anchor" href="#contact">Contact</a></li>
    </ul>
`;document.querySelector("#main").innerHTML=`
  <main>
    <section id="about" class="section">
      <h2 class="h2 okeska">About</h2>
      <div class="content about okeska">
        <p>
          I'm a dad, a nerd, a builder, and a problem-solver. 
          Whether it’s coding, gaming, or tackling hands-on projects, 
          I love figuring out how things work and making them better.
        </p>

        <p>
          Before dedicating my time to software, I spent nine years in the U.S. Navy, 
          earning the rank of First Class Petty Officer and achieving my Master 
          Training Specialist certification. That experience taught me leadership, 
          discipline, and how to break down complex problems.
        </p>

        <p>
          Now, I’m wrapping up my Computer Science degree at Portland State University, 
          set to graduate in June 2025.
        </p>

        <p>
          I'm passionate about creating things that bring fun into the world. 
          I've won awards for my game design and development, and I'm always looking for new ways to innovate.
        </p>

        <p>
          I have a strong ethical compass. Technology should make life better for everyone.
          </p>
        <b>
        <p>
          Exploiting users is not a business model.
        </p>
        <p>
          Manipulating players is not game design. 
        </p>
        <p>
          Technology should be fun, fair, and inclusive.
        </p>
          </b>
      </div>
    </section>
    <section id="projects" class="section projects">
      <h2 class="h2 okeska">Projects</h2>
      <div class="content project-content">
        <div class="project-card okeska">
          <img src="/code-samurai.png" alt="Logo for Escape The Arcade, A neon sign on a brick wall background." class="project-img">
          <h3 class="project-title">Escape The Arcade</h3>
          <p class="project-description">
              The year is 198X, and from the veiled origins of Katana Corp. comes a new gaming frontier—Escape the Arcade. The why and how are shrouded in mystery, but one thing is clear: this is where next-level technology and imagination fuse to create experiences unlike anything you've ever encountered. 
            <br>
          I was the sole-programmer for anything technical in this project.<br>
          From the hardware architecture to the software that runs the room, I coded it all.<br>
          </p>
          <a href="https://www.escapethearcade.com/" class="project-anchor">Visit Site</a>
        </div>

        <div class="project-card okeska">
          <img src="/neonhaven.png" alt="A neon sign that says Neon Haven with a 80s style techno city behind it." class="project-img">
          <h3 class="project-title">Neon Haven</h3>
          <p class="project-description">
            The year is 208X.
            <br>
            You've just been recruited by the Code Samurai, an elite group of renegades with a mission to dismantle the corrupt RONIN Crime Syndicate.
            <br>
            After a major operation, you're tasked with handling the return of your team.
            <br>
            But something's wrong.
            <br>
            Instead of the five expected Samurai,
            <br>
            Fifteen figures are at your doorstep, all claiming to be on your side.
            <br>
            Can you figure out who is friend, and who is foe?
            <br>
            This game requires NO download, NO install, NO registration, NO payment, NO ads, and NO tracking of ANY kind.
          </p>
          <a href="tel:+13618801802" class="project-anchor">Call (361) 880-1802</a>
        </div>

        <div class="project-card okeska">
          <img src="/bouldermage.png" alt="Text that says Boulder Mage and the Eternal Nightmare" class="project-img">
          <h3 class="project-title">Boulder Mage</h3>
          <p class="project-description">
            Boulder Mage and the Eternal Nightmare is a proof of concept of a game currently in development by Lodomo.Dev.
            <br>
            This game was 2nd place in the LOSPEC LTRO-1 GameJam.
            <br>
            I am very proud of this game.
          </p>
          <a href="https://lodomo.itch.io/bouldermagenightmare" class="project-anchor">Play in Browser (Desktop)</a>
        </div>

        <div class="project-card okeska">
          <img src="/donteatpoison.png" alt="A bright pink background with a pixel pig. Text says Don't Eat Poison" class="project-img">
          <h3 class="project-title">Don't Eat Poison</h3>
          <p class="project-description">
            Created for iOS, Android, Linux, and Windows, Don't Eat Poison is a simple game where you
            are a mindless pig who must avoid eating poison. The trick? He's allergic to a random
            poison fruit each life.

            <br>
            Unlock costumes, compete for high scores, and maybe one day you'll be a merpig.
            <br>
            Note: Sorry, this is no longer available on any app store.
          </p>
          <a href="https://lodomo.itch.io/dont-eat-poison" class="project-anchor">Download</a>
        </div>
        
        <div class="project-card okeska">
          <img src="/peasantsinadungeon.png" alt="Pixelated text that says Peasants in a Dungeon" class="project-img">
          <h3 class="project-title">Peasants in a Dungeon</h3>
          <p class="project-description">
            A text based adventure where you're unfairly thrown into a dungeon.
            Will you escape? Will you die? Will you rob a mouse to save yourself?
            Who knows! 
          </p>
          <a href="https://lodomo.itch.io/peasants-in-a-dungeon" class="project-anchor">Download</a>
        </div>
 
        <div class="project-card okeska">
          <img src="/trajorc.png" alt="Many colored lines in a seemingly nonsensical pattern." class="project-img">
          <h3 class="project-title">Trajectory Oracle</h3>
          <p class="project-description">
            What if we could figure out where things are going?
            Trajectory Oracle is an experiment that combines machine learning with
            YOLO object detection to predict the trajectory of objects in a video.
            <br>
            Does it work? Sometimes. 
            <br>
            Was it fun to make? Absolutely.
          </p>
          <a href="https://git.lodomo.dev/trajorc" class="project-anchor">View Source</a>
        </div>

        <div class="project-card okeska">
          <img src="/lunasea.png" alt="Logo of the moon in the sea with the text LunaSea." class="project-img">
          <h3 class="project-title">Luna Sea</h3>
          <p class="project-description">
            What if the moon fell into the sea?<br>
            What if humanity was compelled to conquer it?<br>
            What if you... succeeded?<br>
          </p>
          <a href="https://git.lodomo.dev/lunasea" class="project-anchor">View Source</a>
        </div>

        <div class="project-card okeska">
          <img src="/variablebootdevice.png" alt="A raspberry pi logo with the PSU logo on top of it." class="project-img">
          <h3 class="project-title">Variable Boot Device</h3>
          <p class="project-description">
            This project provides IT professionals with an open-source solution to turn a 
            Raspberry Pi into a fully functional boot device for their custom operating systems 
            while preserving the Pi’s full capabilities. Additionally, it doubles as a portable 
            flash drive, ensuring flexibility and efficiency in system deployment and maintenance.
          </p>
          <a href="https://git.lodomo.dev/vbd" class="project-anchor">In Development</a>
        </div>

      </div>
    </section>
    <section id="source-code" class="section source-code">
      <h2 class="h2 okeska">Source Code</h2>
      <div class="content okeska source-content">
        <p>Nearly all of my code is available open source.
          There are few exceptions. Code Samurai is not open source due to licensing
          agreements with the company currently running the room.<br>
          ...I lost the code to Don't Eat Poison.<br>
          <br>
          Here's the highlights:
        </p>
        <a href="https://git.lodomo.dev/bmaten" class="source-anchor">Boulder Mage</a>
        <a href="https://git.lodomo.dev/neonhaven" class="source-anchor">Neon Haven</a>
        <a href="https://git.lodomo.dev/escapewright" class="source-anchor">Escape Wright</a>
        <a href="https://git.lodomo.dev/trajorc" class="source-anchor">Trajectory Oracle</a>
        <a href="https://git.lodomo.dev/vbd" class="source-anchor">Variable Boot Device</a>
        <a href="https://git.lodomo.dev/leetcode" class="source-anchor">Leet Code History</a>
        <a href="https://git.lodomo.dev/lunasea" class="source-anchor">Luna Sea</a>
        <a href="https://git.lodomo.dev/orion" class="source-anchor">NeoVim Theme (Orion)</a>
        <a href="https://git.lodomo.dev/mern" class="source-anchor">MERN Stack Chat App</a>
        <a href="https://git.lodomo.dev" class="source-anchor">https://git.lodomo.dev</a>
      </div>
    </section>
    <section id="contact" class="section contact">
      <h2 class="h2 okeska">Contact</h2>
      <div class="content okeska contact-content">
        <p>
          I'm always looking for new opportunities to learn and grow. 
          If you have a project you think I'd be a good fit for, 
          or if you just want to chat about pixel art, please reach out!

          <ul class="contact-list">
            <li>Email: <a href="mailto:lodomo@lodomo.dev">lodomo@lodomo.dev</a>
            <li>BlueSky: <a href="https://bsky.app/profile/lodomo.dev">@lodomo.dev</a></li>
            <li>Discord: <a href="https://discord.com/users/l.d.moon">l.d.moon</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/ldmoon/">ldmoon</a></li>
          </ul>
          I do not use Meta products, Twitter/X, or any other social media.
        </p>
      </div>
    </section>
  </main>
`;document.querySelector("#footer").innerHTML=`
  <div class="footer-pad"></div>
  <div class="portrait-container">
    <div class="portrait">
      <img src="/pixel_portrait.png" alt="Portrait of Lodomo"/>
    </div>

    <div id="speech-bubble" class="speech-bubble silkscreen-regular">
      <p>Hello, I'm Lorenzo. </p>
      <p>Please, check out my projects, learn a bit about me, and connect!</p>
      <br>
      <p class="smol">Don't worry, I'm not an LLM!</p>
    </div>
  </div>
`;let s=0;function i(){document.body.style.backgroundPosition=`${-s/5}px ${s/5}px`,requestAnimationFrame(i)}window.addEventListener("scroll",()=>{s=window.scrollY});i();

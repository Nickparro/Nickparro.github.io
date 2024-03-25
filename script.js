let text = document.getElementById('text');
let background = document.getElementById('background');
let back = document.getElementById('back');
let leaf = document.getElementById('leaf');
let palmera = document.getElementById('palmera');
let arbusto = document.getElementById('arbusto');
let grass = document.getElementById('grass');


function updateAnimation() {

    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    palmera.style.left = value * -1.5 + 'px';
    back.style.top = value * 0.1 + 'px';

    requestAnimationFrame(updateAnimation);
};

updateAnimation();

const slides = [
    { 
        imgSrc: '/bank/Projects/BackOnRoad.gif',
        title: 'Back On Road',
        details: '(2024)',
        description: `It is a narrative survival horror game inspired in "Fears to Fathom" game. It was developed for the 3 days Game Jam I participated: "Roads GameJam" by Generation Colombia"; This game is in continuous development by the 4 main members of the Game Jam Team.


        - I progammed the enemy stalking mechanics, including its AI (Script and NavMesh), behavior on stage and animation states.

        - I designed and implemented the UI/UX, applying it on Menus and Gameplay.

        - I created and edited the Intro and Outro Game using the Unity Timeline Tool.

        - I was responsible on the searching and selection of Music and SFX Assets and also I succeeded in managing the workflow during the 3 Days Game Jam using Trello.
        
        `,
        link: 'https://offsetdev.itch.io/back-on-road'
    },
    {
        imgSrc: '/bank/Projects/RunErnestoRun.gif',
        title: 'Run Ernesto Run!',
        details: '(2024)',
        description: `It's an endless 2D runner created during the second and third week of the  Generation's Unity Developer Bootcamp by 4 people team as the first challenge that we decided to start.
        
        
        - I designed and implemented the enemies randomly instancing, increasing their speed and spawn intervals over time.

        - I programmed the score and high score system, also I designed the UI/UX Gameplay.

        - I managed to get an efficient coordination with new people to develop this project.
        
        `,
        link: 'https://nicoparroquiano.itch.io/run-ernesto-run'
    },
    {
        imgSrc: '/bank/Projects/NoDuckHunt.gif',
        title: 'No Duck Hunt',
        details: '(2024)',
        description: `It is a 3D videogame based on the popular arcade game "Duck Hunt" developed for the first 1 day Game Jam I participated: "Generation Colombia Cohort5: GameJam 1 Day" with the topic "no violence".
        

        - I designed the main idea and achieved coordinate with 4 people team during the 24 hours of creative work.

        - I programmed the score mechanic, implemented the animations systems and the UI/UX in less than 7 working hours.

        - I achieved to manage the version control in an optimal way. Taking care of the GitHub repository avoiding losing plenty of information at certain moments.
        
        `,
        link: 'https://camilogz.itch.io/no-duck-hunt'
    },
    {
      imgSrc: '/bank/Projects/LiteraturaVRgif.gif',
      title: 'LiteraturaVR',
      details: '(2021)',
      description: `It was my high school degree project: it's about an VR immersive experience with education proposes. It exposes the most relevant elements of the literary work "El coronel no tiene quien le escriba" by Gabriel García Márquez, where a 3D scenario recreates the environment's book.


      - I organized and led a 4 person team during the last 3 years of high school for the development of this project.

      - I designed the stage and the interactive spaces of the app using the Unity Asset Store, primary 3D objects, textures and implementing sound effects.

      - I programmed the 100% of this experience using Unity, managing control the game with the Bluetooth joystick of the VR box cardboard.

      - We achieve got honor mention as most innovate degree project at the 2021 prom.
      
      `,
      link: 'https://play.google.com/store/apps/details?id=com.CoronelFits.LITERATURAVR&hl=es_CO&gl=US'
  },
  { 
        imgSrc: '/bank/Projects/MusicalInfectionDemoGIF.gif',
        title: 'Musical Infection',
        details: '(2018)',
        description: `It was the first 2D platform game that was exposed at the Unity User Group stand in SOFA 2018 (Colombia) achieving more than 250 impressions during the event. I developed it for my own indie project "Sekhmet Games" beside my cousin Juanes Vargas. This game is in current development and theres no copy of the product published yet.


        - I organized and led a 3 members team during the 4 months of development to this demo.

        - I developed every gameplay mechanic including: Player controller, animations, enemy AI, damage and health system.

        - I implemented the level design beside my team workers and also I implemented the UI/UX.
        
        `,
        link: 'https://sekhmet-games.itch.io/musical-infection'
    },

    
    // ... add more slides as needed ...
  ];
  
  // Function to change the slide and highlight the selected icon
  function changeSlide(slideIndex) {
    const slide = slides[slideIndex];
    document.querySelector('.slide-image').src = slide.imgSrc;
    document.querySelector('.slide-description h2').innerText = slide.title;
    document.querySelector('.slide-description h3').innerText = slide.details;
    document.querySelector('.slide-description p').innerText = slide.description;
    document.querySelector('.hyperlink-icons a').href = slide.link;
    // Highlight the selected icon
    document.querySelectorAll('.icon').forEach((icon, index) => {
      if (index === slideIndex) {
        icon.classList.add('selected-icon');
      } else {
        icon.classList.remove('selected-icon');
      }
    });
  }
  
  
  // Attach click event listeners to icons
  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const slideIndex = parseInt(this.dataset.slide, 10) - 1; // -1 because array is 0-indexed
      changeSlide(slideIndex);
    });
  });

  changeSlide(0);
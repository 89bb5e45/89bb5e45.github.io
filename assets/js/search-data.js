// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "I manage a handful of long-run projects that I will share progress on here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "I maintain and contribute to several python packages and other hobby projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "I&#39;ve taught several courses at the University of Wisconsin as a teaching assistant and lecturer.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-how-i-take-notes",
      
        title: "how i take notes",
      
      description: "and why you should care",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/how-i-take-notes/";
        
      },
    },{id: "post-modeling-a-horse-race",
      
        title: "modeling a horse race",
      
      description: "abstract approaches to liberalism and conservatism",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/liberalism-conservatism/";
        
      },
    },{id: "post-a-brief-39-hello-world-39",
      
        title: "a brief &#39;hello world&#39;",
      
      description: "let&#39;s get this party started",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/hello-world/";
        
      },
    },{id: "projects-roman-civil-war-discourses",
          title: 'Roman Civil War Discourses',
          description: "Exploring the development of discourses on Sulla, Caesar, cruelty, and liberty during the Roman late-republic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/discourses/";
            },},{id: "projects-law-and-the-humanities",
          title: 'Law and the Humanities',
          description: "How the theory and practice of law intersects with humanist approaches to art and interpretation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/law_and_humanities/";
            },},{id: "projects-libreforms",
          title: 'libreforms',
          description: "Abstract and flexible open-source form management software.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/libreforms/";
            },},{id: "projects-plutarch-and-biography",
          title: 'Plutarch and Biography',
          description: "Analyzing Plutarch&#39;s Roman &#39;Civil War&#39; Lives, his sources, and his relationship with Roman political biography as a genre.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plutarch/";
            },},{id: "projects-technical-standards",
          title: 'Technical Standards',
          description: "Approaching technical standards for cutting-edge technologies that have illustrated the limitations of traditional approaches to IT governance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/standards/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

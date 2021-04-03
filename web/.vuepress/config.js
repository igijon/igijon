const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Inma Gijón",
  description: "Inma Gijón",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  themeConfig: {
    logo: "/assets/icon/logo.png",
    hostname: "https://inmagijon.netlify.app",

    author: "Inma Gijón",
    //repo: "https://github.com/igijon",

    nav: [
      { text: "Home", link: "/", icon: "home" },
      { 
        text: "Módulos", 
        link: "/modulos/", 
        icon: "study",
        items: [
          {
            text: 'DAW-Desarrollo Web en Entorno Cliente',
            icon: "javascript",
            link: "/modulos/dwec/"
          },
          {
            text: 'DAM-Sistemas de Gestión Empresarial',
            icon: "python",
            link: "/modulos/sge/"
          },
          {
            text: 'ASIR-E-Implantación de Sistemas Operativos',
            icon: "shell",
            link: "/modulos/iso/"
          }
        ]
      },
      {
        text: "Proyectos",
        link: "https://github.com/igijon",
        icon: "github",
      },
      {
        text: "Contacto",
        link: "mailto:igijoninf@cifpvirgendegracia.com",
        icon: "profile"
      }
    ],

    sidebar: {
      "/modulos/": [
        {
          title: "Modulos",
          icon: "read",
          prefix: "/modulos/",
          children: ["dwec", "sge", "iso"],
        },
      ],
    },


    blog: {
      intro: "/intro/",
      avatar: "/assets/img/avatar2.jpg",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/igijon",
        Twitter: "https://twitter.com/InmaculadaGijn1",
        Linkedin: "https://www.linkedin.com/in/inmaculada-gij%C3%B3n-cardos-38651656/"
      },
    },

    footer: {
      display: true,
      content: "Inma Gijón",
    },

    comment: {
      type: "valine",
      appId: "2vSLKb0SqFKKWEgrOPGy3sp1-gzGzoHsz",
      appKey: "vma8Ewk61WeNkI81O3CGpT2i",
    },

    copyright: true,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },
  },
});

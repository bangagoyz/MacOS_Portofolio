const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 25, 2025",
    title: "Easy Computer Vision AI Sport Exercise Trainer Using Mediapipe",
    image: "/images/computer.png",
    link: "https://medium.com/@yogapermanabudi/easy-computer-vision-ai-sport-exercise-trainer-using-mediapipe-16cba24b0fd1",
  },
  {
    id: 2,
    date: "Dec 25, 2025",
    title:
      "High-Frequency DTMF Signal Detection for Encrypted Information Transmission",
    image: "/images/encryption.png",
    link: "https://www.researchgate.net/publication/370830443_Pendeteksian_sinyal_DTMF_pada_domain_frekuensi_di_atas_standar_untuk_pengiriman_informasi_penting_menggunakan_metode_enkripsi_Caesar_Cipher_DTMF_signal_detection_in_the_above_standard_frequency_domain",
  },
];

const techStack = [
  {
    category: "AI",
    items: ["Pytorch", "YOLO", "LLM RAG", "Mediapipe"],
  },
  {
    category: "Business Apps",
    items: ["Odoo 8", "Odoo 17", "Odoo 16"],
  },
  {
    category: "Backend",
    items: ["Python", "Odoo ORM", "golang", "Node.js"],
  },

  {
    category: "Automation",
    items: ["Selenium", "BS4", "Shell"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Docker", "GitHub", "Git"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/bangagoyz",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/yogabpp__/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/yoga-budi-permana-putra-b62247256/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/kbp.jpeg",
  },
  {
    id: 2,
    img: "/images/bdg.jpeg",
  },
  {
    id: 3,
    img: "/images/vest.png",
  },
  {
    id: 4,
    img: "/images/hi.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI Trainer Using Mediapipe",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[15vh] left-20", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "AI Trainer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The AI Trainer is an AI-powered system built using MediaPipe to track body movements and count push-ups accurately in real time.",
            "Instead of manual counting, it analyzes key body landmarks to measure arm angles and detect proper excercise in this case push-up motion.",
            "Think of it like having a virtual personal trainer—watching your form, counting each rep, and keeping you honest.",
            "It’s built with Python, MediaPipe, and computer vision techniques, ensuring fast performance, real-time feedback, and reliable movement tracking.",
          ],
        },
        {
          id: 2,
          name: "AI Trainer",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/bangagoyz/mediapipe-PushUpCounter",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "push-up.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "push-up.gif",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://private-user-images.githubusercontent.com/111731378/522925209-15d1f6e8-0d59-48b3-84a5-5b994848d785.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY1MDg5ODcsIm5iZiI6MTc2NjUwODY4NywicGF0aCI6Ii8xMTE3MzEzNzgvNTIyOTI1MjA5LTE1ZDFmNmU4LTBkNTktNDhiMy04NGE1LTViOTk0ODQ4ZDc4NS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIyM1QxNjUxMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZTBiMTY1NTI4YWQxOTQ2YmQ4OWE4ODAzNWNhMjk4M2UyNGVhYjdkNjIyZDQxNTFiNjU5ODI4YWU0NDU5Y2IxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7-JLr0NhSHNXwsXZ_WvAPng1j8DJPoaAHhYOqTc-Y04",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "RAG on LLM using TiDB",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "LLM RAG TiDB",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A Retrieval-Augmented Generation (RAG) system built on DeepSeek and TiDB, designed to generate accurate, context-aware responses from structured knowledge data.",
            "Instead of relying purely on the LLM’s memory, the system ingests CSV-based knowledge, cleans and chunks the data, then converts it into vector embeddings stored inside TiDB.",
            "When a user submits a query, relevant vectors are retrieved using semantic similarity search and injected as context into DeepSeek—ensuring answers are grounded in real data, not guesses.",
            "Think of it like giving the LLM a searchable brain: TiDB acts as the long-term memory, while DeepSeek handles reasoning and natural language generation.",
            "The pipeline is implemented using Python for data processing and embedding generation, with TiDB as the vector database and DeepSeek as the inference engine.",
          ],
        },
        {
          id: 2,
          name: "RAG LLM Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/bangagoyz/LLM-RAG-With-TiDB",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "rag-llm.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "TiDB.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.pingcap.com/",
          position: "top-60 left-5",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/yoga-2.jpeg",
    },
    {
      id: 2,
      name: "mountain.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/yoga-5.jpeg",
    },
    {
      id: 3,
      name: "entirely cooked.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/yoga-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/yoga-5.jpeg",
      description: [
        "Hey! I’m Yoga 👋, a software engineer who enjoys building reliable systems and web apps that actually solve real problems.",
        "I specialize in Odoo, Python, and modern web development—and I enjoy turning complex business processes into clean, usable applications.",
        "I care a lot about clean code, scalable logic, and UX that makes sense for real users, not just developers.",
        "Outside of work, you’ll probably find me debugging late at night, experimenting with side projects, or learning something new in web, ERP, or AI 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

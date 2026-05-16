// Replace with your own details for recruiters

export const profile = {
  name: 'Saladi Shanmukha Srinivas',
  tagline: 'Full Stack Developer & Problem Solver',
  location: 'Tadepalligudem, India',
  email: 'shanmukhsrinivas47@gmail.com',
  linkedin: 'www.linkedin.com/in/saladi-shanmukha-srinivas-7430241b3',
  github: 'https://github.com/SHANMUKH-SRINIVAS',
  resumeUrl: 'https://drive.google.com/file/d/1vh6F_71m8x6sD5PwTsT8WRF0mHw_hT7w/view?usp=sharing', // link to PDF if you have one
  about: `I build clean, accessible web experiences and love turning ideas into reality. 
    I focus on performance, UX, and maintainable code. When I'm not coding, I enjoy [sports].`,
}

export const experience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Tata consultancy services',
    period: '2023 – Present',
    location: 'Varanasi, India',
    points: [
      'Built and maintained React applications used by [X] users.',
      'Improved performance and accessibility across the product suite.',
      'Collaborated with design and backend teams in an agile setup.',
    ],
  }
]

export const education = [
  {
    id: 1,
    degree: 'B.Tech / B.E. in Electronics',
    institution: 'Sri vasavi engineering college',
    period: '2019 – 2022',
    location: 'Pedatadepalli, India',
   
  },
  {
    id: 2,
    degree: 'Certification or Course',
    institution: 'Platform (e.g. Coursera, Udemy)',
    period: '2023',
    location: 'Online',
    highlights: ['Topic or key takeaway'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Expense tracker',
    description: 'React app to Manage daily Expenses, responsive UI.',
    tech: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://expense-tracker-git-main-shanmukhs-projects-e5732eeb.vercel.app/',
    repoUrl: 'https://github.com/SHANMUKH-SRINIVAS/Expense-Tracker',
    image: null, // optional: '/projects/news-app.png'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'This portfolio — single-page site with smooth scroll and sections for projects, experience, and education.',
    tech: ['React', 'Vite', 'CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/yourusername/portfolio',
    image: null,
  },
  {
    id: 3,
    title: 'GitHub Profile Serach',
    description:
      'GitHub Profile Finder: search users and view profile details, repos, stats, and API rate limits (with optional token support).',
    tech: ['React', 'Vite', 'GitHub API'],
    liveUrl: 'https://github-dev-profile-search.vercel.app/',
    repoUrl: 'https://github.com/SHANMUKH-SRINIVAS/GitHUb-DevProfile_Search',
    image: '/projects/devprofile.svg',
  },
  {
    id: 4,
    title: 'Project Three',
    description: "Short description of what it does and who it's for.",
    tech: ['React', 'Node', 'MongoDB'],
    liveUrl: 'https://your-project.com',
    repoUrl: 'https://github.com/yourusername/project-three',
    image: null,
  },
]

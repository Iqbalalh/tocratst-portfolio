import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Iqbal",
  lastName: "Alhafidzu",
  name: `Iqbal Alhafidzu`,
  role: "Software Engineer",
  avatar: "/images/iqbal.png",
  email: "iqbalalhr@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Iqbalalh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/iqbalalhr/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/iqbal.alhafidzu/",
    essential: true,
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/tocratst.png",
  label: "Home",
  title: `Tocratst`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Tocratst</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Tocratst</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/geopusaka",
  },
  subline: (
    <>
      Iqbal Alhafidzu is a Computer Science graduate from Universitas Lampung
      with a strong passion for the tech industry, particularly in Software
      Engineering, Machine Learning, and Data Science.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Iqbal Alhafidzu is a Computer Science graduate from Universitas Lampung
        with a strong passion for the tech industry, particularly in Software
        Engineering, Machine Learning, and Data Science.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Yayasan Pusaka KAI",
        timeframe: "Aug 2025 – Jan 2026",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Achieved 100% data consistency across 1,000+ beneficiary records by
            building a centralized information system, which eliminated the 2%
            discrepancy rate previously found between departments (Next.js,
            Node.js, PostgreSQL).
          </>,
          <>
            Reduced data retrieval time from several minutes to just seconds by
            developing a web-based mapping application and an integrated
            documentation gallery (React.js).
          </>,
          <>
            Ensured high system reliability and 99.9% uptime by managing cloud
            infrastructure and server operations to support the organization's
            digital platforms (AWS RDS, S3, Docker, VPS, Nginx).
          </>,
          <>
            Improved organic visibility by moving the average SEO position from
            10 to 3 and more than doubling the CTR from 4.2% to 9.3% through
            strategic domain migration and search engine optimization (Google
            Search Console).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/ypkai/1.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/ypkai/2.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ganesha Operation",
        timeframe: "Jan 2025 – Nov 2025",
        role: "Informatics Tutor",
        achievements: [
          <>
            Educated over 800 students across elementary, junior, and senior
            high school levels by delivering direct in-class instruction on core
            computer science and informatics concepts.
          </>,
          <>
            Analyzed and solved over 1,000 informatics problems for various
            educational levels by designing tiered lesson plans tailored to each
            student's learning stage.
          </>,
          <>
            Increased the frequency of perfect scores by 25% in both exams and
            assignments by providing intensive personalized guidance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/go/2.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/go/1.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Educourse.id",
        timeframe: "Feb 2024 – Jun 2024",
        role: "Full Stack Engineer (Intern)",
        achievements: [
          <>
            Engineered the akademikerja.id platform to facilitate job market
            connectivity by implementing robust account authentication, secure
            document uploads, and streamlined application workflows, resulting in
            a more efficient and secure user experience (Next.js, MongoDB, S3).
          </>,
          <>
            Managed and optimized over 10 integrated web applications within
            the Maleo Group ecosystem, ensuring consistent high performance,
            99.9% system uptime, and seamless scalability across all platforms
            (React.js).
          </>,
        ],
        images: [
          {
            src: "/images/projects/educourse/2.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/educourse/1.jpg",
            alt: "YPKAI",
            width: 10,
            height: 9,
          },
        ],
      },
      {
        company: "Polda Lampung",
        timeframe: "Dec 2023 – Feb 2024",
        role: "Full Stack Engineer (Intern)",
        achievements: [
          <>
            Developed a clone police news portal to facilitate the delivery of
            verified public information, featuring a dynamic content management
            system (CMS) that enables real-time news publishing and
            administrative control (Laravel, React.js, PostgreSQL).
          </>,
          <>
            Strengthened Polda Lampung's digital presence by producing social
            media content for Instagram and TikTok and providing technical
            support for live press conference coverage to ensure seamless public
            communication.
          </>,
        ],
        images: [
          {
            src: "/images/projects/polda/2.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/polda/1.jpg",
            alt: "YPKAI",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lampung University",
        description: <>Bachelor of Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Software Engineer",
        description: (
          <>
            Build dynamic and scalable web applications using modern frameworks
            and technologies.
          </>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React.js",
            icon: "reactjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Cloud Infrastructure",
        description: (
          <>
            Manage scalable and secure cloud infrastructure with AWS and
            containerization technologies.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "AWS EC2",
            icon: "ec2",
          },
          {
            name: "AWS RDS",
            icon: "rds",
          },
          {
            name: "AWS S3",
            icon: "s3",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Nginx",
            icon: "nginx",
          },
          {
            name: "VPS",
            icon: "server",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/yp-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ed-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/yp-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ed-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/po-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/po-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/go-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/go-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/go-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/go-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

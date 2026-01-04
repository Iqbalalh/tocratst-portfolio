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
      I'm Iqbal, an engineer who creates simple, effective solutions for complex
      challenges. After hours, I explore the worlds of science and technology to
      fuel my passion for learning and building.
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
        timeframe: "Aug 2025 - Nov 2025",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Developed the GEOPUSAKA application, a crucial geo-mapping tool
            providing critical family and UMKM information, alongside navigation
            features to optimize the Foundation's programs.
          </>,
          <>
            Engineered a centralized database system that integrated and
            synchronized all data across various Foundation divisions, achieving
            100% data consistency and eliminating previous discrepancies.
          </>,
          <>
            Architected NAYAPUSAKA backend application, that serve as a central,
            scalable infrastructure for future development and deployment of the
            Foundation’s applications.
          </>,
          <>
            Led the domain migration and SEO acquisition strategy for
            yayasanpusakakai.org, resulting in the #1 organic ranking for
            branded keywords "Yayasan Pusaka KAI" and successfully executing the
            technical de-indexing of the legacy domain.
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
        timeframe: "Jan 2025 - Nov 2025",
        role: "Informatics Tutor",
        achievements: [
          <>
            Taught Informatics to elementary, junior, and senior high school
            students, designing lessons tailored to each learning stage to
            introduce core computer science and informatics concepts.
          </>,
          <>
            Provided over 70 hours of intensive personalized guidance (TST),
            resulting in more than 80% of students achieving scores above 80 in
            Informatics.
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
        timeframe: "Feb 2024 - Jun 2024",
        role: "Full Stack Engineer (Intern)",
        achievements: [
          <>
            Engineered the akademikerja.id platform to facilitate job market
            connectivity, focusing on implementing key features such as robust
            account authentication, secure document upload capabilities, and
            optimized job application workflows for an enhanced user
            experiences.
          </>,
          <>
            Maintained and optimized multiple web applications within the Maleo
            Group ecosystem, ensuring high performance, scalability, and a
            consistent user experience.
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
        timeframe: "Dec 2023 - Feb 2024",
        role: "Full Stack Engineer (Intern)",
        achievements: [
          <>
            Developed a Tribratanews clone, a police news portal designed to
            deliver accurate and trustworthy public information, featuring
            dynamic news browsing, article reading, and an admin dashboard for
            content management.
          </>,
          <>
            Assisted in creating social media content for Instagram and TikTok,
            and supported live press conference coverage within Polda Lampung.
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
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>
            Build dynamic and scalable web applications using Next.js //
            React.js.
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
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Node.js",
        description: (
          <>
            Building secure and maintainable backend applications with Node.js
            // Express.js.
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
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Amazon Web Services (AWS)",
        description: (
          <>
            Managing scalable and secure cloud infrastructure with AWS EC2, S3,
            and RDS.
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

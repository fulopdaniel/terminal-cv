import React from "react";
import css from "./Commands.module.scss";

export const COMMAND_LIST = {
  clear: ["clr", "clear", "reset"],
  help: ["cv", "cv help", "cv -h", "cv --help"],
  profile: ["cv --profile", "cv -p"],
  experience: ["cv --experience", "cv -e"],
  education: ["cv --education", "cv -ed"],
  publications: ["cv --publications", "cv -pub"],
  contact: ["cv --contact", "cv -c"],
  projects: ["cv --projects", "cv -pr"],
};

export const NotFound = (command: string) => <span>command '{command}' not found</span>;

export const HELP_COMMAND = (
  <span>{`
Available command list:

Usage:  cv [option]
Example: cv --help

Options:
 --help | -h                List of available commands
 --profile | -p             Short introduction
 --experience | -e          Employment history
 --education | -ed          Education history
 --publications | -pub      Published articles and packages
 --projects | -pr           Side Projects
 --contact | -c             Contact informations

(use 'clear' to clear the window)

`}</span>
);

export const CONTACT_COMMAND = (
  <span>
    {`Contact:

Email: `}
    <a className={css.link} href="mailto:fulop.dani96@gmail.com">
      fulop.dani96@gmail.com
    </a>
    {`

Linkedin: `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/f%C3%BCl%C3%B6p-d%C3%A1niel-042729130/"
    >
      Daniel Fulop
    </a>
    {`

Github: `}
    <a className={css.link} target="_blank" rel="noopener noreferrer" href="https://github.com/fulopdaniel">
      fulopdaniel
    </a>
    {`

`}
  </span>
);

export const PROFILE_COMMAND = (
  <span>{`Profile:

Hi, my name is Daniel Fulop. I am a passionate T-shaped developer specializing in frontend engineering, who is always looking for new challenges to solve. I love creating interactive, spectacular interfaces, and engaging, immersive user experiences. I consider myself proficient in Typescript, HTML, CSS, and the modern javascript frameworks. I'm a good teamplayer, but I aim to take responsibility, and own things whenever I can.

`}</span>
);

export const EDUCATION_COMMAND = (
  <span>{`Education:

Budapest University of Technology and Economics       2014-2018
Electrical Engineering and Informatics (BSc)

`}</span>
);

export const PUBLICATIONS_COMMAND = (
  <span>
    {`Publications:

Medium.com:
• `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://medium.com/@flpdniel/translate-your-react-app-using-a-database-extract-store-display-485828f5b5a6"
    >
      Translations in React
    </a>
    {`
• `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://medium.com/@flpdniel/how-to-upload-binary-files-to-s3-using-react-aws-lambda-and-nodejs-2183c6a748d1"
    >
      Upload files to AWS S3
    </a>
    {`

NPM:
• `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.npmjs.com/package/react-carousel-dots"
    >
      react-carousel-dots
    </a>
    {`

`}
  </span>
);

export const PROJECTS_COMMAND = (
  <span>
    {`Projects:
• `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://remotextra.com"
    >
      remotextra.com
    </a>
    {`
• `}
    <a
      className={css.link}
      target="_blank"
      rel="noopener noreferrer"
      href="https://productlist.io"
    >
      productlist.io
    </a>
    {`
`}
  </span>
);

export const EXPERIENCE_COMMAND = (
  <span>{`Experience:

Junior web developer @ LogiNet Systems     Jun 2017 - Mar 2018

Responsibilities:
•  Created, and maintained web applications for clients in Symfony

====================================================

Full stack developer @ Trekhunt            Mar 2018 - Jan 2019

Responsibilities:
 •  Built the site from scratch in React / Next.js
 •  Translated Zeplin designs into code
 •  Separated the frontend application into micro frontends
 •  Created microservices using AWS lambda functions with Node.js
 •  Streamed, indexed, and consumed data using ElasticSearch
 •  Wrote web crawlers in Python
 •  Implemented authentication with JWT tokens

====================================================

 Front end developer @ Betsson Group       Jan 2019 - Jan 2021

Responsibilities:
 •  Developed new features for an international project
 •  Used Angular 8 with RxJs, NgRx, Typescript
 •  Wrote unit tests with Jest
 •  Maintained the application, migrated legacy code
 •  Coordinated the release process multiple times
 •  Communicated with PO's about potential issues and solutions
 •  Helped newcomers with onboarding, was assigned mentor

 ====================================================

 Senior Full Stack developer @ TCS       Jan 2021 - Present

Responsibilities:
•  Translating client needs into Next.js applications
•  Meeting with stakeholders, leading processes, mentoring teammates
•  Maintaining company landing pages
•  Migrating legacy codebase to typescript

`}</span>
);

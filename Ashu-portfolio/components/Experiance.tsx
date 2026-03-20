import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
const Experiance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5  overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Card
            companyLogo='https://media.licdn.com/dms/image/v2/D4E0BAQGKKiO1uDjg8Q/company-logo_200_200/company-logo_200_200/0/1736147078965/openxcell_logo?e=2147483647&v=beta&t=KRvPDn-zSGGc0tU2YzEfrn2Tk2OUkQcjblsBA-Vq_s4'
            companyName='OpenXcell'
            position='Software Engineer'
            startDate='01/03/2025'
            endDate='Present'
            summaryPoints={[
              "Developing and maintaining responsive web applications using React.js, Next.js, and Tailwind CSS.",
              "Collaborating with cross-functional teams to design and implement user-friendly interfaces.",
            ]}
            skillsImgs={[
              './images/react.png',
              './images/nextjs.png',
              './images/tailwindcss.jfif',
              './images/ts.png',
              './images/js.jfif',
              './images/mui.png'
            ]}
          />
        <Card
          companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-nb2x5Xx6ZT_HS2bGBSNJ3NHugPtGYlc2g&s"
          companyName="Brainvire Infotech Inc."
          position="Software engineer"
          startDate="21/11/2022"
          endDate="present"
          summaryPoints={[
            "Joined as a trainee and learn morden web development technologies",
            "Working as a frontend react.js and next.js developer",
          ]}
          skillsImgs={[
            "./images/react.png",
            "./images/nextjs.png",
            "./images/redux.png",
            "./images/graphql.png",
            "./images/js.jfif",
            "./images/ts.png",
            "./images/tailwindcss.jfif",
          ]}
        />
        <Card
          companyLogo="https://media.licdn.com/dms/image/v2/D4D0BAQGOtyv-p4NAxA/company-logo_200_200/company-logo_200_200/0/1686313580560/iboon_technologies_logo?e=2147483647&v=beta&t=7zD69q1QhEZKwNT_0-HnEUiQqMGsg3nX8ocujTsPNKw"
          companyName="iBoon Technologies"
          position="Web Developer"
          startDate="11/04/2022"
          endDate="11/11/2022"
          summaryPoints={[
            "Learn PHP as a backend language to enhance my web development skills",
            "Expand my WordPress expertise by creating multiple websites and developing custom plugins and themes.",
          ]}
          skillsImgs={[
            "/images/html.png",
            "/images/css.png",
            "./images/js.jfif",
            "/images/wordpress.jfif",
            "./images/php.png",
          ]}
        />
        <Card
          companyLogo="https://media.licdn.com/dms/image/v2/C4E0BAQHR9SXd8wrMLw/company-logo_200_200/company-logo_200_200/0/1630621085102/techneos_solutions_logo?e=2147483647&v=beta&t=ivCZmPwiLZ-LEKi-FS_H_R91QCo2y97IqmZV8U66-kM"
          companyName="TechNEOS Solutions Pvt Ltd"
          position="Web Developer intern"
          startDate="06/01/2022"
          endDate="06/04/2022"
          summaryPoints={[
            "Learn web development with HTML, CSS, and WordPress.",
            "Develop responsive websites using the WordPress CMS.",
          ]}
          skillsImgs={[
            "/images/html.png",
            "/images/css.png",
            "/images/wordpress.jfif",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Experiance;

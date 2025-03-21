import Section from "@/components/global/Section";
import profile1 from "@/assets/images/profile1.png";
import AnimatedText from "@/components/global/ScrollFadeParagraph";
import HugeiconsUniversity from "@/assets/icons/HugeiconsUniversity";
import { motion } from "framer-motion";

const aboutText = `
Hii, I am Akshat Kumar Jain, a highly skilled MERN Stack Developer with a strong foundation in Java Full Stack Development. I specialize in building dynamic, responsive, and user-friendly web applications, leveraging MongoDB, Express.js, React.js, and Node.js to craft seamless full-stack solutions.Beyond MERN, I have mastery in Java and actively work on Java Full Stack Development, bringing efficiency and scalability to backend systems. My expertise extends to C and C++, along with a deep understanding of Data Structures and Algorithms (DSA), ensuring optimized and performance-driven code.On the frontend, I create visually appealing and efficient designs using JavaScript, Tailwind CSS, HTML, and CSS, and Bootstrap focusing on modern UI/UX principles. Always eager to solve complex problems, I continuously refine my skills and explore innovative technologies.Aspiring for great opportunities where I can contribute my expertise, learn, and grow in a challenging environment. 
`;

const AboutSection = () => {
  return (
    <Section className="relative py-8 mt-6 pt-24">
      <h1 className="block text-center mb-4">About me</h1>
      <div className="flex max-mobile-lg:flex-col-reverse justify-start items-stretch gap-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-primary/5 border border-border rounded-lg p-4"
        >
          <AnimatedText
            wordClass=" text-xl max-mobile-lg:!text-lg"
            motionClass="text-primary !text-xl max-mobile-lg:!text-lg"
            text={aboutText}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-card flex flex-col max-mobile-lg:flex-row gap-2 rounded-lg p-4 border border-border"
        >
          <div className="w-60 h-60 mx-auto max-md:flex max-md:justify-center">
            <img
              src={profile1}
              alt="akshat"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="py-5 mt-10">
        <h1 className="py-2 text-center">Education</h1>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex max-mobile-lg:flex-col justify-between bg-card p-4 mb-3 border border-border rounded-lg"
        >
          <div className="flex gap-2">
            <div className="border-l-4 border-primary pl-2">
              <h3>B.Tech in Computer Science Engineering</h3>
              <span className="flex items-center gap-2">
                <HugeiconsUniversity /> Gandhi Engineering College, Bhubaneswar
              </span>
            </div>
          </div>
          <div className="max-mobile-lg:mt-2">
            <span>2022 - present</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex max-mobile-lg:flex-col justify-between bg-card mb-3 p-4 border border-border rounded-lg"
        >
          <div className="flex gap-2">
            <div className="border-l-4 border-primary pl-2">
              <h3>Intermediate</h3>
              <span className="flex items-center gap-2">
                <HugeiconsUniversity /> Sri Chaitanya Techno School,
                Visakhapatnam
              </span>
            </div>
          </div>
          <div className="max-mobile-lg:mt-2">
            <span>2019 - 2021</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="flex max-mobile-lg:flex-col justify-between bg-card p-4 border border-border rounded-lg"
        >
          <div className="flex gap-2">
            <div className="border-l-4 border-primary pl-2">
              <h3>Matriculation</h3>
              <span className="flex items-center gap-2">
                <HugeiconsUniversity /> Odisha Adarsha Vidyalaya, Timanpur
              </span>
            </div>
          </div>
          <div className="max-mobile-lg:mt-2">
            <span>2018 - 2019</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 inset-0 blur-[120px] -z-10">
        <div
          style={{
            clipPath:
              "polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)",
          }}
          className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
        />
      </div>
    </Section>
  );
};

export default AboutSection;

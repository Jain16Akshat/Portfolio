import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/global/Section";
import { ExternalLink } from "lucide-react"; 

import leetcode from "../../assets/icons/skill/leetcode.svg";
import gfg from "../../assets/icons/skill/gfg.svg";
import hackerrank from "../../assets/icons/skill/hackerrank.svg";

const codingPlatforms = [
    { name: "GeeksforGeeks", logo: gfg, link: "https://www.geeksforgeeks.org/user/akshatjagm7w/" },
    { name: "LeetCode", logo: leetcode, link: "https://leetcode.com/u/akshatjain1601/" },
    { name: "HackerRank", logo: hackerrank, link: "https://www.hackerrank.com/profile/akshatjain1601" },
];

const CodingPlatform = () => {
    return (
        <Section className="flex flex-col gap-6 p-11 border-y border-border text-center">
            <h2 className="block text-center mb-6">Coding Platforms</h2>
            <div className="flex flex-wrap justify-center items-center gap-20 max-md:flex-col">
                {codingPlatforms.map((platform, index) => (
                    <motion.a
                        key={platform.name}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: index === 0 ? -200 : index === 2 ? 200 : 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="flex flex-col items-center gap-2 group no-underline"
                    >
                        <motion.img
                            src={platform.logo}
                            alt={platform.name}
                            className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="text-primary flex items-center gap-1 text-lg font-semibold ">
                            {platform.name}
                            <ExternalLink size={16} className="group-hover:text-primary transition-colors" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </Section>
    );
};

export default CodingPlatform;

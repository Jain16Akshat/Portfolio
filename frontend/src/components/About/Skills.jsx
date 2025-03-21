import { motion } from 'framer-motion';
import TablerBrandRedux from '../../assets/icons/TablerBrandRedux';
import NoniconsReact16 from '../../assets/icons/NoniconsReact16';
import PhFileJsBold from '../../assets/icons/PhFileJsBold';
import TeenyiconsTailwindSolid from '../../assets/icons/TeenyiconsTailwindSolid';
import NoniconsNode16 from '../../assets/icons/NoniconsNode16';
import SimpleIconsExpress from '../../assets/icons/SimpleIconsExpress';
import SimpleIconsMongodb from '../../assets/icons/SimpleIconsMongodb';
import MingcuteVscodeFill from '../../assets/icons/MingcuteVscodeFill';
import DeviconPlainPostman from '../../assets/icons/DeviconPlainPostman';
import TeenyiconsGitSolid from '../../assets/icons/TeenyiconsGitSolid';
import HugeiconsGithub from '../../assets/icons/HugeiconsGithub';
import DeviconPlainJava from '../../assets/icons/DeviconPlainJava';
import DeviconPlainC from '../../assets/icons/DeviconPlainC';
import DeviconPlainCpp from '../../assets/icons/DeviconPlainCpp';
import DeviconPlainHtml from '../../assets/icons/DeviconPlainHtml';
import DeviconPlainCss from '../../assets/icons/DeviconPlainCss';
import DeviconPlainBootstrap from '../../assets/icons/DeviconPlainBootstrap';
import DeviconPlainMysql from '../../assets/icons/DeviconPlainMysql';

const Skills = () => {
    const categories = {
        language: [
            { icon: DeviconPlainJava, name: 'Java' },
            { icon: DeviconPlainC, name: 'C' },
            { icon: DeviconPlainCpp, name: 'C++' },
            { icon: PhFileJsBold, name: 'JavaScript' },
        ],
        frontend: [
            { icon: DeviconPlainHtml , name: 'HTML' },
            { icon: DeviconPlainCss, name: 'CSS' },
            { icon: DeviconPlainBootstrap, name: 'Bootstrap' },
            { icon: TeenyiconsTailwindSolid, name: 'Tailwind CSS' },
            { icon: NoniconsReact16, name: 'React JS' },
            { icon: TablerBrandRedux, name: 'Redux' },
        ],
        backend: [
            { icon: NoniconsNode16, name: 'Node JS' },
            { icon: SimpleIconsExpress, name: 'Express JS' },
            { icon: DeviconPlainMysql, name: 'MySQL' },
            { icon: SimpleIconsMongodb, name: 'MongoDB' },
        ],
        tools: [
            { icon: MingcuteVscodeFill, name: 'VsCode' },
            { icon: DeviconPlainPostman, name: 'Postman' },
            { icon: TeenyiconsGitSolid, name: 'Git' },
            { icon: HugeiconsGithub, name: 'Github' },
        ],
        // others: [{ icon: UiwLinux, name: 'Linux' }],
    };

    return (
        <div className="flex flex-col gap-6 p-4 overflow-hidden">
            {Object.entries(categories).map(([category, skills]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl font-semibold mb-3 capitalize">{category}</h2>
                    <div className="flex flex-wrap justify-start items-center gap-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1, // Cascading effect
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: false }}
                                className="bg-secondary text-secondary-foreground text-2xl py-2 px-3 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg"
                            >
                                <skill.icon />
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;

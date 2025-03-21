import React from 'react';
import Section from '@/components/global/Section';
import Skills from '@/components/About/Skills';

const SkillSection = () => {
    return (
        <Section className="relative py-10 pt-24">
            <div className="text-center w-4/6 mx-auto max-tablet-lg:w-full">
                <h1>My Skills</h1>
                <p>
                    My expertise spans across frontend and backend development. I am passionate about solving
                    complex problems and delivering high-quality solutions.
                </p>
            </div>
            <div className="flex">
                <div>
                    <Skills />
                </div>
            </div>

            {/* Gradient Blur Effect */}
            <div className="absolute top-0 inset-0 blur-[120px] -z-10">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                    }}
                    className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
                />
            </div>
        </Section>
    );
};

export default SkillSection;

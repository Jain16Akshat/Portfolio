import React from 'react';
import { Button } from '../ui/button';

export default function NavMenu() {
    const links = [
        { link: '#home', name: 'Home' },
        { link: '#about', name: 'About' },
        { link: '#skills', name: 'Skills' },
        { link: '#projects', name: 'Projects' },
        {link: '#certifications', name: 'Certifications'},
        { link: '#contact', name: 'Contact' },
    ];

    // Function to handle smooth scrolling
    const handleScroll = (e, href) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.querySelector(href); // Find the section by ID
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };

    return (
        <div className="flex items-center max-tablet-lg:flex-col">
            {links.map(link => (
                <a href={link.link} key={link.name} onClick={e => handleScroll(e, link.link)}>
                    <Button variant="ghost" className="max-tablet-lg:text-start">
                        {link.name}
                    </Button>
                </a>
            ))}
        </div>
    );
}

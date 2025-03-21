import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from './ThemeContext'; // Ensure correct import

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'hidden' : 'block'}`} />
                    <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'block' : 'hidden'}`} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

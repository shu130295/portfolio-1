import { useEffect, useState } from 'react';
import { NavItem } from './NavItem';

export const NavBar = () => {
    const [activeNavItem, setActiveNavItem] = useState<string>("");
    const element = document.getElementById(activeNavItem)!;
    
    useEffect(() => {
        const newElement = document.getElementById(activeNavItem);
        if(newElement) {
            newElement.classList.add('active');
        }
    }, [activeNavItem]);

    const activeItem = (id: string) => {
        if(!element) {
            return null;
        }
        if(activeNavItem.length>0) {
            element.classList.remove('active');
        }
        setActiveNavItem(id);
    }

    return (
        <nav>
            <ul>
                <NavItem item="Home" tolink="/" activeItem={activeItem}></NavItem>
                <NavItem item="About" tolink="/about" activeItem={activeItem}></NavItem>
                <NavItem item="Education" tolink="/education" activeItem={activeItem}></NavItem>
                <NavItem item="Skills" tolink="/skills" activeItem={activeItem}></NavItem>
                <NavItem item="Contact" tolink="/contact" activeItem={activeItem}></NavItem>
            </ul>
        </nav>
    )
}
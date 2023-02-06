import React from 'react';
import { SiBloglovin } from 'react-icons/si';
function Header(props) {
    return (
        <header className='flex justify-between text-xl items-center p-4'>
            <div className='flex items-center text-accent'>
            <SiBloglovin/>
            <h1>Log</h1>
            </div>
            <ul className='flex gap-4 text-lg'>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

export default Header;
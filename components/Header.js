import React from 'react';

const Header = () => {
    return (
            <div className="header-wrapper">
            <header className="header">
                <div className="logo">
                    <h1 className="text-white">Escape.</h1>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li className="text-white">HOME</li>
                        <li className="text-white">CATEGORIES</li>
                        <li className="text-white">ABOUT</li>
                        <li className="text-white">CONTACT</li>
                    </ul>
                </nav>
            </header>
            <div className="hero" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/02/24/20/55/cards-8594729_1280.jpg')" }}>
                <h2 className="text-white">CardNews - for 답다.</h2>
                <p className="text-white">Discover captivating stories from around the globe, one card at a time.</p>
                <button className="view-latest text-white">View Latest Posts</button>
            </div>
            <nav className="category-nav">
                <ul>
                    <li>Nature</li>
                    <li>Photography</li>
                    <li>Relaxation</li>
                    <li>Vacation</li>
                    <li>Travel</li>
                    <li>Adventure</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

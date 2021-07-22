import React from 'react';
import HeaderCrawlingA from './header/HeaderCrawlingA'

const Header = () => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
                <div className="container-fluid d-grid gap-3 align-items-center" style={{"gridTemplateColumns": "1fr 2fr"}}>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><HeaderCrawlingA/></li>
                        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
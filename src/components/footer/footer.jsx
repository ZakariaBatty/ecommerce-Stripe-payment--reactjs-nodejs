import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            {year} © ZAKARIA-BATTY Store
        </div>
    )
}

export default Footer

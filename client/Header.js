import React from 'react';

function Header (props) {
    const headerArray = ['Best Sellers', 'Customer Service', 'Today\'s Deals', 'New Releases','Find a Gift', 'Registry', 'Gift Cards', 'FarmazonBasics', 'Sell', 'Coupons'];

    return (
        <div className="header_all">
            <div className="header_bar">
                {headerArray.map((words, index) => (
                    <a key={index} className={'headerItem'}> {words} </a>
                ))}
            </div>
        </div>
    )
}

export default Header;
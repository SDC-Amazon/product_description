import React from 'react';

function Header (props) {
    const headerArray = ['Best Sellers', 'Customer Service', 'Today\'s Deals', 'New Releases','Find a Gift', 'Registry', 'Gift Cards', 'FarmazonBasics', 'Sell', 'Coupons'];

    return (
        <div className="header_all">
            <div className="header_left">
                <div className="deliver_image"></div>
                {/* <span className="location"> </span>
                <span className="deliver_to"> Deliver to </span>
                <span className="hack_reactor"> Hack Reactor 78701 </span> */}
            </div>
            <div className="header_bar">
                {headerArray.map((words, index) => (
                        <p key={index} className={'headerItem'}> {words} </p>
                    ))}
            </div>
        </div>
    )
}

export default Header;
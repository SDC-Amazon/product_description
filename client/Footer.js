import React from 'react';

function Footer (props) {
    const clickables = [
        ['Get to Known Us', 'Careers', 'Blog', 'About Amishon', 'Press Center', 'Investor Relations', 'Amishon Devices', 'Amishon Tours'],
        ['Make Money with Us', 'Sell on Amishon','Sell Under Amishon Accelerator', 'Sell on Amishon Handmade', 'Sell your Services on Amishon', 'Sell on Amishon Business',  'Sell Your Apps on Amishon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with  Us', '> See More'],
        ['Amishon Payment Products', 'Amishon Rewards Visa Signature Cards', 'Amishon.com Store Card', 'Amishon Business Card', 'Amishon.com Corporate Credit Line', 'Shop with Points', 'Credit Card Marketplace', 'Reload Your Balance', 'Amishon Currency Converter'],
        ['Let Us Help You', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Amishon Prime', 'Returns & Replacements', 'Manage Your Content and Devices', 'Amishon Assistant', 'Help']
    ]  
    
    return (
        <div className="footer_all">
            <span className="back_to_top">
                Back to top
            </span>
            <div id='joel_sucks'>
                {clickables.map((currentValue, index, array)=> (
                    <ul key={index} id={`row${index}`} className={'row'}> {array[index].map((value, i )=> (
                        <li key={value} id={`header_${i}`} className={'header'}> {value}</li> 
                    ))}
                    </ul>
                ))}
            </div>
            <div className="footer_line"></div>
            <div className="footer_base">
                
                <span className="footer_logo"> </span>
            </div>
        </div>
    )
}

export default Footer;
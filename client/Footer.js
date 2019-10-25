import React from 'react';

function Footer (props) {
    const clickables = [
        ['Get to Known Us', 'Careers', 'Blog', 'About Farmazon', 'Press Center', 'Investor Relations', 'Farmazon Devices', 'Farmazon Tours'],
        ['Make Money with Us', 'Sell on Farmazon','Sell Under Farmazon Accelerator', 'Sell on Farmazon Handmade', 'Sell your Services on Farmazon', 'Sell on Farmazon Business',  'Sell Your Apps on Farmazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with  Us', '> See More'],
        ['Farmazon Payment Products', 'Farmazon Rewards Visa Signature Cards', 'Farmazon.com Store Card', 'Farmazon Business Card', 'Farmazon.com Corporate Credit Line', 'Shop with Points', 'Credit Card Marketplace', 'Reload Your Balance', 'Farmazon Currency Converter'],
        ['Let Us Help You', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Farmazon Prime', 'Returns & Replacements', 'Manage Your Content and Devices', 'Farmazon Assistant', 'Help']
    ]  
    
    return (
        <div className="footer_all">
            <span className="back_to_top">
                Back to top
            </span>
            <div id='footer_bar'>
                {clickables.map((currentValue, index)=> (
                    <ul key={index} id={`row${index}`} className={'row'}> {currentValue.map((value, i )=> (
                        <li key={value} id={`header_${i}`} className={'header'}> {value}</li> 
                    ))}
                    </ul>
                ))}
            </div>
            <div className="footer_line"></div>
            <div className="footer_base">
                <img className="footer_logo" src="https://farmingshon.s3.us-east-2.amazonaws.com/Farmazon.png"></img>
                
            </div>
        </div>
    )
}

export default Footer;
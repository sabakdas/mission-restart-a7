import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faSquareXTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-black'>
                 <div className='w-11/12 mx-auto text-gray-500'>
                <div className=' grid grid-cols-5 gap-10 py-10'>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-white'>CS — Ticket System</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-white'>Company</h1>
                        <p>About Us</p>
                        <p>Our Mission</p>
                        <p>Contact Saled</p>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-white'>Services</h1>
                        <p>Products & Services</p>
                        <p>Customer Stories</p>
                        <p>Download Apps</p>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-white'>Information</h1>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Join Us</p>
                        
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-white'>Social Links</h1>
                        <p><FontAwesomeIcon icon={faSquareFacebook} className='text-white'/> @CS — Ticket System</p>
                        <p><FontAwesomeIcon icon={faSquareXTwitter} className='text-white'/> @CS — Ticket System</p>
                        <p><FontAwesomeIcon icon={faLinkedin} className='text-white'/> @CS — Ticket System</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className='text-white'/> support@cst.com</p>
                    </div>
                </div>

                <hr />

                <p className='py-5 text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        </div>
       
       
    );
};

export default Footer;
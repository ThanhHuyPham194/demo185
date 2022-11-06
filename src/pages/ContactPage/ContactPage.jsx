import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import Footer from '../../components/Footer/Footer';

import './ContactPage.scss';
export default function ContactPage() {

    return (
        <div className='contactPage'>
            <div className="contactPage__wrapper">
                <ContactItem />
            </div>
            <Footer />
        </div>
    );
}

import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contacts'} span={'Contacts'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.8688562033776!2d-98.48331209999999!3d29.4618396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c61995bf8bac5%3A0x15695af613b9989b!2sTrinity%20University!5e0!3m2!1sen!2sus!4v1622521652291!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+1 (361)-739-6315'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'bpotter@trinity.edu'} text2={'brendanpotter00@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'1 Trinity Pl San Antonio, Tx'} text2={'United States'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

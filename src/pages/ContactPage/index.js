import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

class ContactPage extends React.Component {
 render() {
    return(<div>
        <Navigation/>
        <Contact/>
        <Footer/>
        </div>
    )
 }
}

export default ContactPage
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import About from '../../components/About';
import Summary from '../../components/Summary';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

class HomePage extends React.Component {
 render() {
    return(<div>
    
        <Main/>
        <About/>
        <Summary/>
        <Projects/>
        <Contact/>
        
        </div>
    )
 }
}

export default HomePage
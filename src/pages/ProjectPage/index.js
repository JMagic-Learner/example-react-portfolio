import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';


class ProjectPage extends React.Component {
 render() {
    return(<div>
        <Navigation/>
        <Projects/>
        <Footer/>
        </div>
    )
 }
}

export default ProjectPage
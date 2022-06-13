import React from 'react'
import DeveloperDesign from '../../assets/images/developerdesign.svg'
import ResponsiveDesign from '../../assets/images/responsivedesign.svg'
import InnovativeSolutions from "../../assets/images/innovativesolutions.svg"
import Passion from "../../assets/images/passion.svg"
class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            HTMLarray1:[
                {
                title: "Development and Design",
                description: "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.",
                divName1: "summary-column",
                divName2: "development-img",
                divName3: "development-description",
                imageSource:DeveloperDesign
                },
                {
                    title: "Responsive Layouts",
                    description: "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.",
                    divName1: "responsive-summary",
                    divName2: "responsive-img",
                    divName3: "responsive-description",
                    imageSource:ResponsiveDesign
                }

            ]
        }
    }
    render() {
        return(<div className = "summary">
        <div className = "container-fluid">
        <div className = "row">
        {this.state.HTMLarray1.map((items) =>{
            return(
                <div className = {items.divName1}>
                <div className = "row">
                <div className = "col-sm-1 col-md-1">
                    <div className = {items.divName2}>
                        <img className = "img-responsive"  src = {items.imageSource}/>
                    </div>
                </div>

                <div className = "col-sm-4 col-md-4">
                    <div className = {items.divName3}>
                        <h3>{items.title}</h3>
                        <p> {items.description}</p>
                    </div>
                </div>
            </div>
            </div>
            )
        })}
        </div> 
        {/* <div className = "row">
            <div className = "summary-column">
                <div className = "row">
                    <div className = "col-sm-1 col-md-1">
                        <div className = "development-img">
                            <img className = "img-responsive"  src = {DeveloperDesign}/>
                        </div>
                    </div>

                    <div className = "col-sm-4 col-md-4">
                        <div className = "development-description">
                            <h3>Development and Design</h3>
                            <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
                        </div>
                    </div>
                </div>
                </div>
            
                <div className = "responsive-summary">
                <div className = "row">
                    <div className = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
                        <div className = "responsive-img">
                            <img className = "img-responsive" src = {ResponsiveDesign}/>
                        </div>
                    </div>

                     <div className = "col-sm-4 col-md-4">
                        <div className = "responsive-description">
                            <h3>Responsive Layouts</h3>
                            <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
                        </div>
                    </div>
                    </div>
                </div>
            
        
        
        
        </div> */}

        <div className = "row">
        <div className = "passion-summary">
                <div className = "row">
                    <div className = "col-sm-1 col-md-1">
                        <div className = "development-img">
                        <img className = "img-responsive" src = {Passion} />
                        </div>
                    </div>

                    <div className = "col-sm-4 col-md-4">
                        <div className = "passion-description">
                            <h3>Passion and Dedication</h3>
                            <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
                        </div>
                    </div>
                </div>
                </div>
            
                <div className = "ideas-summary">
                <div className = "row">
                    <div className = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
                        <div className = "idea-img">
                        <img className = "img-responsive" src = { InnovativeSolutions}/>
                        </div>
                    </div>

                     <div className = "col-sm-4 col-md-4">
                     <div className = "idea-description">
                        <h3>Ideas and Solutions</h3>
                            <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                        </div>
                    </div>
                    </div>
                </div>
            
        
        
        
        </div>
    </div>
    </div>)
    }
}

export default Summary;


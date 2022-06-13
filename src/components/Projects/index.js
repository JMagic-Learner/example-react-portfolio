import React from 'react'
import { Link } from 'react-router-dom'



    


class Projects extends React.Component {
constructor(props){
    super(props);
    this.state={
        HTMLarray: [
        {
            title: "LUV TALK WEBSITE",  
            description: "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.",
            divName:"luvtalk-project",
            },
            {
            title: "Personal Website", 
            description: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
            divName: "personal-website-project",
            },
            {
            title: "Strike Zone Analysis",
            description: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
            divName:"personal-website-project"
            }
        ]
}
}


    render() {
        return (<div className="projects" id="projects">

<div className="projects-header">
    <h1>Projects and Portfolio</h1>
</div>

<div className="projects-header-quote">
    <h3>Sharing my endeavors and passions...</h3>
</div>
            
<div className="container-fluid">

    {this.state.HTMLarray.map((items) => {
        return( <div className="row">
        <div className="col-sm-16 col-md-16 text-center">
            <div className = {items.divName}>
                     <h3>{items.title}</h3>
                     <p>{items.description} </p>
                     <div className = "row">
                            <div className = "project-more-info">
                                    <Link className = "btn btn-default btn-border" to= "#">More</Link>
                            </div>
                    </div>
            </div>
        </div>
    </div>
        
        )

    }
    
    
    )}

    {/* <div className="row">
        <div className="col-sm-16 col-md-16 text-center">
            <div className = "luvtalk-project">
                     <h3>LUV TALK Website</h3>
                     <p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. </p>
                     <div className = "row">
                            <div className = "project-more-info">
                                    <Link className = "btn btn-default btn-border" to= "#">More</Link>
                            </div>
                    </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className = "col-sm-16 col-md-16 text-center">
            <div className = "personal-website-project">
                    <h3>Personal Website</h3>
                    <p>Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.</p>
                    <div className = "row">
                            <div className = "project-more-info">
                                    <Link className = "btn btn-default btn-border" to= "#">More</Link>
                            </div>
                    </div>
            </div>
        </div>
    </div>

    <div className="row">
         <div className = "col-sm-16 col-md-16 text-center">
            <div className = "strike-zone-project">
                <h3>Strike Zone Analysis</h3>
                <p></p>
                     <div className = "row">
                            <div className = "project-more-info">
                                    <Link className = "btn btn-default btn-border" to= "#">More</Link>
                            </div>
                    </div>
            </div>
         </div>
    </div> */}
</div>

      

            
                {/* <div className = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5"> */}
                    <div className = "see-more-button">
                        <Link className = "btn btn-default btn-border" to= "#">More Projects</Link>
                    </div>
                {/* </div> 
                 */}

            </div>)
    }
}

            export default Projects

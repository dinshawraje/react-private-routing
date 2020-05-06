import React from "react";
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  
  render(){
    
   return(
  
    <div>
    List of projects
    <Link to="/login">Logout</Link>

    </div>
   )
  } 
}

export default Projects;
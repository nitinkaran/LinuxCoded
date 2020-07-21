import React, { Component } from "react"; 

class Home extends Component {
  render () {
    return (
      <div>
        <div className="homepage">
          <h2>HELLO</h2>
          <p>
            This is the content for the HOME page and we are just checking what exactly the behaviour of
            the various life cycle methods. 
            Once the component gets rendered, we'll set the state in componentDidMount method such that
            the state is updated with the global location of routing. Once this is set we will be ready to 
            render the upcoming webpage. On the click of next button the state needs to be updated and shall
            be done in shouldComponentUpdate. But how will it happen on the nextClick that is to be found.
            Concept of previous button will be induced later on after all the next buttons functionality
            completed.  
          </p>
  
          <p>It may take some time to get through the concepts of the react life cycle methods</p>  
        </div>        
      </div>
    );
  }
}
 
export default Home;
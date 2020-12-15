import React from 'react';
import { render } from '@testing-library/react';

export class Footer extends React.Component{
   
   constructor(props){
      super(props);
      this.state={apiResponse:""};
   }

   callAPI(){
      fetch("http://localhost:9000/testAPI")
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse: res}));
   }

   componentWillMount(){
      this.callAPI();
   }

   render(){
         return(
            
            <>
            <div>
            <footer className="w-100 bg-light text-center">
            <p>© 2020 LODA & LASAN . All Rights Reserved | Terms and Conditions</p>
            </footer>
            <p>{this.state.apiResponse}</p>
            </div>
            </>

            
            
         );
   }
}

export default Footer;




import React from 'react';
import { render } from '@testing-library/react';

export class Footer extends React.Component{
   
   constructor(props){
      super(props);
      this.state={apiResponse:""};
   }

   callAPI(){
      // in the p tag of the footer -> {this.state.apiResponse}
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
            <p>© 2020 UnCoverGem . All Rights Reserved | Terms and Conditions</p>
            </footer>
            <p></p>
            </div>
            </>

            
            
         );
   }
}

export default Footer;




import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingAnim from './LoadingAnim';
import PopupMessage from './PopupMessage';


class App extends React.Component {


  state = {lat: null, errorMessage: ''};


  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(

          (position) => {

            this.setState({lat: position.coords.latitude});
          },
          (err) => {
            this.setState({errorMessage: err.message, errorCode: err.code});
            console.log(err);
          }

        );


  };

  renderContent(){

    if (this.state.errorMessage && !this.state.lat){

          return (
            <div>
              <PopupMessage ErrorMsg = {`Error Message: ${this.state.errorMessage}`} ErrorCode = {`Error Code: ${this.state.errorCode}`} />
            </div>
          );

        }else if (this.state.lat && !this.state.errorMessage){
          return (
            <div>
            <SeasonDisplay lat = {this.state.lat } />
            </div>
          );

        }else {
          return (
            <div>
              <LoadingAnim message = "Please Allow Location Access"/>
            </div>
          );
        }
  };
  
  render() {
   return(

      <div>
        {this.renderContent()}
      </div>

   )
    
  }
}



ReactDOM.render(<App/>, document.querySelector('#root'));
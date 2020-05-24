
import React from 'react';

 
const errMsgBox = document.querySelector('#root');

errMsgBox.addEventListener('click', e =>{


    if(e.target.matches('.close, .close *')){

       errMsgBox.parentElement.removeChild(errMsgBox);
      
    }
    if(e.target.matches('.reload, .reload *')){

     // eslint-disable-next-line no-restricted-globals
     location.reload();
      
    }
}); 


const PopupMessage = (props) => {

    
        return (
          
            <div className="ui negative message">
                <i className="close icon"></i>
                <div className="header">
                    {props.ErrorCode}
                </div>
                <p>{props.ErrorMsg}</p>
                <button class="positive ui button reload">Reload Page</button>
                <button class="negative ui button close">Close Message</button>
            </div>       
        );
};



export default PopupMessage;
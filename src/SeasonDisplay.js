
import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {

    summer : {
        text : 'let\'s hit the beach',
        iconName : 'sun'
    },
    winter : {
        text : 'damn it\'s cold outside',
        iconName : 'snowflake'
    }
}


const getseason = (lat, month) =>{

    if (lat > 0){
        if (month > 2 && month < 9){
            return 'summer'
        }else {
            return 'winter'
        } 
    }else if (lat < 0){
        if (month > 2 && month < 9){
            return 'winter'
        }else {
            return 'summer'
        } 
    }
} 


const SeasonDisplay = (props) => {

    const season = getseason(props.lat, new Date().getMonth());
    
   const {text, iconName} = seasonConfig[season];

    return(
            
            <div className = {`season-display ${season}`}>
               <i className={`icon-left icon massive ${iconName}`}></i>
               <h1 className = "season-text">{text}</h1>
               <i className={`icon-right icon massive ${iconName}`}></i>
            </div>           
        );
    
};

export default SeasonDisplay;


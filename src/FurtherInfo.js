import React from 'react';

const FurtherInfo = (props) => {
    
        return (

            <div>
                <h4 className="ui header">{props.headerText}</h4>
                <p>{props.moreInfo}</p>
            </div>    
            
        );
    
}

export default FurtherInfo;
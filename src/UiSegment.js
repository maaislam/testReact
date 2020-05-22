import React from 'react';

const UiSegment = (props) => {
    
        return (
            
           <div className="ui placeholder segment">
               {props.children}
           </div>
        );
    
};

export default UiSegment;
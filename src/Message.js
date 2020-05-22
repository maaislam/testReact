
import React from 'react';

const Message = (props) => {
    
        return (
            <div className = "ui message">

                <div className="header">{props.headerChanges}</div>
                <p>{props.detailMessage}</p>
            </div>
        );
    
}

export default Message;
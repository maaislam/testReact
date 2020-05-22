import React from 'react';

const ActionBtn = (props) => {
    
        return (
            
            <div>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    {props.fileOutline}
                </div>
                <div className="ui primary button">{props.btnText}</div>
            </div>           
        );
    
}

export default ActionBtn;
import React from "react";

const Scroll = (props) => {
    return (
        <div>
        {/* <div style={{overflow: 'scroll', border: '0.5px solid black', height: '800px'}}> */}
            {props.children}
        </div>
    )
}
export default Scroll;
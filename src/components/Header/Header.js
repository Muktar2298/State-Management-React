import React, { useState } from 'react';



const Header = (props) => {
    const {count,setCount} = props;
    // console.log(props);
    // const handleCount = () => {
    //     setCount(count + 1)
    // }
    return (
        <div style={{border:"1px solid green"}}>
            <h1>This is Header : {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increse Count</button>
            {/* <button onClick={hanldeCount}>Increse Count</button> */}

        </div>
    );
};

export default Header;
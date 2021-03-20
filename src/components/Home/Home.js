import React from 'react';
import Category from '../Category/Category';

const Home = (props) => {
    const {count,setCount} = props;
    
    return (
        <div  style={{border:"1px solid green"}}>
            <h1>This is Home : {count}</h1>
            <Category count={count}></Category>
        </div>
    );
};

export default Home;
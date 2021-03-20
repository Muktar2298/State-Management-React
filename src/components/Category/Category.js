import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>This is Category child(Child of Home )</h2>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Category;
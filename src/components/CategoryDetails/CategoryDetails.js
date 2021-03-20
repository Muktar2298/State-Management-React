import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props;
    return (
        <div>
            <h3>This is Category Details (granchild of Home) : {count}</h3>
        </div>
    );
};

export default CategoryDetails;
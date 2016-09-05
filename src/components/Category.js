import React from 'react';

const Category = (props) => {
    return (
        <span>{props.name}</span>
    );
};

Category.propTypes = {
    name: React.PropTypes.string.isRequired,
};

export default Category;
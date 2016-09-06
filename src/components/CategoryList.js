import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Category from './Category';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCategoryClicked(category) {
        this.props.clickHandler(category);
    }

    render() {
        const {categories, selectedCategoryId} = this.props;

        const categoriesListItems = categories.map((category) => {
            const isActive = category.id===selectedCategoryId;
            return (
                <ListGroupItem key={category.id} onClick={() => this.handleCategoryClicked(category)} active={isActive}>
                    <Category name={category.name} id={category.id}/>
                </ListGroupItem>
            );
        });

        return (
            <ListGroup>
                {categoriesListItems}
            </ListGroup>
        );
    }
}

export default CategoryList;

import React from 'react';

class CategoryButton extends React.Component {
    handleClick(e) {
    }
    render() {

        return (
            <div>
                <a href={this.props.url} onClick={this.handleClick}> {this.props.title} </a>
            </div>
        );
    }
}

export default CategoryButton;
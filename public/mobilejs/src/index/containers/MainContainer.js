import React, { Component, PropTypes } from 'react';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}
MainContainer.propTypes = {
    children: PropTypes.object
};
export default MainContainer;
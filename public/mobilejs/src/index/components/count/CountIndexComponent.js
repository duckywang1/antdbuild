import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';

import { Button } from 'antd-mobile';

class CountIndexComponent extends React.Component {
    constructor(props) {
		super(props);
		this.state = {

		};
	}
    skipToMission() {
        window.reduxstore.dispatch(push('/mission'));
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.skipToMission}>Skip to Mission</Button>
                <Button type="warning">warning</Button>
            </div>
        );
    }
}
export default CountIndexComponent;
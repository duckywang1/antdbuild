import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';

import { Button } from 'antd-mobile';

class MissionIndexComponent extends React.Component {
    constructor(props) {
		super(props);
		this.state = {

		};
	}
    skipToCount() {
        window.reduxstore.dispatch(push('/count'));
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.skipToCount}>Skip to Count</Button>
                <Button type="warning">warning</Button>
            </div>
        );
    }
}
export default MissionIndexComponent;
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as allActions from '../actions/index.js';

import MissionIndexComponent from '../components/mission/MissionIndexComponent.js';

class MissionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MissionIndexComponent routing={this.props.routing} redux_common={this.props.redux_common} redux_actions={this.props.redux_actions} />
        );
    }
}
MissionContainer.propTypes = {
    routing: PropTypes.object,
    redux_common: PropTypes.object,
    redux_actions: PropTypes.object,
};
function mapStateToProps(state) {
    return {
		routing: state.routing,
        redux_common: state.redux_common,
	};
}
function mapDispatchToPatch(dispatch) {
	return {
		redux_actions: bindActionCreators(allActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToPatch)(MissionContainer);
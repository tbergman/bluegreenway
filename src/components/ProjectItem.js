import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import { Link } from 'react-router';

// this component is used to create the accordion in /projects/page/{ zone_name }

export default class ProjectItem extends Component {
	static propTypes = {
		isOpened : PropTypes.bool,
		project: PropTypes.object.isRequired,
		viewOnMapCB: PropTypes.func
	}

	static defaultProps = {
		isOpened: false
	}

	constructor (props) {
		super(props);
		this.onMapButtonClick = this.onMapButtonClick.bind(this);
	}

	componentWillMount () {
		const { isOpened } = this.props || false;
		this.setState({
			isOpened
		});
	}

	handleClick () {
		this.setState({ isOpened: !this.state.isOpened });
	}

	render () {
		return (
			<div
				className='item'
				onClick={ this.handleClick.bind(this) }
				>
				<h5 className={ this.state.isOpened ? 'active item-name': 'item-name'}>
					{ this.props.project.name }
				</h5>
				<Collapse isOpened={ this.state.isOpened }>
					{ this.renderProject() }
				</Collapse>
			</div>
		);
	}

	renderProject () {
		// TODO: pass this in instead of hardcoding
		let mapUrl = 'projects/map';
		
		return (
			<div className='item-content'>
				<div className='item-description' dangerouslySetInnerHTML={ { __html: this.props.project.description } }></div>
				<Link className='button' onClick={ this.onMapButtonClick } to={ mapUrl }>View on Map</Link>
			</div>
		);
	}

	onMapButtonClick () {
		if (this.props.viewOnMapCB) {
			this.props.viewOnMapCB(this.props.project);
		}
	}
}
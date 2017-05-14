import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { updateVisibilityFilter } from '../../actions';

class Link extends Component {

  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (e) => {
    e.preventDefault()
    this.context.linkHandler(this.props.to)
    this.props.dispatch(updateVisibilityFilter(this.props.filter));
  }

  render() {
    const classes = classNames('btn', 'btn-secondary',
      {'active': this.props.visibilityFilter === this.props.filter})
    return (
      <a className={classes} href='#' onClick={this.handleClick}>{this.props.children}</a>
    );
  }

}

Link = connect(
  state => ({visibilityFilter: state.visibilityFilter}),
  null,
  )(Link);

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
  filter: React.PropTypes.string.isRequired,
}

export { Link };
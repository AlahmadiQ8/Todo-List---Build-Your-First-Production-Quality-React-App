import React, { Component } from 'react';
import classNames from 'classnames';

export class Link extends Component {

  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (e) => {
    e.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render() {
    const classes = classNames('btn', 'btn-secondary', 
      {'active': this.context.route === this.props.to})
    return (
      <a className={classes} href='#' onClick={this.handleClick}>{this.props.children}</a>
    );
  }

}

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
}
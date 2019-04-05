/*
    Jono : 19 04 04
    index : React Class Component
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText, emitEvent } = this.props;
    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};
export default SharedButton;

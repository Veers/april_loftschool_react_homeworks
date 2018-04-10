import React from 'react';

import './Step.css';

class Step extends React.PureComponent {
  static defaultProps = {
    number: 0,
    isSelected: false,
    isClickable: false,
    onClick: (number) => {
      console.error('Not implemented');
    }
  }

  handleClick = (event) => {
    if (this.props.isClickable) {
    this.props.onClick(this.props.number);
    }
  }

  render () {
    const { isSelected, isClickable, number, children } = this.props;

    return (
      <div
        className={"step" + (isSelected ? ' step-selected': '') + (isClickable ? ' step-clickable' : '')}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
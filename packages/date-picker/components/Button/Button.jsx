import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import styles from './style.less';

class Button extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  }

  render () {
    const {
      isOpen,
      loading,
      title,
      subtitle
    } = this.props;

    var buttonIconClass = classNames(styles.buttonIconArrow, 'bi-arrow-down', {
      [styles.iconOpen]: isOpen,
    });

    const buttonClass = classNames(styles.button, {
      [styles.disabled]: loading
    });

    return (
      <button 
        disabled={loading} 
        className={buttonClass}
        onClick={this.props.handleClick}
      >
        <i className="bi-calendar" />
        <span>{title}</span>
        <span className={styles.rightSide}>
          <span className={styles.dateRange}>{subtitle}</span>
          <i className={buttonIconClass} />
        </span>
      </button>
    );
  }
}

export default Button;

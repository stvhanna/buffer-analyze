import React, {
  Component,
  PropTypes
} from 'react';

import classNames from 'classnames';
import styles     from './date-picker-dropdown.less';

class DatePickerDropdown extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.any
  }

  render () {
    const {
      isOpen
    } = this.props;

    var dropDownClass = classNames(styles.dropDown, {
      [styles.open]: isOpen
    });

    return (
      <div className={dropDownClass}>
        {this.props.children}
      </div>
    );
  }
}

export default DatePickerDropdown;

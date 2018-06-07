import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from '@bufferapp/components';
import classNames from 'classnames';
import {
  container,
  buttonItem,
  buttonActive,
} from './style.less';

class PostOrderSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescendHovered: false,
      isAscendHovered: false,
    };
  }

  render() {
    const { isDescendingSelected, handleClick } = this.props;
    const descendingClass = classNames(buttonItem, {
      [buttonActive]: isDescendingSelected,
    });
    const ascendingClass = classNames(buttonItem, {
      [buttonActive]: !isDescendingSelected,
    });
    return (
      <div>
        <span style={{ top: '-4px', position: 'relative' }}>
          <Text size="extra-small">Order</Text>
        </span>
        <ul className={container}>
          <li  // eslint-disable-line
            key="descending"
            className={descendingClass}
            onMouseEnter={() => { this.setState({ isDescendHovered: true }); }}
            onMouseLeave={() => { this.setState({ isDescendHovered: false }); }}
            onClick={() => handleClick({ isDescendingSelected: true })}
          >
            {(isDescendingSelected || this.state.isDescendHovered) &&
              <ArrowLongDownIcon color={'shuttleGray'} />
            }
            {(!isDescendingSelected && !this.state.isDescendHovered) &&
              <ArrowLongDownIcon color={'geyser'} />
            }
          </li>
          <li  // eslint-disable-line
            key="ascending"
            className={ascendingClass}
            onMouseEnter={() => { this.setState({ isAscendHovered: true }); }}
            onMouseLeave={() => { this.setState({ isAscendHovered: false }); }}
            onClick={() => handleClick({ isDescendingSelected: false })}
          >
            {(!isDescendingSelected || this.state.isAscendHovered) &&
              <ArrowLongUpIcon color={'shuttleGray'} />
            }
            {(isDescendingSelected && !this.state.isAscendHovered) &&
              <ArrowLongUpIcon color={'geyser'} />
            }
          </li>
        </ul>
      </div>
    );
  }
}

PostOrderSwitch.propTypes = {
  isDescendingSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PostOrderSwitch;

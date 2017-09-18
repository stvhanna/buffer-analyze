import React from 'react';
import PropTypes from 'prop-types';


function getButtons (buttons) {
  return buttons.map((button) => {
    let active = button.value === this.state.active;
    let buttonClass = classNames(styles.buttonItem, {
      [styles.buttonActive]: active,
    });

    return (
      <li key={button.value} className={buttonClass} onClick={this.handleClick.bind(this, button.value)}>
        {button.label}
      </li>
    );
  });
}

const PostsCountBar = ({ active, items, handleClick }) => (
  <ul className={styles.container}>
    {getButtons(this.props.items)}
  </ul>
);

PostsCountBar.propTypes = {
  active: PropTypes.string,
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

export default PostsCountBar;

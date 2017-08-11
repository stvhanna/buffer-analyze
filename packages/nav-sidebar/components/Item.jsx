import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Link,
} from '@bufferapp/components';

import {
  curiousBlueUltraLight,
} from '@bufferapp/components/style/color';

import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';

const Item = ({ active, children }) => {
  const style = calculateStyles({
    default: {
      display: 'block',
      padding: '.5rem 1rem',
    },
    active: {
      backgroundColor: curiousBlueUltraLight,
    },
  }, {
    active,
  });
  return (
    <Link href="#" unstyled>
      <span style={style}>
        <Text color="shuttleGray" weight={active ? 'bold' : null} size="mini">{children}</Text>
      </span>
    </Link>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

Item.defaultProps = {
  active: false,
};

export default Item;

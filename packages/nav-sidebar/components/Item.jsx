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

const Item = ({ href, route, children, onClick, profileId }) => {
  const active = href === route;
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
    <Link
      href={href}
      unstyled
      onClick={(e) => {
        e.preventDefault();
        if (!active) {
          onClick(href, profileId);
        }
      }}
    >
      <span style={style}>
        <Text color="shuttleGray" weight={active ? 'bold' : null}>{children}</Text>
      </span>
    </Link>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  profileId: PropTypes.string,
};

Item.defaultProps = {
  active: false,
  profileId: null,
};

export default Item;
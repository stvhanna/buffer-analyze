import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  Text,
  Link,
} from '@bufferapp/components';

import {
  curiousBlueUltraLight,
} from '@bufferapp/components/style/color';

const InnerLink = styled.span`
  display: block;
  padding: 0.75rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;

  ${props => !props.selected && css`
    &:hover > span {
      color: #168eea !important;
    }
  `}

  ${props => props.selected && css`
    background-color: ${curiousBlueUltraLight}
  `}
`;

const Item = ({ href, searchParameters, route, children, onClick }) => {
  const selected = href === '/' ? href === route : route.includes(href);

  return (
    <Link
      href={href}
      unstyled
      onClick={(e) => {
        e.preventDefault();
        const isCurrent = href === route;
        if (!isCurrent) {
          onClick(href, searchParameters);
        }
      }}
    >
      <InnerLink selected={selected}>
        <Text color="shuttleGray" weight={selected ? 'bold' : null}>{children}</Text>
      </InnerLink>
    </Link>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  searchParameters: PropTypes.string,
};

Item.defaultProps = {
  highlightActive: false,
  searchParameters: '',
};

export default Item;

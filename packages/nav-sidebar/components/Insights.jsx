import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
} from '@bufferapp/components';

import Label from './Label';
import Item from './Item';

const Insights = ({ ...props }) =>
  <div>
    <Label>Insights</Label>
    <Item href="/overview" {...props}>Overview</Item>
    <Item href="/posts" {...props}>Posts</Item>
    <Divider marginTop="0.75rem" marginBottom="1rem" />
  </div>;

export default Insights;

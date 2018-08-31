import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styled from 'styled-components';
import {
  Text,
  Link,
} from '@bufferapp/components';

const BLOG_POST_TITLE = 'How to Use Hashtags: How Many, Best Ones, and Where to Use Them';
const BLOG_POST_URL = 'https://blog.bufferapp.com/a-scientific-guide-to-hashtags-which-ones-work-when-and-how-many?utm_source=buffer&utm_medium=analyze&utm_campaign=hashtags';
const BLOG_POST_LINK = (<Link
  href={BLOG_POST_URL}
  onClick={(e) => {
    e.preventDefault();
    window.open(BLOG_POST_URL);
  }}
  unstyled
>{BLOG_POST_TITLE}</Link>);

const getFormattedDate = function (date) {
  return moment(date, 'MM/DD/YYYY').format('MMMM Do');
};

const PeriodVerbiage = ({ startDate, endDate }) => (
  <span>
    {startDate !== endDate && (
      <span> between {getFormattedDate(startDate)} and {getFormattedDate(endDate)}</span>
    )}
    {startDate === endDate && (
      <span> on {getFormattedDate(startDate)}</span>
    )}
  </span>
);

PeriodVerbiage.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

const Container = styled.div`
  padding: 0.75rem 1.5rem 1rem;
  min-height: 50px;
`;

const NoData = ({ startDate, endDate }) => (
  <Container>
    <Text small>
      We didn’t find any hashtags in the posts sent
      <PeriodVerbiage startDate={startDate} endDate={endDate} />.
      If you’d like to learn more about hashtags, see this post on the Buffer Blog: {BLOG_POST_LINK}.
    </Text>
  </Container>
);

NoData.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default NoData;

import React from 'react';
import PropTypes from 'prop-types';

const feedbackSpanStyle = {
  display: 'block',
  padding: '0.75rem 0.5rem',
  margin: '0px 0.5rem',
  borderRadius: '4px'
};

const feedbackLinkStyle = {
	fontFamily: '"Roboto", sans-serif',
	fontSize: '1rem',
	fontWeight: '400',
	color: 'rgb(89, 98, 106)',
	textDecoration: 'none',
};

const FeedbackLink = ({ children, email }) => (
	<a style={feedbackLinkStyle} href={'mailto:' + email + '?subject=Analyze feedback'}>
		<span style={feedbackSpanStyle}>
	    	<span>{children}</span>
	    </span>
    </a>
);

FeedbackLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired
};

export default FeedbackLink;

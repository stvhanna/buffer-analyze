import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from '@bufferapp/components';

 const FeedbackSpan = styled.span`
    display: block;
	padding: 0.75rem 0.5rem;
	margin: 0px 0.5rem;
	borderRadius: 4px;
 `;

 const FeedbackLinkSpan = styled.span`
     fontFamily: "Roboto", sans-serif;
	fontSize: 1rem;
	fontWeight: 400;
	color: rgb(89, 98, 106);
	textDecoration: none;
 `;

const FeedbackLink = ({ children, email }) => (
	<Link unstyled href={'mailto:' + email + '?subject=Analyze feedback'}>
		<FeedbackSpan>
	    	<FeedbackLinkSpan>{children}</FeedbackLinkSpan>
    	</FeedbackSpan>
    </Link>
);

FeedbackLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired
};

export default FeedbackLink;

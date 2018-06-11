import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styled from 'styled-components';
import {
  Text,
} from '@bufferapp/components';
import MetricGraph from '../MetricGraph';

const ColumnContainer = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom: dotted 1px #CED7DF;
  
  &:last-child {
    border-bottom: 0 none;
  }
`;

const MetricGraphWrapper = styled.div`
  display: inline-block;
  text-decoration: none;
  color: #323b43;
  padding: 1.25rem 1rem 1.25rem 0;
  width: 25%;
  padding-left: 1rem;
`;

const ContentColumn = styled.div`
  display: inline-block;
  text-decoration: none;
  color: #323b43;
  padding: 1.25rem 1rem 1.25rem 0;
  width: 75%;
  padding-right: 1rem;
  border-right: 1px dotted #CED7DF;
`;

const ContentDate = styled.div`
  color: #666c72;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  color: #8A9097;
  
  a,
  a:link,
  a:visited,
  a:hover {
    color: #8A9097;
    text-decoration: none;
  }
`;

const MediaThumbnail = styled.img`
  width: 6rem;
  min-width: 6rem;
  border-radius: 3px;
  margin: 0.25rem 0 0 1rem;
  box-shadow: 0 0 1px rgba(0,0,0,0.1);
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5rem;
`;

const PostContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 0px;
`;

const ContentLink = styled.div`
  margin: -2px 0 0;
`;

const ViewPostLinkClass = styled.a`
  display: inline-block;
  padding-top: 0.2rem;
  color: #168eea;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Attachment = ({ type, media }) => {
  if (['picture', 'photo', 'video', 'image'].includes(type) && media) {
    return <MediaThumbnail alt="" crossOrigin="Anonymous" src={`https://safeimage.buffer.com/${media.thumbnail}`} />;
  }
  return null;
};

Attachment.defaultProps = {
  media: null,
};

Attachment.propTypes = {
  type: PropTypes.string.isRequired,
  media: PropTypes.shape({
    thumbnail: PropTypes.String,
    picture: PropTypes.String,
  }),
};

const MetricColumn = ({ metrics }) => {
  if (metrics.length === 0) {
    return null;
  }
  return (
    <MetricGraphWrapper>
      {metrics.map(metric => <MetricGraph key={metric.key} metric={metric} />)}
    </MetricGraphWrapper>
  );
};

MetricColumn.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PostItem = ({
  post,
  engagementMetrics,
  audienceMetrics,
  maxEngagementValue,
  maxAudienceValue,
  timezone,
}) => {
  const secondaryPostColumnMetrics = audienceMetrics.map((metric) => {
    return {
      ...metric,
      maxValue: maxAudienceValue,
      value: post.statistics[metric.key],
    };
  });

  const primaryPostColumnMetrics = engagementMetrics.map((metric) => {
    return {
      ...metric,
      maxValue: maxEngagementValue,
      value: post.statistics[metric.key],
    };
  });

  const dateFormat = 'D MMMM hh:mm a';
  return (
    <ColumnContainer>
      <ContentColumn>
        <PostMeta>
          <ContentDate>
            <Text size="small" weight="bold" color="outerSpace">
              {moment(post.date).tz(timezone).format(dateFormat)}
            </Text>
          </ContentDate>
          <ContentLink>
            <ViewPostLinkClass
              href={post.serviceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size="extra-small" color="curiousBlue">
                <i className="bi-click" />
                View Post
              </Text>
            </ViewPostLinkClass>
          </ContentLink>
        </PostMeta>
        <PostContent>
          <Text size="extra-small" color="curiousBlue"><ContentContainer dangerouslySetInnerHTML={{ __html: post.text }} /></Text>
          <Attachment type={post.type} media={post.media} />
        </PostContent>
      </ContentColumn>
      <MetricColumn metrics={primaryPostColumnMetrics} />
      <MetricColumn metrics={secondaryPostColumnMetrics} />
    </ColumnContainer>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.number,
    id: PropTypes.string,
    media: PropTypes.shape({
      picture: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    serviceLink: PropTypes.string,
    statistics: PropTypes.shape({
      comments: PropTypes.number,
      postClicks: PropTypes.number,
      postImpressions: PropTypes.number,
      postReach: PropTypes.number,
      reactions: PropTypes.number,
      shares: PropTypes.number,
    }),
    text: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  engagementMetrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  audienceMetrics: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxEngagementValue: PropTypes.number.isRequired,
  maxAudienceValue: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default PostItem;

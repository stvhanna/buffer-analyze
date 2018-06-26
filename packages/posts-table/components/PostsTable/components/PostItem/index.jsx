import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styled from 'styled-components';
import { Text } from '@bufferapp/components';

import {
  curiousBlue,
  geyser,
  lightSlate,
  nevada,
  outerSpace,
} from '@bufferapp/components/style/color';

import MetricGraph from '../MetricGraph';

const PostRow = styled.li`
  display: flex;
  align-content: stretch;
  margin: 0;
  padding: 0;

  &:first-child > div {
    border-top: 1px dotted ${geyser};
  }

  &:last-child > div {
    border-bottom: none;
  }
`;

const MetricCellInner = styled.div`
  color: ${outerSpace};
  padding: 1rem 0;
  width: 220px;
  padding-left: 1rem;
  vertical-align: top;
  border-left: 1px dotted ${geyser};
  border-bottom: 1px dotted ${geyser};
  `;

const NumberCell = styled.div`
  position: relative;
  width: 46px;
  color: ${outerSpace};
  padding: 0.9rem 1rem 1.25rem 0;
  text-align: right;
  vertical-align: top;
  border-right: 1px dotted ${geyser};
  border-bottom: 1px dotted ${geyser};
`;

const ContentCell = styled.div`
  color: ${outerSpace};
  padding: 1rem 1rem 1.25rem;
  padding-right: 1rem;
  width: 620px;
  vertical-align: top;
  border-bottom: 1px dotted ${geyser};
`;

const ContentDate = styled.div`
  color: ${nevada};
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  color: ${lightSlate};
  
  a,
  a:link,
  a:visited,
  a:hover {
    color: ${lightSlate};
    text-decoration: none;
  }
`;

const ContentGradient = styled.div`
  display: none;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2rem;
  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
`;

const MediaThumbnail = styled.img`
  width: 7rem;
  min-width: 7rem;
  border-radius: 3px;
  margin: -32px 0 0 1rem;
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
  height: 107px;
`;

const ViewPostLinkClass = styled.a`
  display: inline-block;
  padding: 0.2rem 0 0 0.75rem;
  color: ${curiousBlue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentBox = styled.div`
  position: relative;
  width: 90%;
  height: 96%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    line-height: 1.5em !important;
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

const MetricCell = ({ metrics }) => {
  if (metrics.length === 0) {
    return null;
  }
  return (
    <MetricCellInner>
      {metrics.map(metric => <MetricGraph key={metric.key} metric={metric} />)}
    </MetricCellInner>
  );
};

MetricCell.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PostItem = ({
  post,
  engagementMetrics,
  audienceMetrics,
  maxEngagementValue,
  maxAudienceValue,
  timezone,
  index,
  exporting,
}) => {
  const secondaryPostColumnMetrics = audienceMetrics.map(metric => ({
    ...metric,
    maxValue: maxAudienceValue,
    value: post.statistics[metric.key],
  }));

  const primaryPostColumnMetrics = engagementMetrics.map(metric => ({
    ...metric,
    maxValue: maxEngagementValue,
    value: post.statistics[metric.key],
  }));

  const dateFormat = 'D MMMM hh:mm a';
  return (
    <PostRow>
      <NumberCell>
        <Text size="extra-large" weight="bold" color="outerSpace">{index + 1}</Text>
      </NumberCell>
      <ContentCell>
        <PostMeta>
          <ContentDate>
            <Text size="small" weight="bold" color="outerSpace">
              {moment(post.date).tz(timezone).format(dateFormat)}
            </Text>
            {!exporting && <ViewPostLinkClass
              href={post.serviceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size="extra-small" color="curiousBlue">
                <i className="bi-click" />
                View Post
              </Text>
            </ViewPostLinkClass>}
          </ContentDate>
        </PostMeta>
        <PostContent>
          <ContentBox>
            <Text size="small" color="curiousBlue">
              <ContentContainer dangerouslySetInnerHTML={{ __html: post.text }} />
            </Text>
            <ContentGradient />
          </ContentBox>
          <Attachment type={post.type} media={post.media} />
        </PostContent>
      </ContentCell>
      <MetricCell metrics={[...primaryPostColumnMetrics, ...secondaryPostColumnMetrics]} />
    </PostRow>
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
  index: PropTypes.number.isRequired,
  exporting: PropTypes.bool.isRequired,
};

export default PostItem;

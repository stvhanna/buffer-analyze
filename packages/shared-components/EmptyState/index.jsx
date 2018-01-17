import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';
import imageBase64 from './image2';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Image = styled.div`
  width: 400px;
  height: 160px;
  background: url(${imageBase64});
  background-size: 100% 100%;
  margin: 0 0 0.1rem;
`;

const Header = styled.h1`
  padding: 0;
  margin: 0 0 0.1rem;
`;

const Description = styled.h2`
  padding: 0 3rem;
  margin: 0;
`;

const EmptyState = ({ header, description }) => (
  <Container>
    <Image />
    <Header>
      <Text size="medium">{header}</Text>
    </Header>
    {description ?
      <Description>
        <Text size="small">{description}</Text>
      </Description> :
      null
    }
  </Container>
);

EmptyState.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
};

EmptyState.defaultProps = {
  header: 'There is currently nothing available or selected',
  description: null,
};

export default EmptyState;

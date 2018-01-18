import React from 'react';
import styled from 'styled-components';
import Text from '@bufferapp/components/Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
`;

const Message = styled.div`
  box-sizing: border-box;
  background: white;
  margin-left: 30;
  margin-right: 30;
  flex-direction: row;
  flex: 1;
  text-align: center;
`;

const Image = styled.div`
  width: 240px;
  height: 100px;
  background: url(https://buffer-analyze.s3.amazonaws.com/images/empty.png);
  background-size: 100% 100%;
  margin: 0 auto 0.1rem;
`;

const Header = styled.h1`
  padding: 0;
  margin: 0 0 0.1rem;
`;

const NoData = () => (
  <Container>
    <Message>
      <Image />
      <Header>
        <Text size="medium">There are no analytics for this date range</Text>
      </Header>
    </Message>
  </Container>
);

export default NoData;


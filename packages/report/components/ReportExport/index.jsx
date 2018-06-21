import React from 'react';
import styled from 'styled-components';

import {
  Text,
} from '@bufferapp/components';

import {
  offWhite,
  white,
} from '@bufferapp/components/style/color';

const Wrapper = styled.div`
  background: ${offWhite};
  min-height: 100%;
`;

const Page = styled.article`
  position: relative;

  @media print {
    overflow-y: hidden;
    height: 1447.74px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
`;

const Cover = styled.header`
  height: 100%;
  box-sizing: border-box;
  padding: 4.5rem 4rem;
  background: ${white};
  display: flex;
  align-items: center;
`;

const Header = styled.header`
  padding: 4.5rem 4rem;
  background: ${white};
  border-bottom: 1px solid #DBE8F1;
`;

const Footer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  padding: 2rem 4rem;
  background: ${white};
  border-top: 1px solid #DBE8F1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Graph = styled.section`
  box-sizing: border-box;
  padding: 4.5rem 3rem;
  margin: 1rem;
  height: 800px;
  background: ${white};
  border: 1px solid #DBE8F1;
`;

class ReportExport extends React.Component {
  renderCover() {
    return (
      <Cover>
        <Text>Cover page</Text>
      </Cover>
    );
  }

  renderHeader() {
    return (
      <Header>
        <Text>Report title</Text>
      </Header>
    );
  }

  renderFooter() {
    return (
      <Footer>
        <Text>Page </Text>
      </Footer>
    );
  }

  renderGraph() {
    return (
      <Graph>
        <Text>Graph</Text>
      </Graph>
    );
  }

  render() {
    return (
      <Wrapper id="report-page">
        <Page>
          {this.renderCover()}
        </Page>
        <Page>
          {this.renderHeader()}
          {this.renderGraph()}
          {this.renderGraph()}
          {this.renderFooter()}
        </Page>
        <Page>
          {this.renderHeader()}
          {this.renderGraph()}
          {this.renderGraph()}
          {this.renderFooter()}
        </Page>
        <Page>
          {this.renderHeader()}
          {this.renderGraph()}
          {this.renderFooter()}
        </Page>
      </Wrapper>
    );
  }
}

export default ReportExport;

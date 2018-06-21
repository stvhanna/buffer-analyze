import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import ReportExport from './index';
import Cover from './Cover';
import Header from './Header';
import Footer from './Footer';

const dateRange = { startDate: '02/20/2018', endDate: '02/25/2018' };
const logoUrl = null;
const name = 'Sample report';

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders the export report', () => (
    <ReportExport
      dateRange={dateRange}
      logoUrl={logoUrl}
      name={name}
    />
  ));

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders the export report cover only', () => (
    <Cover
      dateRange={dateRange}
      logoUrl={logoUrl}
      name={name}
    />
  ));

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders the export report header only', () => (
    <Header
      dateRange={dateRange}
      logoUrl={logoUrl}
      name={name}
    />
  ));

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders the export report footer only', () => (
    <Footer />
  ));

storiesOf('ReportExport')
  .addDecorator(checkA11y)
  .add('renders a loading export report', () => (
    <ReportExport loading />
  ));

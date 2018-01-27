import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@bufferapp/components';

import ReportText from '../ReportText';
import Name from '../Name';
import Date from '../Date';

const ReportWithDate =
  ({ _id, name, updated_at, small, selectReport }) =>
    <Button noStyle fillContainer onClick={() => selectReport(_id)}>
      <ReportText small={small}>
        <Name name={name} small={small} />
        <Date updated_at={updated_at} small={small} />
      </ReportText>
    </Button>;

ReportWithDate.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updated_at: PropTypes.number.isRequired,
  selectReport: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

ReportWithDate.defaultProps = {
  small: false,
};

export default ReportWithDate;


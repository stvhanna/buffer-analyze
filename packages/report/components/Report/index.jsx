import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Text,
  Button,
} from '@bufferapp/components';

import {
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import {
  EditIcon,
} from '@bufferapp/components/Icon/Icons';

import {
  offWhite,
  outerSpace,
  white,
} from '@bufferapp/components/style/color';

import Cover from '../Cover';
import ChartFactory from '../ChartFactory';
import DateRange from '../DateRange';
import EditTitle from '../EditTitle';
import LogoUpload from '../LogoUpload';
import EditDescription from '../EditDescription';

const Page = styled.div`
  background: ${offWhite};
  padding: 0 0 2rem;
`;

const Header = styled.div`
  padding: 4.5rem 4rem;
  background: ${white};
  border-bottom: 1px solid #DBE8F1;
`;

const Title = styled.h1`
  display: inline-block;
  color: ${outerSpace};
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 .5rem 0;
`;

const Description = styled.h2`
  display: inline-block;
  color: #505050;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: left;
  margin: .5rem 0 0 0;
`;

const EmptyDescription = Description.extend`
  color: #afafaf;
  display: block;
  font-weight: 400;
`;

const DescriptionContainer = styled.div`
  &:hover > div {
    opacity: 1;
  };
  margin-top: 20px;
`;

const Container = styled.div`
  &:hover > div {
    opacity: 1;
  }
`;

const Icon = styled.div`
  display: inline-block;
  margin: 0 0 0 0.75em;
  opacity: 0;
  transition: opacity 50ms linear;
  position: absolute;
  margin-left: -25px;
  margin-top: 10px;
`;

const Centered = styled.div`
  display: flex;
  height: 400px;
  background: ${white};
  justify-content: center;
  align-items: center;
`;

const Gradient = styled.div`
  margin: 0 0 -2rem;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  height: 2rem;
`;

class Report extends React.Component {
  componentDidUpdate() {
    if (this.shouldAddPageBreaks()) {
      this.props.parsePageBreaks();
    }
  }

  shouldAddPageBreaks() {
    const hasStoppedLoading = !this.props.loading;
    const isExportView = this.props.exporting;

    return hasStoppedLoading && isExportView;
  }

  render() {
    const { name, dateRange, charts, loading,
      edit, saveChanges, editName, moveUp, moveDown, deleteChart, exporting, uploadLogo,
        logoUrl, deleteLogo, isLogoUploading, isLogoDropzoneDisabled,
        editDescription, isDescriptionEditing, description, saveDescription,
    } = this.props;

    if (loading) {
      return (
        <Centered>
          <Loading active noBorder transparent />
        </Centered>
      );
    }

    return (
      <Page id="report-page">
        {exporting &&
          <Cover name={name} description={description} dateRange={dateRange} logoUrl={logoUrl} />
        }
        {!exporting &&
          <Header>
            <Text>
              { edit && <EditTitle name={name} saveChanges={saveChanges} />}
              { !edit &&
                <Container>
                  <LogoUpload
                    logoUrl={logoUrl}
                    uploadLogo={uploadLogo}
                    deleteLogo={deleteLogo}
                    isLogoUploading={isLogoUploading}
                    isLogoDropzoneDisabled={isLogoDropzoneDisabled}
                    exporting={exporting}
                  />
                  <Icon><EditIcon /></Icon>
                  <Button noStyle onClick={editName}>
                    <Title>{name}</Title>
                  </Button>
                </Container>
              }
              <DateRange {...dateRange} />
              {isDescriptionEditing &&
                <EditDescription description={description} saveDescription={saveDescription} />
              }
              {!isDescriptionEditing && <DescriptionContainer>
                <Icon><EditIcon /></Icon>
                <Button noStyle onClick={editDescription}>
                  {description && <Description>{description}</Description>}
                  {!description && <EmptyDescription>Add report description</EmptyDescription>}
                </Button>
              </DescriptionContainer>}
            </Text>
          </Header>
        }
        <ChartFactory
          charts={charts}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteChart={deleteChart}
          exporting={exporting}
        />
        {exporting && <Gradient />}
      </Page>
    );
  }
}

Report.defaultProps = {
  loading: false,
  exporting: false,
  edit: false,
  dateRange: {},
  charts: [],
  isLogoUploading: false,
  isLogoDropzoneDisabled: false,
  name: '',
  isDescriptionEditing: false,
  description: '',
};

Report.propTypes = {
  loading: PropTypes.bool,
  exporting: PropTypes.bool,
  edit: PropTypes.bool,
  dateRange: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  name: PropTypes.string,
  saveChanges: PropTypes.func.isRequired,
  charts: PropTypes.arrayOf(PropTypes.shape({
    chart_id: PropTypes.string,
  }).isRequired),
  logoUrl: PropTypes.string.isRequired,
  editName: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  deleteChart: PropTypes.func.isRequired,
  parsePageBreaks: PropTypes.func.isRequired,
  uploadLogo: PropTypes.func.isRequired,
  deleteLogo: PropTypes.func.isRequired,
  isLogoUploading: PropTypes.bool,
  isLogoDropzoneDisabled: PropTypes.bool,
  isDescriptionEditing: PropTypes.bool,
  description: PropTypes.string,
  editDescription: PropTypes.func.isRequired,
  saveDescription: PropTypes.func.isRequired,
};

export default Report;

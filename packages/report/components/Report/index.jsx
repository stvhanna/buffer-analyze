import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from '@bufferapp/components';
import styled from 'styled-components';
import ChartFactory from '../ChartFactory';
import DateRange from '../DateRange';
import EditTitle from '../EditTitle';

const Title = styled.h1`
  color: #343E47;
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 .5rem;
`;

class Report extends React.Component {
  static defaultProps = {
    loading: false,
    exporting: false,
    edit: false,
    dateRange: {},
    charts: [],
  };

  static propTypes = {
    loading: PropTypes.bool,
    exporting: PropTypes.bool,
    edit: PropTypes.bool,
    dateRange: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    saveChanges: PropTypes.func.isRequired,
    charts: PropTypes.arrayOf(PropTypes.shape({
      chart_id: PropTypes.string,
    }).isRequired),
    editName: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
    deleteChart: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading && this.props.exporting) {
      let height = 0;
      // const pdfHeight = 1122; // 842 pt to px
      const pdfHeight = 842;
      const reportModules = document.getElementById('report-page').children;
      Array.prototype.forEach.call(reportModules, (module) => {
        const moduleHeight = module.clientHeight;
        height += moduleHeight;
        if (height >= pdfHeight) {
          const ulList = module.getElementsByTagName('ul');
          if (ulList.length === 2) {
            height -= moduleHeight;
            const [ title, subtitle, list ] = module.children;
            height += title.clientHeight + subtitle.clientHeight;
            const listItems = ulList[1].children;
            Array.prototype.forEach.call(listItems, (li) => {
              const liHeight = li.clientHeight;
              height += liHeight;
              if (height >= pdfHeight) {
                li.style.setProperty('page-break-before', 'always');
                height = liHeight;
              }
            });
          } else {
            module.style.setProperty('page-break-before', 'always');
            height = moduleHeight;
          }
        }
      });
    }
  }

  render() {
    const { name, dateRange, charts, loading,
      edit, saveChanges, editName, moveUp, moveDown, deleteChart, exporting } = this.props;
    if (loading) return '...loading';
    return (
      <div id="report-page">
        <Text>
          { edit && <EditTitle name={name} saveChanges={saveChanges} />}
          { !edit && <div><Button noStyle onClick={editName}><Title>{name}</Title></Button></div> }
          <DateRange {...dateRange} />
        </Text>
        <ChartFactory
          charts={charts}
          moveUp={moveUp}
          moveDown={moveDown}
          deleteChart={deleteChart}
          exporting={exporting}
        />
      </div>
    );
  }
}

export default Report;

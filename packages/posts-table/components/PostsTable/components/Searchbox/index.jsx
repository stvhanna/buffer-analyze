import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import styled from 'styled-components';

import { geyser, curiousBlue, shuttleGray } from '@bufferapp/components/style/color';
import { fontFamily, fontSizeExtraSmall } from '@bufferapp/components/style/font';
import { CloseIcon } from '@bufferapp/components/Icon/Icons';
import { Text, Button } from '@bufferapp/components';

const Tag = styled.span`
  border-radius: 2px;
  padding: .125rem .5rem .25rem;
  color: white;
  font-weight: bold;
  background-color: ${curiousBlue};
  margin-right: .25rem;
`;

const Input = styled.input`
  font-family: ${fontFamily};
  font-size: ${fontSizeExtraSmall};
  color: ${shuttleGray};
  border: none;
  margin-left: .25rem;
  max-width: 100%;
  width: 100%;
  padding: .25rem;

  &:focus {
    outline: none;
  }
`;

const TagContent = styled.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  & > *:first-child {
    margin-right: .5rem;
  }
`;

const searchTag = ({ key, onRemove, getTagDisplayValue, tag, ...other }) =>
  <Tag key={key} {...other}>
    <Button noStyle onClick={() => onRemove(key)}>
      <TagContent>
        <Text color="white" size="extra-small">{getTagDisplayValue(tag)}</Text>
        <CloseIcon size="small" color="white"/>
      </TagContent>
    </Button>
  </Tag>;

searchTag.propTypes = {
  key: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  getTagDisplayValue: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

const SearchWrapper = styled.div`
  overflow: hidden;
  border: 1px solid ${geyser};
  padding: .25rem;
  border-radius: 3px;
  width: 26rem;
  display: inline-flex;
`;

const layout = (tags, input) => <SearchWrapper>{tags} {input}</SearchWrapper>;

const searchInput = props => (<Input
  {...props}
  value={props.value}
  type="text"
  placeholder={props.hasTags ? null : 'Filter posts by keywords or #hashtags'}
/>);

searchInput.propTypes = {
  value: PropTypes.string.isRequired,
  hasTags: PropTypes.bool.isRequired,
};

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChange(tags) {
    this.props.search(tags);
  }

  handleChangeInput(tags) {
    this.setState({ tags });
  }

  render() {
    return (<TagsInput
      value={this.props.searchTerms}
      inputValue={this.state.tags}
      onChange={this.handleChange}
      onChangeInput={this.handleChangeInput}
      inputProps={{
        hasTags: this.props.searchTerms.length > 0,
      }}
      renderInput={searchInput}
      renderTag={searchTag}
      renderLayout={layout}
    />);
  }
}

Searchbox.defaultProps = {
  searchTerms: [],
};

Searchbox.propTypes = {
  search: PropTypes.func.isRequired,
  searchTerms: PropTypes.arrayOf(PropTypes.string),
};

export default Searchbox;

import styled from 'styled-components';

export default styled.span`
  display: flex;
  flex: 1 0 auto;
  padding: ${props => (props.small ? '.75rem 1rem' : '1.5rem 1.25rem')};
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

import styled from 'styled-components';

const LabelRadio = styled.label`
  color: #5A2D82;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid #5A2D82;
    border-radius: 50px;
    margin-right: 10px;
    display: inline-block;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default LabelRadio;

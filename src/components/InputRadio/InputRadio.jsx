import styled from 'styled-components';
import LabelRadio from '../LabelRadio/LabelRadio';

const InputRadio = styled.input`
  display: none;

  &:checked + ${LabelRadio}:before {
    background: ${props => props.color};
  } 
`;

export default InputRadio;
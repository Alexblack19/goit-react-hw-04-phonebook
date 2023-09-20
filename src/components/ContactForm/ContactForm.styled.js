import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 32px;
  border-radius: 5px;
`;

export const Submit = styled.button`
  max-width: 120px;
  padding: 5px 7px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #cec1b9;
  &:hover,
  :focus {
    font-weight: 600;
    background-color: #ccb9b0;
    -webkit-box-shadow: 3px 3px 7px 0px rgba(173, 171, 161, 1);
    -moz-box-shadow: 3px 3px 7px 0px rgba(173, 171, 161, 1);
    box-shadow: 3px 3px 7px 0px rgba(173, 171, 161, 1);
  }
`;

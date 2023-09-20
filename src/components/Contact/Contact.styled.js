import styled from 'styled-components';

export const Name = styled.span`
  margin-right: 10px;
`;

export const Number = styled.span`
  margin-right: 20px;
`;

export const Button = styled.button`
  width: 60px;
  padding: 2px 2px;
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

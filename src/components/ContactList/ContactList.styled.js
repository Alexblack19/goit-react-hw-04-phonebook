import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &::marker {
    color: #5f2ea0;
    font-size: 20px;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 600;
`;

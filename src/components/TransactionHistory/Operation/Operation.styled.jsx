import styled from '@emotion/styled';

export const TableRows = styled.tr`
  &:nth-of-type(odd) {
    background-color: #fafafa;
  }

  &:nth-of-type(even) {
    background-color: #e9e9e9;
  }
`;

export const Td = styled.td`
  padding: 16px;
`;

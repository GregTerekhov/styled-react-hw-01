import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f4f4f4;
`;

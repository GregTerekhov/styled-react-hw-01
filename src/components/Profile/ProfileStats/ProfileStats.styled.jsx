import styled from '@emotion/styled';

export const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ccc;
  }

  &::before {
    left: calc(33.33% - 0.5px);
  }

  &::after {
    right: calc(33.33% - 0.5px);
  }

  & > li {
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dae4e8;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #969494;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 22px;
  text-align: center;
`;

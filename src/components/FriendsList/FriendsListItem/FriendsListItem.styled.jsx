import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: grid;
  grid-template-columns: auto 56px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: start;
  padding: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
`;

export const FriendName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  grid-column: 3 / 4;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const StatusOnline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: green;
  grid-row: 1 / 2;
  justify-self: end;
`;

export const StatusOffline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  grid-row: 1 / 2;
  justify-self: end;
  background-color: red;
`;

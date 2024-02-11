import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 12px;
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-right: 10px;
`;

export const Button = styled.button`
  border-radius: 4px;
  &:hover {
    background-color: #7396d8;
  }
`;

export const Error = styled.p`
  text-align: center;
  color: red;
  font-size: 18px;
`;

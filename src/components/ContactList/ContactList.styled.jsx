import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
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
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #7396d8;
  }
`;

export const Error = styled.p`
  text-align: center;
  color: red;
  font-size: 18px;
`;

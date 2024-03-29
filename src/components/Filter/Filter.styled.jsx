import styled from '@emotion/styled';

export const Input = styled.input`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 0 auto 20px;
  display: block;
  padding: 5px;
  max-width: 160px;

  &:focus {
    border: 3px solid #7396d8;
    outline: none;
  }
`;

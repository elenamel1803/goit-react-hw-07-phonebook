import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 400px;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  padding: 5px;
  max-width: 160px;
  &:focus {
    border: 3px solid #7396d8;
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 5px;
  margin: 20px auto;
  &:hover {
    background-color: #7396d8;
  }
`;

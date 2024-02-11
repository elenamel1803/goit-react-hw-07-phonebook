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
  padding: 5px;
  margin: 20px auto;
  &:hover {
    background-color: #7396d8;
  }
`;

import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.alto};
  text-align: left;
`;

const Field = styled.input`
  margin-top: 0.375rem;
  background-color: ${({ theme }) => theme.color.tuna};
  padding: 1rem;
  border-radius: 8px;
`;

interface InputProps {
  name: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, className }) => {
  return (
    <Container className={className}>
      <Label htmlFor={name}>Please give it a name</Label>
      <Field name={name} type="text" />
    </Container>
  );
};

export default Input;

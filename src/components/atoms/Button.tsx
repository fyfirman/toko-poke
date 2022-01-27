import React from "react";
import styled from "@emotion/styled";

const Container = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme, color }) => color ?? theme.color.amethyst};
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 8px;
  color: white;
`;

interface ButtonProps {
  children: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, className, onClick }) => {
  return (
    <Container className={className} color={color} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;

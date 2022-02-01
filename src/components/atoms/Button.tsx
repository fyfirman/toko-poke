import React, { useCallback, memo } from "react";
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
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.025);
  }

  &:focus,
  &:active {
    transform: scale(0.975);
  }
`;

interface ButtonProps {
  children: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, className, onClick }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) onClick();
    },
    [onClick],
  );

  return (
    <Container className={className} color={color} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default memo(Button);

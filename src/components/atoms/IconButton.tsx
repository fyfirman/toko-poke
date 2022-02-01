import React from "react";
import styled from "@emotion/styled";

const Container = styled.button<{ color?: string }>`
  display: flex;
  gap: 0.25rem;
  background-color: ${({ theme, color }) => color ?? theme.color.cinnabar};
  border-radius: 8px;
  padding: 4px 8px 4px 4px;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 0.75rem;
  color: white;
`;

interface IconButtonProps {
  children: string;
  color?: string;
  className?: string;
  imgSrc: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, color, className, onClick, imgSrc }) => {
  return (
    <Container className={className} color={color} onClick={onClick}>
      <img alt="icon button" src={imgSrc} width={18} />
      <Text>{children}</Text>
    </Container>
  );
};

export default IconButton;

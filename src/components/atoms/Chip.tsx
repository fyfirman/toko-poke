import React from "react";
import styled from "@emotion/styled";

const Container = styled.span<{ color?: string; rounded?: boolean }>`
  font-size: 0.75rem;
  color: white;
  background-color: ${({ theme, color }) => color ?? theme.color.cinnabar};
  border-radius: ${({ rounded }) => (rounded ? "100%" : "8px")};
  padding: 8px;
`;

interface ChipProps {
  children: string | number;
  color?: string;
  className?: string;
  rounded?: boolean;
}

const Chip: React.FC<ChipProps> = ({ children, color, className, rounded = true }) => {
  return (
    <Container className={className} color={color} rounded={rounded}>
      {children}
    </Container>
  );
};

export default Chip;

import React from "react";
import styled from "@emotion/styled";

const Container = styled.span<{ color?: string }>`
  font-size: 0.75rem;
  color: white;
  background-color: ${({ theme, color }) => color ?? theme.color.cinnabar};
  border-radius: 100%;
`;

interface ChipProps {
  children: string | number;
  color?: string;
}

const Chip: React.FC<ChipProps> = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default Chip;

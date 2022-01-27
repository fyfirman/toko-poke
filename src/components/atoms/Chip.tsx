import React from "react";
import styled from "@emotion/styled";

// TODO: refacotor this
const Container = styled.span<{ color?: string; rounded?: boolean }>`
  font-size: 0.75rem;
  color: white;
  background-color: ${({ theme, color }) => color ?? theme.color.cinnabar};
  font-weight: ${({ rounded }) => (rounded ? "bold" : "inherit")};
  border-radius: ${({ rounded }) => (rounded ? "100%" : "8px")};
  padding: ${({ rounded }) => (rounded ? "inherit" : "6px 8px")};
  aspect-ratio: ${({ rounded }) => (rounded ? "1" : "inherit")};
  width: ${({ rounded }) => (rounded ? "18px" : "inherit")};
  height: ${({ rounded }) => (rounded ? "18px" : "inherit")};
  display: ${({ rounded }) => (rounded ? "flex" : "inherit")};
  align-items: ${({ rounded }) => (rounded ? "center" : "inherit")};
  justify-content: ${({ rounded }) => (rounded ? "center" : "inherit")};
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

import React from "react";
import styled from "@emotion/styled";
import theme from "~/lib/theme";
import Chip from "../atoms/Chip";

const Container = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  text-transform: capitalize;
  flex-wrap: wrap;
`;

interface ChipListProps {
  types: string[];
  color?: string;
}

const ChipList: React.FC<ChipListProps> = ({ types, color = theme.color.electricViolet }) => {
  return (
    <Container>
      {types.map((type, index) => (
        <Chip key={index} color={color} rounded={false}>
          {type}
        </Chip>
      ))}
    </Container>
  );
};

export default ChipList;

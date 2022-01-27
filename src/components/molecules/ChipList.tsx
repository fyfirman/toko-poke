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
  data: string[];
  color?: string;
}

const ChipList: React.FC<ChipListProps> = ({ data, color = theme.color.electricViolet }) => {
  return (
    <Container>
      {data.map((type, index) => (
        <Chip key={index} color={color} rounded={false}>
          {type}
        </Chip>
      ))}
    </Container>
  );
};

export default ChipList;

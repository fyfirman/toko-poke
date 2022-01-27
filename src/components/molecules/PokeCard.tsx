import React, { useCallback } from "react";
import styled from "@emotion/styled";
import TypeList from "./ChipList";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-wrap: none;
`;

const Name = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-transform: capitalize;
`;

const Id = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.silverChalice};
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 80px;
`;

interface PokeCardProps {
  name: string;
  id: number;
  types: string[];
  imageUrl: string;
  onClick?: (id: number) => void;
}

const PokeCard: React.FC<PokeCardProps> = (props) => {
  const { name, id, types, imageUrl, onClick } = props;

  const handleClick = useCallback(() => {
    if (onClick) onClick(id);
  }, [id, onClick]);

  return (
    <Container onClick={handleClick}>
      <InfoSection>
        <Name>{name}</Name>
        <Id>#{id}</Id>
        <TypeList types={types} />
      </InfoSection>
      <Image alt={name} src={imageUrl} />
    </Container>
  );
};

export default React.memo(PokeCard);

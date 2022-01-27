import React, { useCallback } from "react";
import styled from "@emotion/styled";
import IconButton from "~/components/atoms/IconButton";
import TrashIcon from "~/assets/images/trash-outline.svg";
import { IPokemon } from "~/interfaces/pokemon";
import TypeList from "./ChipList";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 12px;
  padding: 1rem;
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
  flex-wrap: none;
`;

const ActionSection = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 80px;
`;

interface PokeCardProps extends IPokemon {
  types?: string[];
  imageUrl: string;
  onClick?: (pokemon: IPokemon) => void;
  withAction?: boolean;
}

const PokeCard: React.FC<PokeCardProps> = (props) => {
  const { name, pokemonName, id, types, imageUrl, onClick, withAction = false } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick({
        id,
        pokemonName,
        name,
      });
    }
  }, [id, name, onClick, pokemonName]);

  return (
    <Container onClick={handleClick}>
      <InfoSection>
        <Body>
          <Name>{name ? `${name} - ${pokemonName}` : pokemonName}</Name>
          <Id>#{id}</Id>
          {types && <TypeList data={types} />}
        </Body>
        <Image alt={name} src={imageUrl} />
      </InfoSection>
      {withAction && (
        <ActionSection>
          <IconButton imgSrc={TrashIcon}>Release</IconButton>
        </ActionSection>
      )}
    </Container>
  );
};

export default React.memo(PokeCard);

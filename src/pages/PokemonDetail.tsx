import React, { useState } from "react";
import styled from "@emotion/styled";
import { pokemonDetail } from "~/__mocks__/pokemon";
import { getImageUrlByID } from "~/lib/pokemon";
import ChipList from "~/components/molecules/ChipList";
import uiTheme from "~/lib/theme";
import PokeButton from "~/components/atoms/PokeButton";
import SuccessModal from "~/components/templates/SuccessModal";

const Container = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

const PokemonImage = styled.img`
  width: 80%;
`;

const InfoSection = styled.div`
  padding: 1.5rem 1.5rem 50px;
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 12px 12px 0 0;
  text-align: left;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.h1`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
`;

const OwnedText = styled.span`
  font-size: 0.675rem;
  margin-top: 0.25rem;
`;

const IdText = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.silverChalice};
`;

const MoveListText = styled.h2`
  margin-top: 1rem;
  font-size: 1.125rem;
`;

const GatchaButton = styled(PokeButton)`
  position: sticky;
  bottom: 1rem;
  display: inline-flex;
`;

interface PokemonDetailProps {}

type OpenedModal = "success" | "failed";

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
  const [openedModal, setOpenedModal] = useState<OpenedModal>();

  return (
    <>
      <Container>
        <PokemonImage alt={pokemonDetail.name} src={getImageUrlByID(pokemonDetail.id, "official-artwork")} />
        <InfoSection>
          <HeaderSection>
            <TitleText>{pokemonDetail.name}</TitleText>
            <IdText>#{pokemonDetail.id}</IdText>
          </HeaderSection>
          <OwnedText>Owned: {10}</OwnedText>
          <ChipList types={pokemonDetail.types.map((type) => type.type.name)} />
          <MoveListText>Move List</MoveListText>
          <ChipList color={uiTheme.color.boulder} types={pokemonDetail.moves.map((move) => move.move.name)} />
        </InfoSection>
        <GatchaButton onClick={() => setOpenedModal("success")} />
      </Container>
      <SuccessModal
        imgSrc={getImageUrlByID(pokemonDetail.id, "official-artwork")}
        isOpen={openedModal === "success"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={pokemonDetail.name}
      />
    </>
  );
};

export default PokemonDetail;

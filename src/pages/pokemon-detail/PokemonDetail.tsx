import React, { useState } from "react";
import { pokemonDetail } from "~/__mocks__/pokemon";
import { getImageUrlByID } from "~/lib/pokemon";
import ChipList from "~/components/molecules/ChipList";
import uiTheme from "~/lib/theme";
import SuccessModal from "~/components/templates/SuccessModal";
import FailedModal from "~/components/templates/FailedModal";
import {
  Container,
  PokemonImage,
  InfoSection,
  HeaderSection,
  TitleText,
  OwnedText,
  IdText,
  MoveListText,
  GatchaButton,
} from "./PokemonDetailStyles";

type OpenedModal = "success" | "failed";

const PokemonDetail: React.FC = () => {
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
        <GatchaButton onClick={() => setOpenedModal("failed")} />
      </Container>
      <SuccessModal
        imgSrc={getImageUrlByID(pokemonDetail.id, "official-artwork")}
        isOpen={openedModal === "success"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={pokemonDetail.name}
      />
      <FailedModal
        isOpen={openedModal === "failed"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={pokemonDetail.name}
      />
    </>
  );
};

export default PokemonDetail;

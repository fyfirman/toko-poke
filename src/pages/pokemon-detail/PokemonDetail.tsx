import React, { useState } from "react";
import { getImageUrlByID } from "~/lib/pokemon";
import ChipList from "~/components/molecules/ChipList";
import uiTheme from "~/lib/theme";
import SuccessModal from "~/components/templates/SuccessModal";
import FailedModal from "~/components/templates/FailedModal";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "~/graphql/PokemonOperation";
import { useParams } from "react-router-dom";
import { Query } from "~/interfaces/graphql";
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
  const { name } = useParams<{ name: string }>();
  const [openedModal, setOpenedModal] = useState<OpenedModal>();
  const { data, loading } = useQuery<Query>(GET_POKEMON, {
    variables: { name },
  });

  return (
    <>
      <Container>
        {!loading ? (
          <>
            <PokemonImage
              alt={data?.pokemon?.name as string}
              src={getImageUrlByID(data?.pokemon?.id as number, "official-artwork")}
            />
            <InfoSection>
              <HeaderSection>
                <TitleText>{data?.pokemon?.name}</TitleText>
                <IdText>#{data?.pokemon?.id}</IdText>
              </HeaderSection>
              <OwnedText>Owned: {10}</OwnedText>
              <ChipList data={data?.pokemon?.types?.map((type) => type?.type?.name) as string[]} />
              <MoveListText>Move List</MoveListText>
              <ChipList
                color={uiTheme.color.boulder}
                data={data?.pokemon?.moves?.map((move) => move?.move?.name) as string[]}
              />
            </InfoSection>
            <GatchaButton onClick={() => setOpenedModal("failed")} />
          </>
        ) : (
          <div>Loading</div>
        )}
      </Container>
      <SuccessModal
        imgSrc={getImageUrlByID(data?.pokemon?.id as number, "official-artwork")}
        isOpen={openedModal === "success"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={data?.pokemon?.name as string}
      />
      <FailedModal
        isOpen={openedModal === "failed"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={data?.pokemon?.name as string}
      />
    </>
  );
};

export default PokemonDetail;

import React, { Suspense, useState } from "react";
import { getImageUrlByID } from "~/lib/pokemon";
import ChipList from "~/components/molecules/ChipList";
import uiTheme from "~/lib/theme";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "~/graphql/PokemonOperation";
import { useParams } from "react-router-dom";
import { Query } from "~/interfaces/Graphql";
import { useMyPokemon } from "~/hooks/MyPokemonProvider";
import { IPokemon } from "~/interfaces/Pokemon";
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

const SuccessModal = React.lazy(() => import("~/components/templates/SuccessModal"));
const FailedModal = React.lazy(() => import("~/components/templates/FailedModal"));

type OpenedModal = "success" | "failed";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [openedModal, setOpenedModal] = useState<OpenedModal>();
  const { data, loading } = useQuery<Query>(GET_POKEMON, {
    variables: { name },
  });
  const [_, dispatch] = useMyPokemon();

  const handleGatcha = () => {
    setOpenedModal(Math.random() >= 0.5 ? "success" : "failed");
  };

  const handleSavePokemon = (petName: string) => {
    if (!petName || !data?.pokemon?.id || !data.pokemon.name) {
      return;
    }
    const newPokemon: IPokemon = {
      id: data.pokemon.id,
      pokemonName: data.pokemon.name,
      name: petName,
    };
    dispatch({ type: "ADD", payload: newPokemon });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            <GatchaButton onClick={handleGatcha} />
          </>
        ) : (
          <div>Loading</div>
        )}
      </Container>
      <SuccessModal
        imgSrc={getImageUrlByID(data?.pokemon?.id as number, "official-artwork")}
        isOpen={openedModal === "success"}
        onRequestClose={() => setOpenedModal(undefined)}
        onSavePokemon={handleSavePokemon}
        pokemonName={data?.pokemon?.name as string}
      />
      <FailedModal
        isOpen={openedModal === "failed"}
        onRequestClose={() => setOpenedModal(undefined)}
        pokemonName={data?.pokemon?.name as string}
      />
    </Suspense>
  );
};

export default PokemonDetail;

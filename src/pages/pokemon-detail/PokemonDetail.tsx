import React, { Suspense, useMemo, useState } from "react";
import { getImageUrlByID } from "~/lib/pokemon";
import ChipList from "~/components/molecules/ChipList";
import uiTheme from "~/lib/theme";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "~/graphql/PokemonOperation";
import { useHistory, useParams } from "react-router-dom";
import { Query } from "~/interfaces/Graphql";
import { useMyPokemon } from "~/hooks/MyPokemonProvider";
import { IMyPokemon, IPokemon } from "~/interfaces/Pokemon";
import Loading from "~/components/atoms/Loading";
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

const TOP_MOVE_LIST_COUNT = 5;

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  const [openedModal, setOpenedModal] = useState<OpenedModal>();
  const { data, loading } = useQuery<Query>(GET_POKEMON, {
    variables: { name },
  });
  const [myPokemonList, dispatch] = useMyPokemon();
  const [error, setError] = useState("");

  const ownedPokemon: IMyPokemon[] = useMemo(
    () => myPokemonList.filter((myPokemon) => myPokemon.pokemonName === name),
    [myPokemonList, name],
  );

  const handleGatcha = () => {
    setOpenedModal(Math.random() >= 0.5 ? "success" : "failed");
  };

  const handleSavePokemon = (petName: string) => {
    if (!petName || !data?.pokemon?.id || !data.pokemon.name) {
      setError(`Name is empty`);
      return;
    }

    if (myPokemonList.find((value) => value.name === petName)) {
      setError(`${petName} is already exist`);
      return;
    }

    const newPokemon: IPokemon = {
      id: data.pokemon.id,
      pokemonName: data.pokemon.name,
      name: petName,
    };
    dispatch({ type: "ADD", payload: newPokemon });
    history.push("/my-pokemon");
  };

  return (
    <Suspense fallback={<Loading full />}>
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
              <OwnedText>Owned: {ownedPokemon.length}</OwnedText>
              <ChipList data={data?.pokemon?.types?.map((type) => type?.type?.name) as string[]} />
              <MoveListText>Top Move List</MoveListText>
              <ChipList
                color={uiTheme.color.boulder}
                data={data?.pokemon?.moves?.slice(0, TOP_MOVE_LIST_COUNT).map((move) => move?.move?.name) as string[]}
              />
            </InfoSection>
            <GatchaButton onClick={handleGatcha} />
          </>
        ) : (
          <Loading />
        )}
      </Container>
      <SuccessModal
        error={error}
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

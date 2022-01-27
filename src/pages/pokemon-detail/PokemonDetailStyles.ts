import styled from "@emotion/styled";
import PokeButton from "~/components/molecules/PokeButton";

export const Container = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

export const PokemonImage = styled.img`
  width: 80%;
`;

export const InfoSection = styled.div`
  padding: 1.5rem 1.5rem 50px;
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 12px 12px 0 0;
  text-align: left;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const OwnedText = styled.span`
  font-size: 0.675rem;
  margin-top: 0.25rem;
`;

export const IdText = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.silverChalice};
`;

export const MoveListText = styled.h2`
  margin-top: 1rem;
  font-size: 1.125rem;
`;

export const GatchaButton = styled(PokeButton)`
  position: sticky;
  bottom: 1rem;
  display: inline-flex;
`;

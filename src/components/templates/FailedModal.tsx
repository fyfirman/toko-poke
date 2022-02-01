import React from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { modalStyles } from "~/styles/ModalStyle";
import CryingPikachu from "~/assets/images/crying-pikachu.jpg";
import Button from "../atoms/Button";

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.25rem;
  & > span {
    color: ${({ theme }) => theme.color.mulberry};
    text-transform: capitalize;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 0.625rem;
`;

interface FailedModalProps extends Modal.Props {
  pokemonName: string;
}

const FailedModal: React.FC<FailedModalProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { pokemonName, onRequestClose, ...rest } = props;
  return (
    <Modal contentLabel="Success" onRequestClose={onRequestClose} style={modalStyles} {...rest}>
      <Image alt={pokemonName} src={CryingPikachu} />
      <Header>
        <span>{pokemonName}</span> is flee
      </Header>
      <Button onClick={onRequestClose as any}>Close</Button>
    </Modal>
  );
};

export default FailedModal;

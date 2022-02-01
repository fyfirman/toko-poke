import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { modalStyles } from "~/styles/ModalStyle";
import Button from "../atoms/Button";
import Input from "../molecules/Input";

const Header = styled.h1`
  font-size: 1.5rem;
  & > span {
    color: ${({ theme }) => theme.color.mulberry};
    text-transform: capitalize;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const NameInput = styled(Input)`
  margin-top: 1.5rem;
  margin-bottom: 0.625rem;
`;

const ErrorText = styled.span`
  margin-top: 0.5rem;
  color: red;
`;

interface SuccessModalProps extends ReactModal.Props {
  pokemonName: string;
  imgSrc: string;
  onSavePokemon?: (name: string) => void;
  error?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = (props) => {
  const { pokemonName, imgSrc, onSavePokemon, error, ...rest } = props;

  const [name, setName] = useState("");

  const handleSavePokemon = useCallback(() => {
    if (onSavePokemon) {
      onSavePokemon(name);
    }
  }, [name, onSavePokemon]);

  return (
    <Modal contentLabel="Success" style={modalStyles} {...rest}>
      <Image alt={pokemonName} src={imgSrc} />
      <Header>
        You got <span>{pokemonName}</span>!
      </Header>
      <Form>
        <NameInput label="Please give it a name" name="name" onChange={(e) => setName(e.target.value)} />
        <Button onClick={handleSavePokemon}>Save</Button>
        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </Modal>
  );
};

export default SuccessModal;

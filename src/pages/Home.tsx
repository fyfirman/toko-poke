import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: "red";
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Container>
      <h1>HomePage</h1>
    </Container>
  );
};

export default Home;

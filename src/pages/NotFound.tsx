import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: "red";
`;

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = (props) => {
  return (
    <Container>
      <h1>NotFoundPage</h1>
    </Container>
  );
};

export default NotFound;

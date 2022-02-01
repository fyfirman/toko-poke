import styled from "@emotion/styled";
import React from "react";
import CryingPikachu from "~/assets/images/crying-pikachu.jpg";

type State = {
  hasError: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <img alt="Error" src={CryingPikachu} />
          <Title>Something went wrong.</Title>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import styled from "@emotion/styled";

const Container = styled.div`
  color: hotpink;
`;

function App() {
  return (
    <Container>
      <h2>Welcome to React App!</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </Container>
  );
}

export default App;

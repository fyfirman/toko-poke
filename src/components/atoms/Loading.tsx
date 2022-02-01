import styled from "@emotion/styled";
import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderSizeProps } from "react-spinners/interfaces";
import theme from "~/lib/theme";

const FullContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
`;

type LoadingProps = LoaderSizeProps & {
  full?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ full, ...rest }) => {
  if (full) {
    return (
      <FullContainer>
        <ClipLoader color={theme.color.amethyst} {...rest} />
      </FullContainer>
    );
  }

  return <ClipLoader color={theme.color.amethyst} {...rest} />;
};

export default Loading;

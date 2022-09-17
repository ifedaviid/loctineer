import React from "react";
import styled from "styled-components";

const Styledh1 = styled.h1`
  font-size: 50px;
  text-align: center;
  > a {
    color: #761d38;
  }
`;

const Title = ({ children }) => {
  return <Styledh1>{children}</Styledh1>;
};

export default Title;

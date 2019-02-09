import React, { Component } from "react";

import styled, { css } from "styled-components";

type MyProps = {
  value: number | string;
  onClick: () => void;
};
const ButtonContainer = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  ${css`
    &:focus {
      outline: none;
    }
  `}
`;

export default function Square(props: MyProps) {
  return (
    <ButtonContainer onClick={props.onClick}>{props.value}</ButtonContainer>
  );
}

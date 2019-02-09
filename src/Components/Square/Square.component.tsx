import React, { Component } from "react";

import styled from 'styled-components/native'

type MyProps = {
  value: number | string;
  onClick: () => void;
};
const ButtonWrapper = styled.TouchableOpacity`
  background: #fff;
  border: 1px solid #999;
  line-height: 80px;
  height: 80px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  width: 80px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export default function Square(props: MyProps) {
  return (
    <ButtonWrapper onPress={props.onClick}>
      <ButtonText>{props.value}</ButtonText>
    </ButtonWrapper>
  );
}

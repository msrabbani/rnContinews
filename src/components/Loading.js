import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="orange" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

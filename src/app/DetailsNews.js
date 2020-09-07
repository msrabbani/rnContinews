import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('screen').width;

export default function DetailsNews({route, navigation}) {
  const {title, urlToImage, publishedAt, author, content} = route.params.data;
  return (
    <Container>
      <Title>{title}</Title>
      <Text>publish at: {publishedAt}</Text>
      <Text>author: {author}</Text>
      <ImageStyle source={{uri: urlToImage}} />
      <Text>{content}</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ddf5ff;
`;
const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;
const Text = styled.Text`
  font-size: 24px;
`;

const ImageStyle = styled.Image`
  width: ${screenWidth * 0.95};
  height: 220px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

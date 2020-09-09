import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {formatDate} from '../utils/helpers';

const screenWidth = Dimensions.get('screen').width;

export default function DetailsNews({route, navigation}) {
  const {title, createdAt, urlImage, author, description} = route.params.data;
  return (
    <Container>
      <Title>{title}</Title>
      <PublishText>Publish: {formatDate(createdAt)}</PublishText>
      <ImageStyle source={{uri: urlImage}} />
      <AuthorText>By: {author}</AuthorText>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ddf5ff;
  padding: 10px;
`;
const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;
const PublishText = styled.Text`
  font-size: 12px;
  text-align: center;
`;
const AuthorText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  color: #01a6bc;
`;
const Description = styled.Text`
  font-size: 18px;
  margin-bottom: 50px;
`;
const ImageStyle = styled.Image`
  width: ${screenWidth * 0.95};
  height: 220px;
  border-radius: 5px;
  margin-vertical: 20px;
  justify-content: center;
  align-items: center;
`;

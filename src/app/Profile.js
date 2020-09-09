import React, {useContext} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvider';

export default function Profile({navigation}) {
  const {user, signout} = useContext(AuthContext);
  return (
    <Container>
      <Text>Email: {user.email}</Text>
      <Text>uid: {user.uid}</Text>
      <Button buttonText={'Sign Out'} onPress={() => signout()} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

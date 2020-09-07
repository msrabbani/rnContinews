import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signin} = useContext(AuthContext);

  return (
    <Container>
      <TextinputWrapper>
        <Icon name="duck" color={'#333'} size={25} style={{marginLeft: 12}} />
        <TextInputStyle
          value={email}
          placeholder="Email"
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
      </TextinputWrapper>

      <TextinputWrapper>
        <Icon name="duck" color={'#333'} size={25} style={{marginLeft: 12}} />
        <TextInputStyle
          value={password}
          placeholder="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </TextinputWrapper>
      <Button buttonText={'Sign In'} onPress={() => signin(email, password)} />
      <TextStyle>Don't have an account?</TextStyle>
      <TextStyleClick onPress={() => navigation.navigate('SignUp')}>
        {' '}
        Create an account
      </TextStyleClick>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text``;

const TextStyleClick = styled.Text`
  color: #fc9b1b;
  font-weight: 600;
`;

const TextInputStyle = styled.TextInput`
  font-size: 15px;
  padding: 10px;
  background-color: #ffff;
  width: 60%;
`;

const TextinputWrapper = styled.View`
  flex-direction: row;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 10px;
  align-items: center;
`;

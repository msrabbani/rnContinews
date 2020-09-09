import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvider';

import {
  ContainerSign,
  TextStyle,
  TextInputStyle,
  TextinputWrapper,
} from '../styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fullField = email === '' || password === '';

  const {signup} = useContext(AuthContext);
  return (
    <ContainerSign>
      <TextinputWrapper>
        <Icon
          name="account"
          color={'#333'}
          size={20}
          style={{marginLeft: 12}}
        />
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
        <Icon name="eye" color={'#333'} size={20} style={{marginLeft: 12}} />
        <TextInputStyle
          value={password}
          placeholder="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </TextinputWrapper>

      <Button
        buttonText={'Sign Up'}
        onPress={() => signup(email, password)}
        disabled={fullField}
      />
    </ContainerSign>
  );
}

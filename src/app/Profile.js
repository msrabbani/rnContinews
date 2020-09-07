import React, {useContext} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvider';

export default function Profile({navigation}) {
  const {user, signout} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>{user.uid}</Text>
      <Button buttonText={'Sign Out'} onPress={() => signout()} />
    </SafeAreaView>
  );
}

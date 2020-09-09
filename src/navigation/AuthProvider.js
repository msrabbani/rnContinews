import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signin: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then((data) => {
                Alert.alert('Welcome', `${data.user.email}`, [
                  {
                    text: 'Ok',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                ]);
              })
              .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert(
                    'Ops...',
                    'That email address is already in use!',
                    [
                      {
                        text: 'Ok',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                    ],
                  );
                }

                if (error.code === 'auth/invalid-email') {
                  Alert.alert('Ops...', 'That email address is invalid!', [
                    {
                      text: 'Ok',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                  ]);
                }
                console.error(error);
              });
          } catch (e) {
            Alert.alert('Ops...', 'Please try again later', [
              {
                text: 'Ok',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
            ]);
          }
        },
        signup: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then((data) => {
                Alert.alert('Success Sign Up !', `${data.user.email}`, [
                  {
                    text: 'Ok',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                ]);
              });
          } catch (e) {
            console.log(e);
          }
        },
        signout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

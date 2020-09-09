import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

export const ListWrapper = styled.View`
  flex: 1;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ddf5ff;
`;

// ======================================= Style for NewsList
export const ActivityIndicatorStyle = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
export const Subtitle = styled.Text`
  font-size: 11px;
`;
export const Card = styled.TouchableOpacity`
  padding: 5px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 3px 3px #00000029;
`;
export const ImageStyle = styled.Image`
  width: ${widthScreen * 0.95};
  height: 220px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// ======================================= Style for SearchBar
export const ContainerSB = styled.View`
  align-items: center;
`;
export const TextinputWrapperSB = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 5px;
`;
export const TextinputStyleSB = styled.TextInput`
  width: 80%;
  font-size: 15px;
  margin-left: 10px;
  padding: 10px;
`;
export const SearchWrapper = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

// ======================================= Style for Loading

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// ======================================= Style for Button

export const ButtonWrapper = styled.TouchableOpacity`
  height: ${heightScreen / 18}px;
  width: ${widthScreen / 2}px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: orange;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  letter-spacing: 1px;
  color: #ffff;
  font-weight: 600;
`;

// ======================================= Style for SignIn & SignUp

export const ContainerSign = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextStyle = styled.Text``;

export const TextStyleClick = styled.Text`
  color: #fc9b1b;
  font-weight: 600;
`;

export const TextInputStyle = styled.TextInput`
  font-size: 15px;
  padding: 10px;
  background-color: #ffff;
  width: 60%;
`;

export const TextinputWrapper = styled.View`
  flex-direction: row;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 10px;
  align-items: center;
`;

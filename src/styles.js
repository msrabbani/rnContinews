import styled from 'styled-components/native';

// ======================================= Style for SearchBar
export const ContainerSB = styled.View`
  align-items: center;
  justify-content: center;
`;
export const TextinputWrapperSB = styled.View`
  flex-direction: row;
  width: 95%;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 10px;
`;
export const TextinputStyleSB = styled.TextInput`
  width: 60%;
  font-size: 15px;
  margin-left: 10px;
  padding: 10px;
`;
export const UrutkanWrapperSB = styled.TouchableOpacity`
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UrutkanTextSB = styled.Text`
  width: 60%;
  margin-right: 3px;
  color: orange;
  font-weight: 600;
  text-align: center;
`;

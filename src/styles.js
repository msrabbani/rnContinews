import styled from 'styled-components/native';

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

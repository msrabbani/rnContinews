import React from 'react';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import {
  ContainerSB,
  TextinputWrapperSB,
  TextinputStyleSB,
  SearchWrapper,
} from './../styles';

const SearchBar = ({text, onPress, onChangeText, value}) => {
  return (
    <ContainerSB>
      <TextinputWrapperSB>
        <TextinputStyleSB
          placeholder="Search Title"
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          value={value}
          autoCorrect={false}
        />
        <SearchWrapper onPress={onPress}>
          <Icon name="search" size={15} />
        </SearchWrapper>
      </TextinputWrapperSB>
    </ContainerSB>
  );
};

export default SearchBar;

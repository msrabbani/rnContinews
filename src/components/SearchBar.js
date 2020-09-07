import React from 'react';
// import Icon from 'react-native-vector-icons/dist/Fontisto';
import {
  ContainerSB,
  TextinputWrapperSB,
  TextinputStyleSB,
  UrutkanWrapperSB,
  UrutkanTextSB,
} from './../styles';

const SearchBar = ({text, onPress, onChangeText, value}) => {
  return (
    <ContainerSB>
      <TextinputWrapperSB>
        <TextinputStyleSB
          placeholder="Search Title"
          underlineColorAndroid="transparent"
          maxLength={25}
          onChangeText={onChangeText}
          value={value}
        />
        <UrutkanWrapperSB onPress={onPress}>
          <UrutkanTextSB
            numberOfLines={1}
            ellipsizeMode={'head'}
            allowFontScaling={false}>
            {text}
          </UrutkanTextSB>
          {/* <Icon name="angle-down" size={13} color={'orange'} /> */}
        </UrutkanWrapperSB>
      </TextinputWrapperSB>
    </ContainerSB>
  );
};

export default SearchBar;

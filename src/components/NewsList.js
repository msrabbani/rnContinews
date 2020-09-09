import React from 'react';
import {FlatList, Dimensions, View} from 'react-native';
import styled from 'styled-components/native';
import {formatDate} from '../utils/helpers';

const screenWidth = Dimensions.get('screen').width;

export default function NewsList(props) {
  const renderItems = ({item, i}) => {
    return (
      <Card onPress={() => props.onPressItem(item)}>
        <ImageStyle source={{uri: item.urlImage}} />
        <Title>{item.title}</Title>
        <Subtitle>Publish Date: {formatDate(item.createdAt)}</Subtitle>
      </Card>
    );
  };
  const BottomView = () => {
    return (
      <View>
        {props.fetchingStatus ? (
          <ActivityIndicatorStyle
            size="large"
            color="grey"
            style={{marginLeft: 6, marginVertical: 10}}
          />
        ) : null}
      </View>
    );
  };

  return (
    <Container>
      {props.isLoading ? (
        <ActivityIndicatorStyle size="large" />
      ) : (
        <FlatList
          data={props.data}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          onEndReachedThreshold={2}
          ListFooterComponent={BottomView()}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}

const ActivityIndicatorStyle = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
`;
const Container = styled.SafeAreaView`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
const Subtitle = styled.Text`
  font-size: 11px;
`;
const Card = styled.TouchableOpacity`
  padding: 5px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 3px 3px #00000029;
`;
const ImageStyle = styled.Image`
  width: ${screenWidth * 0.95};
  height: 220px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

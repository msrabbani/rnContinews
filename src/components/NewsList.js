import React from 'react';
import {FlatList, View} from 'react-native';
import {formatDate} from '../utils/helpers';
import {
  ActivityIndicatorStyle,
  Container,
  Title,
  Subtitle,
  Card,
  ImageStyle,
} from '../styles';

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

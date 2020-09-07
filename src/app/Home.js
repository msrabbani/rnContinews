import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

var url =
  'http://newsapi.org/v2/top-headlines?' +
  'country=id&' +
  'apiKey=6806a00fdf2e4ca592e01dcaf1f670ca';
var req = new Request(url);

const category = [
  {id: 1, name: 'Technology'},
  {id: 2, name: 'Entertainment'},
  {id: 3, name: 'General'},
  {id: 4, name: 'Health'},
  {id: 5, name: 'Science'},
  {id: 6, name: 'Sports'},
];

export default function Auth({navigation}) {
  const [dataApi, seDataApi] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const fetchApi = () => {
    fetch(req)
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          seDataApi(res.articles);
          setTotalRes(res.totalResults);
        }
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <SearchBar />
      <ListWrapper>
        <NewsList
          data={dataApi}
          onPressItem={(data) => navigation.navigate('DetailsNews', {data})}
          // isLoading={isLoading}
          // fetchingStatus={fetchingStatus}
          // onLoad={onLoad}
          // getApi={()=>getApi(page)}
        />
      </ListWrapper>
    </Container>
  );
}

const ListWrapper = styled.View`
  flex: 1;
`;

const CategoryWrapper = styled.View`
  height: 40%;
  background-color: red;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ddf5ff;
`;
const Text = styled.Text`
  font-size: 24;
`;
const ButtonCategory = styled.TouchableOpacity``;

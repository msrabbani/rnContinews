import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';
import Loading from '../components/Loading';

import {Container, ListWrapper} from './../styles';

let url = 'https://afternoon-cove-94635.herokuapp.com/news';
let req = new Request(url);

export default function Auth({navigation}) {
  const [dataApi, seDataApi] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchAllNews = () => {
    setIsLoading(true);
    fetch(req)
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setIsLoading(false);
          seDataApi(res.data);
          setTotalRes(res.totalNews);
        }
      });
  };

  const fetchSearchApi = (keyword) => {
    setIsLoading(true);
    fetch(`http://localhost:7777/news?title=${keyword}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, '<<<res');
        if (res.status) {
          setIsLoading(false);
          seDataApi(res.data);
          setTotalRes(res.totalNews);
        } else {
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <Container>
      <SearchBar
        onPress={() => fetchSearchApi(searchKeyword)}
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
      />
      <ListWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <NewsList
            data={dataApi}
            onPressItem={(data) => navigation.navigate('DetailsNews', {data})}
          />
        )}
      </ListWrapper>
    </Container>
  );
}

import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import NewsList from '../components/NewsList';
import Loading from '../components/Loading';

let url = 'https://afternoon-cove-94635.herokuapp.com/news?category=Technology';
let req = new Request(url);

export default function Technology({navigation}) {
  const [dataApi, seDataApi] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = () => {
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

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
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

const ListWrapper = styled.View``;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ddf5ff;
`;

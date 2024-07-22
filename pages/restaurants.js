import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/headertwo';
import SearchBar from '../components/SearchBarTwo';
import FilterMenu from '../components/FilterMenu';
import RestaurantCard from '../components/RestaurantCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  padding: 20px;
`;

const FiltersSection = styled.div`
  width: 20%;
  padding-right: 20px;
`;

const RestaurantsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Restaurants = () => {
  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>

      <Header />
      <SearchBar />

      <Container>
        <MainContent>
          <FiltersSection>
            <FilterMenu />
          </FiltersSection>
          <RestaurantsSection>
            <RestaurantGrid>
              <RestaurantCard
                image="/images/r3.jpg"
                name="Cafe 1"
                cuisine="Thai Cuisine"
              />
              <RestaurantCard
                image="/images/r6.jpg"
                name="Cafe 2"
                cuisine="Sri Lankan Cuisine"
              />
              {/* Add more RestaurantCards as needed */}
            </RestaurantGrid>
          </RestaurantsSection>
        </MainContent>
      </Container>
    </>
  );
};

export default Restaurants;

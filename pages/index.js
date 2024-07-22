import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/header';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
`;

const BackgroundSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background: url('/images/food.png') no-repeat center center;
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Subtitle = styled.p`
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  font-size: 18px;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>FiveStarEat</title>
        <meta name="description" content="Find the perfect restaurant from 10,000+ restaurants all over the world right at your fingertips!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <BackgroundSection>
          <Overlay>
            <Title>FiveStarEat.com</Title>
            <SearchBar />
            <Subtitle>Find the perfect restaurant from 10,000+ restaurants all over the world right at your fingertips!</Subtitle>
          </Overlay>
        </BackgroundSection>
        <MainContent />
      </Container>
    </>
  );
};

export default Home;

import { styled } from 'styled-components';
import Contact from './ContactForm';
import Background from './Background';
import Footer from './Footer';

const Home = () => {
  const StyledTitle = styled.h1`
    padding: 8px 20px;
    font-size: 98px;
    font-family: 'Oswald';
    text-align: center;
    color: #a6e3d6;
    position: fixed;
    display: block;
    z-index: 100;
  `;

  const Title = ({ heading }: { heading: string }) => {
    return <StyledTitle>{heading}</StyledTitle>;
  };

  return (
    <Background>
      <>
        <Title heading="LC" />
        <Footer>
          <Contact />
        </Footer>
      </>
    </Background>
  );
};

export default Home;

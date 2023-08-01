import { keyframes, styled } from 'styled-components';
import Contact from './ContactForm';

const Home = () => {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight),
      );
    },
    false,
  );

  // const GrandContainer = styled.div``

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

  const Title = ({ heading }) => {
    return <StyledTitle>{heading}</StyledTitle>;
  };

  const Background = styled.div`
    background: #262740;
    height: 300vh;
    z-index: -100;
  `;

  const backgroundSlide = keyframes`
    to {
      width: 100vw;
    }
  `;

  const SlidingBackground = styled.div`
    background: #3c3f58;
    height: 300vh;
    width: 25vw;

    position: absolute;
    top: 0;
    right: 0;

    animation: ${backgroundSlide} 1s linear;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  `;

  const Footer = styled.footer`
    height: 30vh;
    width: 100%;
    position: relative;
    top: 270vh;
    z-index: 100;
  `;
  return (
    <>
      <Background>
        <Title heading="LC" />
        {/* <Title heading="web developer" /> */}
        <Footer>
          <Contact />
        </Footer>
        <SlidingBackground />
      </Background>
    </>
  );
};

export default Home;

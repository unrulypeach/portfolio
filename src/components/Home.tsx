import { styled } from 'styled-components';
import Contact from './ContactForm';
import Background from './Background';
import StyledFooter from './Footer';
import Project from './Project';
import SectionContainer from './SectionContainer';

const StyledTitle = styled.h1`
  padding: 8px 20px;
  font-size: 98px;
  font-family: 'Oswald';
  color: #a6e3d6;
  display: block;
  z-index: 100;
`;

const Frontpage = styled.div`
  height: 100vh;
  color: #a6e3d6;
  font-size: 68px;
  text-align: center;
`;
const Home = () => {
  const Title = ({ heading }: { heading: string }) => {
    return <StyledTitle>{heading}</StyledTitle>;
  };

  return (
    <Background>
      <>
        <Title heading="LC" />
        <Frontpage> Hi, I'm a front end developer!</Frontpage>
        {/* <Title heading="About me" /> */}
        <Title heading="Projects" />
        <SectionContainer>
          <>
            <Project
              title="Memory Card Game"
              imgLink="/images/memory-card-sc1.png"
              summary="Built with React and Tailwind. The game uses Blizzard's Hearthstone for its content. This game will test your memory, so don't click on a hero more than once!"
              tools={['React', 'Tailwind CSS', 'Hearthstone API']}
              liveLink="https://unrulypeach.github.io/memory-card/"
              repoLink="https://github.com/unrulypeach/memory-card"
            />
            <Project
              title="To Do App"
              imgLink="/images/todo-app-sc1.png"
              summary="A Javascript App to organize your life. Integrated with Firebase Authentication and Firestore to allow users to save their data."
              tools={['Javascript', 'Firebase', 'Webpack']}
              liveLink=""
              repoLink="https://github.com/unrulypeach/to-do-app"
            />
          </>
        </SectionContainer>
        <StyledFooter>
          <>
            <Title heading="Contact" />
            <Contact />
          </>
        </StyledFooter>
      </>
    </Background>
  );
};

export default Home;

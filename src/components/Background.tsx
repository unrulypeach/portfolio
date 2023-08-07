import { keyframes, styled } from 'styled-components';

window.addEventListener(
  'scroll',
  () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  },
  false,
);

const StyledBackground = styled.div`
  background: #262740;
  height: 350vh;
  z-index: -100;
`;
const backgroundSlide = keyframes`
to {
  width: 100vw;
}
`;
const SlidingBackground = styled.div`
  background: #3c3f58;
  height: 350vh;
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

const Background = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledBackground>
      {children}
      <SlidingBackground />
    </StyledBackground>
  );
};

export default Background;

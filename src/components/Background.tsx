import { keyframes, styled } from 'styled-components';

const Background = ({ children }: { children: JSX.Element }) => {
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

  const Background = styled.div`
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

  return (
    <Background>
      {children}
      <SlidingBackground />
    </Background>
  );
};

export default Background;

import { styled } from 'styled-components';

const Footer = styled.footer`
  height: fit-content;
  width: 100%;
  position: relative;
  top: 70vh;
  z-index: 100;

  background: #3c3f58;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledFooter = ({ children }: { children: JSX.Element }) => {
  return <Footer>{children}</Footer>;
};

export default StyledFooter;

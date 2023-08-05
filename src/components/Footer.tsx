import { styled } from 'styled-components';

const Footer = ({ children }: { children: JSX.Element }) => {
  const Footer = styled.footer`
    height: 30vh;
    width: 100%;
    position: relative;
    top: 300vh;
    z-index: 100;

    display: flex;
    justify-content: center;
  `;

  return <Footer>{children}</Footer>;
};

export default Footer;

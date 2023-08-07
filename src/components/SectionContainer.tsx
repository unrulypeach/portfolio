import { styled } from 'styled-components';

const StyledSection = styled.section`
  padding-left: 50px;
  z-index: 10;
  position: relative;
`;

const SectionContainer = ({ children }: { children: JSX.Element }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default SectionContainer;

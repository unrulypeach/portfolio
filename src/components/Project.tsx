import { styled } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 6vh 0;
`;

const StyledLeft = styled.div``;

const StyledImage = styled.img`
  z-index: inherit;
  max-width: 50vw;
  height: auto;
`;

const StyledRight = styled.div`
  margin-left: 3vw;
  max-width: 20vw;
`;

const StyledTitle = styled.h2`
  height: 15vh;
  font-size: 48px;
  color: #a6e3d6;
`;

const DescriptionContainer = styled.div`
  display: flex;
`;

const InnerRight = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
`;

const StyledSummary = styled.div`
  color: #3bba9c;
  background: #262740;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  right: 20px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToolsText = styled.span`
  color: #3bba9c;
  padding: 8px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 8px;
  background: #2e3047;
  color: #3bba9c;
`;

type ProjectProps = {
  title: string;
  imgLink: string;
  summary: string;
  tools: Array<string>;
  liveLink: string;
  repoLink: string;
};

const Project = ({ title, imgLink, summary, tools, liveLink, repoLink }: ProjectProps) => {
  // const StyledSubTitle = styled.span``;

  return (
    <StyledContainer>
      <StyledLeft>
        <StyledImage src={imgLink} alt="" />
      </StyledLeft>
      <StyledRight>
        <StyledTitle>{title}</StyledTitle>
        <DescriptionContainer>
          <StyledSummary>{summary}</StyledSummary>
          <InnerRight>
            <ToolsContainer>
              {tools.map((i) => {
                return <ToolsText>{i}</ToolsText>;
              })}
            </ToolsContainer>
            <LinkContainer>
              <StyledLink href={liveLink}>LIVE</StyledLink>
              <StyledLink href={repoLink}>REPO</StyledLink>
            </LinkContainer>
          </InnerRight>
        </DescriptionContainer>
      </StyledRight>
    </StyledContainer>
  );
};

export default Project;

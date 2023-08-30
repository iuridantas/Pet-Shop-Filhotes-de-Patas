import { LoaderContainer, StyledSVG, StyledCircle } from './style';

export function Loader() {
  return (
    <LoaderContainer>
      <StyledSVG viewBox="25 25 50 50">
        <StyledCircle r="20" cy="50" cx="50" />
      </StyledSVG>
    </LoaderContainer>
  );
}

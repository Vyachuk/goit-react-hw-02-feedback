import { SectionTitle, Wrapper } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <Wrapper>
      <SectionTitle>Please leave feedback</SectionTitle>
      {children}
    </Wrapper>
  );
};

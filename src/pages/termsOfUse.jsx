import { Box, Container, Typography, styled } from "@mui/material";
import PagesHero from "../components/News/pagesHero";
import FAQ from "../components/faq.";
import { TermsOfuse } from "../config/termsOfUse.config";

const StyledText = styled(Typography)({
  fontSize: "1rem",
  marginTop: "2rem",
  marginBottom: "2rem",
});
const StyledTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "1rem",
});

const TermsOfUse = () => {
  return (
    <>
      <PagesHero title={"TERMS OF USE"} height={["45vh", "45vh"]} />
      <div className="full mb-[250px]">
        <Container>
          {TermsOfuse.map((policy, i) => (
            <Box fontFamily={"Plus Jakarta Sans"} my={5} key={i}>
              <StyledTitle>
                {i + 1} {policy.title}
              </StyledTitle>
              {policy.paragraphs.map((subPolicy, i) => (
                <StyledText key={i}>{subPolicy.text}</StyledText>
              ))}
            </Box>
          ))}
        </Container>
      </div>
      <FAQ />
    </>
  );
};
export default TermsOfUse;
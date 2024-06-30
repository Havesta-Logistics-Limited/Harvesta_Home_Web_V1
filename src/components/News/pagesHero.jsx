import React from "react";
import { Stack, Box, styled, Typography } from "@mui/material";
import { colors } from "../../utils/globals";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PagesHero = ({ image, title, des }) => {
  return (
    <>
      <StyledBox
        height={["40vh", "50vh"]}
        sx={{
          background: image ? `url(${image})` : colors.primary,
          backgroundSize: ["cover", "100% 100%"],
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent={"center"}
          textTransform="capitalize"
          p={2}
          width={["90%", "70%"]}
          textAlign={"center"}
        >
          <Typography
            fontSize={["1rem", "2rem"]}
            color={colors.WHITE}
            fontWeight={700}
            letterSpacing={".3rem"}
          >
            {title}
          </Typography>
          <Typography
            fontSize={["0.7rem", "1rem"]}
            color={colors.WHITE}
            fontWeight={700}
            letterSpacing={".3rem"}
            mt={2}
          >
            {des}
          </Typography>
        </Stack>
      </StyledBox>
    </>
  );
};

export default PagesHero;

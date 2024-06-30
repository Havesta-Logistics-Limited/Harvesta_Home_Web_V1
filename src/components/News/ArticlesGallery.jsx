import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { colors } from "../../utils/globals";
import { Link } from "react-router-dom";

const StyledGridElements = styled(Box)({
  width: "100%",
});

const ArticlesGallery = ({ data, gridWidth = "300px" }) => {
  const GridContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${gridWidth}, 1fr))`,
    gridGap: "30px",
    alignItems: "stretch",

    "@media screen and (max-width: 1200px)": {
      gridGap: "14px",
      gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
    },
  });

  return (
    <Box marginTop={[6, 6]} marginBottom={[6, 8]}>
      <GridContainer>
        {data.map((ele, index) => (
          <StyledGridElements key={index}>
            <Link to={`/news/${ele.des}`}>
              <Card
                sx={{
                  backgroundColor: `${colors.harvestaLightGreen}`,
                  borderRadius: "25px",
                  // border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                  borderColor: `grey`,
                }}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="200"
                  image={ele.img}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ paddingX: 3 }}>
                  {ele.des && (
                    <Stack
                      direction="column"
                      textAlign={"center"}
                      alignItems={"center"}
                    >
                      <Typography
                        fontWeight="500"
                        color={colors.WHITE}
                        textTransform={"capitalize"}
                        fontFamily={"Plus Jakarta Sans"}
                      >
                        {ele.des}
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        my={2}
                      >
                        <Typography
                          fontSize="0.8rem"
                          color={colors.WHITE}
                          fontFamily={"Plus Jakarta Sans"}
                        >
                          {ele.paragraph}
                        </Typography>
                        {/* <Avatar sx={{ background: `${colors.harvestaYellow}` }}>
                        <IoIosArrowForward color={colors.primary} />
                      </Avatar> */}
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <Button
                          variant="contained"
                          sx={{
                            fontFamily: "Plus Jakarta Sans",
                            backgroundColor: colors.primary,
                            "&:hover": {
                              backgroundColor: colors.harvestaLightGreen,
                            },
                          }}
                        >
                          Read more
                        </Button>
                      </Stack>
                    </Stack>
                  )}
                </CardContent>
              </Card>
            </Link>
          </StyledGridElements>
        ))}
      </GridContainer>
    </Box>
  );
};

export default ArticlesGallery;

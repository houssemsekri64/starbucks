import { Button, Container, Typography } from "@mui/material";
import {
  MainImage,
  StyledButton,
  StyledCard,
  StyledCardContent,
} from "../../themes/CustomStyle";

function Main() {
  return (
    <main>
      <Container maxWidth="xl">
        <StyledCard sx={{ backgroundColor: "yellow.main" }}>
          <MainImage
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83413.jpg"
            component="img"
            alt="Starbucks rewards and Delta SkyMiles"
          />
          <StyledCardContent>
            <Typography
              variant="h4"
              color="secondary.main"
              sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 2 }}
              textAlign="center"
            >
              Nitro your way
            </Typography>
            <Typography
              variant="body2"
              color="secondary.main"
              sx={{ fontSize: { xs: "22px", md: "24px" }, mb: 4 }}
              textAlign="center"
            >
              Try the new Cinnamon Caramel Cream Nitro Cold Brew or go for the
              Vanilla Sweet Cream Nitro Cold Brew.
            </Typography>
            <StyledButton
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 50 }}
            >
              Order now
            </StyledButton>
          </StyledCardContent>
        </StyledCard>
        <StyledCard sx={{ backgroundColor: "pink.light" }}>
          <StyledCardContent>
            <Typography
              variant="h4"
              color="secondary.main"
              sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 2 }}
              textAlign="center"
            >
              Carefree and cool
            </Typography>
            <Typography
              variant="body2"
              color="secondary.main"
              sx={{ fontSize: { xs: "22px", md: "24px" }, mb: 4 }}
              textAlign="center"
            >
              Our Pink Drink Starbucks Refreshers® beverage with real strawberry
              pieces and coconutmilk is a spring-inspired delight.
            </Typography>
            <StyledButton
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 50 }}
            >
              Order now
            </StyledButton>
          </StyledCardContent>
          <MainImage
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83418.png"
            component="img"
            alt="Starbucks rewards and Delta SkyMiles"
          />
        </StyledCard>
        <StyledCard sx={{ backgroundColor: "pink.light" }}>
          <MainImage
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83267.jpg"
            component="img"
            alt="Starbucks rewards and Delta SkyMiles"
          />
          <StyledCardContent>
            <Typography
              variant="h4"
              color="secondary.main"
              sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 2 }}
              textAlign="center"
            >
              Hearty on the go
            </Typography>
            <Typography
              variant="body2"
              color="secondary.main"
              sx={{ fontSize: { xs: "22px", md: "24px" }, mb: 4 }}
              textAlign="center"
            >
              Grab a deliciously filling Double-Smoked Bacon, Cheddar & Egg
              Sandwich or Bacon & Gruyère Egg Bites.
            </Typography>
            <StyledButton
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 50 }}
            >
              Order now
            </StyledButton>
          </StyledCardContent>
        </StyledCard>
      </Container>
    </main>
  );
}

export default Main;

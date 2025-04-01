import React from "react";
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid, Button } from "@mui/material";
import Footer from "./Footer";

const orphanages = [
  {
    name: "Girls Orphanage",
    image: "./girls_org.jpg", // Replace with actual image URLs
  },
  {
    name: "Children's Orphanage",
    image: "./children_org.jpg",
  },
  {
    name: "Handicapped Orphanage",
    image: "handicapped_org.jpg",
  },
  {
    name: "General Orphanage",
    image: "org.jpg",
  },
];

function DonorOrphanages() {
  const handleDonate = (orphanageName) => {
    alert(`Redirecting to donation page for: ${orphanageName}`);
    // Here you can navigate to a donation form/page (e.g., navigate(`/donate/${orphanageName}`))
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        
      }}
    >
      {/* Main Content */}
      <Container  component="main" maxWidth="md" sx={{ flexGrow: 1, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Orphanages
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {orphanages.map((orphanage, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: "10px", bgcolor: "white", textAlign: "center" }}>
                <CardMedia component="img" height="200" image={orphanage.image} alt={orphanage.name} />
                <CardContent>
                  <Typography variant="h6">{orphanage.name}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => handleDonate(orphanage.name)}
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%", mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default DonorOrphanages;

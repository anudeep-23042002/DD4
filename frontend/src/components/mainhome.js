import React from 'react'
import { Carousel,Container, Row, Col } from 'react-bootstrap';
import { Grid, Card, CardContent, CardHeader, Typography,Box,Button } from '@mui/material';
import gambar1 from '../pictures/image1.jpg';
import gambar2 from '../pictures/image2.jpg';
import gambar3 from '../pictures/image3.jpg';
function MainHome() {
  const steps = [
    {
      number: 1,
      title: 'List Your Surplus Food',
      description: "Got extra food? Don't let it go to waste. List your surplus food easily on our platform.",
    },
    {
      number: 2,
      title: 'Notification',
      description: "We'll notify local community organizations and individuals in need of your generous donation.",
    },
    {
      number: 3,
      title: 'Food Pick-up',
      description: "Our network of volunteers or recipients will pick up and distribute the food, ensuring it reaches those in need.",
    },
  ];
  const impactNumbers = [
    { label: 'Food Saved', value: '5,000 lbs' },
    { label: 'Families Fed', value: '300' },
    { label: 'Generous Donors', value: '1,000' },
  ];
  const testimonials = [
    {
      text: "Thanks to Food Rescue and Redistribution Platform, we've been able to feed 50 families in our local community each week. It's a game-changer.",
      author: 'Local Community Center',
    },
  ];
  return (
     <div>
      <Box>
        
      <Carousel >
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        <div>
        <p style={{textAlign:'center',fontSize:"300%",color:'#000'}}> How it Works</p><hr/>
            <Container fluid style={{marginTop:'10vh',marginBottom:'10vh'}}>
            <Grid container spacing={4}>
            {steps.map((step, index) => (
                <Grid item key={index} xs={12} sm={4}>
                <Card>
                    <CardHeader
                    title={`Step ${index + 1}: ${step.title}`}
                    titleTypographyProps={{align: 'center'}}
                    />
                    <CardContent>
                    <Typography variant="body1">{step.description}</Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
            </Container>
            <Box my={4}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                Why Join Us?
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                By being part of our platform, you help reduce food waste, combat food insecurity, and contribute to a more sustainable and compassionate world.
                </Typography>

                <Grid container spacing={4} justifyContent="center" alignItems="center">
                {impactNumbers.map((item, index) => (
                    <Grid item key={index} xs={12} sm={4}>
                    <Card>
                        <CardContent>
                        <Typography variant="h5" component="h3" align="center" gutterBottom>
                            {item.value}
                        </Typography>
                        <Typography variant="body2" align="center">
                            {item.label}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </Box>
            <Box my={4}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                Testimonials
                </Typography>

                {testimonials.map((testimonial, index) => (
                <Card key={index} mb={2}>
                    <CardContent>
                    <Typography variant="body1" gutterBottom>
                        "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle1" align="right">
                        – {testimonial.author}
                    </Typography>
                    </CardContent>
                </Card>
                ))}
            </Box>
            
        </div>
      </Box>
      
    </div>
  );
}
export default MainHome
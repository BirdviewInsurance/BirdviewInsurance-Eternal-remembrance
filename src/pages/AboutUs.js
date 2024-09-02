import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography, Box, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <Container maxWidth="md" className="flex-grow py-10">
        <Paper elevation={3} className="p-6">
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            With years of experience, Eternal Remembrance is an independent family-run funeral directors. We pride ourselves on offering a compassionate, professional, and caring service 24 hours a day. You will always receive a personal, caring service and be treated with dignity and respect.
          </Typography>
          <Typography variant="body1" paragraph>
            At Eternal Remembrance Services, we are a compassionate and dedicated team of professionals committed to providing unparalleled support during your time of loss. With a deep understanding of the emotional challenges you may face, our experienced funeral directors offer guidance and assistance to ensure a meaningful and respectful farewell for your loved ones. We prioritize attention to detail, personalized services, and strive to create an atmosphere of solace and comfort as we help you navigate through this difficult journey.
          </Typography>
          <Box mt={4}>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Fair Funerals Pledge
            </Typography>
            <Typography variant="body1" paragraph>
            
            </Typography>
            <Typography variant="body1" component="div">
              <ol className="list-decimal list-inside">
                <li>We recognize that funerals can be expensive and many people struggle with the cost.</li>
                <li>We help people to find funerals that are within their means.</li>
                <li>
                  We will be open about our most affordable options:
                  <ul className="list-disc list-inside ml-6">
                    <li>In initial conversations</li>
                    <li>Within our price lists</li>
                    <li>On our website, including third-party costs</li>
                  </ul>
                </li>
              </ol>
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </div>
  );
};

export default AboutUs;

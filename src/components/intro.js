import React, { Component } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Box,Paper } from "@material-ui/core";
import  Image from "./bg.jpg"
import purple from '@material-ui/core/colors/purple';


class intro extends Component {
  constructor(props) {
    super(props);
  }





  render() {
    return (
    

     
        <Box m={8} >
            <Container maxWidth="sm"  >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
              PAYSOL
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div >
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
      </Box>
    
    );
  }
}

intro.propTypes = {};

export default intro;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer0.js";
import GridItem from "components/Grid/GridItem0.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import sirImg from "assets/img/faces/kannan_sir-min.jpg";
//import team2 from "assets/img/faces/christian.jpg";
//import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Head</h2>
      <div style={{marginTop:'-30px'}}>
        <GridContainer direction="row" justify="center" alignItems="center" >
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} >
                <img  src={sirImg} alt="..." className={imageClasses}  />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Prof. Kannan Ramaswamy 
                <br />
                <small className={classes.smallTitle}>Associate Dean</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  E-Mail: <a href='mail to=kannan@hyderabad.bits-pilani.ac.in?sub=query'>kannan@hyderabad.bits-pilani.ac.in</a><br/>Phone No.: 040 66303526
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                
                {/*<Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>*/}
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}

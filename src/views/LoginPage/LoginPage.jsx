import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
// @material-ui/icons
import {
Check,
Email,
LockOutline,
People
} from "@material-ui/icons";
import {
FaFacebookOfficial,
FaGooglePlus
} from 'react-icons/lib/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/login_bg.jpeg";

const LoginSuccessNotification = (props) => {
  return(
    <div>
    <SnackbarContent
      message={
        <span>
          <b>Login Successful</b>. You'll be redirected to the dashboard.
        </span>
      }
      close
      color="success"
      icon={Check}
    />
    </div>
  );
} 

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      openSignupNotify: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this); 
    this.handleSignUpNotifiyClose = this.handleSignUpNotifiyClose.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleLoginSubmit(e){
    e.preventDefault();
    var form = document.forms.loginForm;
    // this.props.createItem({
    //     name : form.name.value,
    //     quantity : form.quantity.value,
    //     rate : form.rate.value,
    //     dateEnd: form.date.value,
    //     seller: this.props.sellerId ,
    // });
    console.log(form.first.value+ form.email.value+form.pass.value);
  }

  handleSignUpNotifiyClose(e){
    this.setState({
      openSignupNotify : false
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                    <CardHeader color="success" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          href="#pablo"
                          target="_blank"
                          color="facebook"
                          onClick={e => e.preventDefault()}
                        >
                          <FaFacebookOfficial/>
                        </Button>
                        <Button
                          href="#pablo"
                          target="_blank"
                          color="google"
                          onClick={e => e.preventDefault()}
                        >
                          <FaGooglePlus/>
                        </Button>
                      </div>
                    </CardHeader>
                    <form className={classes.form} name="loginForm"> 
                    <CardBody>
                        <CustomInput
                          labelText="Email"
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <LockOutline
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            )
                          }}
                        />
                    
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button default color="success" size="lg" onClick={this.handleLoginSubmit}>
                        LOGIN
                      </Button>
                    </CardFooter>
                    </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
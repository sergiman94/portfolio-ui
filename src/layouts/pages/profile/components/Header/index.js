/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/sergio_profile_1.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";
import backendBackroundImage from "assets/images/backend_bg_image.jpg";
import aiBackgrounfImage from "assets/images/ai_background.jpg";

function Header({ children, avatar, bgImage }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, bgImage ? 0.0 : 0.6),
              rgba(gradients.info.state, bgImage ? 0.0 : 0.6)
            )}, url(${
              bgImage === "backend"
                ? backendBackroundImage
                : bgImage == "ai"
                ? aiBackgrounfImage
                : backgroundImage
            })`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      {avatar ? (
        <>
          <Card
            sx={{
              position: "relative",
              mt: -8,
              mx: 3,
              py: 2,
              px: 2,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
              </Grid>
              <Grid item>
                <MDBox height="100%" mt={0.5} lineHeight={1}>
                  <MDTypography variant="h5" fontWeight="medium">
                    Sergio Manrique
                  </MDTypography>
                  <MDTypography variant="button" color="text" fontWeight="regular">
                    Software Engineer
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                <AppBar position="static">
                  <></>
                </AppBar>
              </Grid>
            </Grid>
            {children}
          </Card>
        </>
      ) : (
        <></>
      )}
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
  avatar: true,
  bgImage: null,
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.bool,
  bgImage: PropTypes.string,
};

export default Header;

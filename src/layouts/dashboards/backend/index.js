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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";

// Project page components
import Header from "layouts/pages/profile/components/Header";

// Images
import logoTS from "assets/images/small-logos/logo_TS.png";
import logoJava from "assets/images/small-logos/logo_java.png";
import logoNode from "assets/images/small-logos/logo_node.png";

function Backend() {
  const teamGroundBackend = () => {
    window.open("https://github.com/sergiman94/teamground-backend", "_blank");
  };
  const vortexCore = () => {
    window.open("https://github.com/sergiman94/vortex-core", "_blank");
  };
  const nodeFundamentals = () => {
    window.open("https://github.com/sergiman94/nodeFundamentals", "_blank");
  };
  const chatBackendTemplate = () => {
    window.open("https://github.com/sergiman94/node-backend-template", "_blank");
  };
  const nodeMongoCRUD = () => {
    window.open("https://github.com/sergiman94/NodeMongoCRUD", "_blank");
  };
  const vortexBackend = () => {
    window.open("https://github.com/sergiman94/vortex-backend", "_blank");
  };

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar light absolute />
      </MDBox>
      <Header avatar={false} bgImage={"backend"} />
      <MDBox pb={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <MDBox mb={1}>
              <MDTypography variant="h5">My Open Source Backend Projects</MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDTypography variant="body2" color="text">
                These projects have been open sourced in order to expose the work i have been some
                of my free time, the work i have done in companies can not be exposed due to NDA
                agreements.
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoTS}
                  title="TeamGround App Backend"
                  description="TeamGround is a mobile app that connects the soccer sport community"
                  dropdown={{
                    action: teamGroundBackend,
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoJava}
                  title="Vortex DB Core"
                  description="I built a little graph DB using Java, this is the core of the DB engine"
                  dropdown={{
                    action: vortexCore,
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoNode}
                  title="Node Fundamentals"
                  description="This is a set of basic exercises over node js framework"
                  dropdown={{
                    action: nodeFundamentals,
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoNode}
                  title="Chat Backend Template"
                  description="This is a telegram backend clone with simple chat and user models"
                  dropdown={{
                    action: chatBackendTemplate,
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoNode}
                  title="Node & Mongo CRUD"
                  description="This repo contains simple tasks CRUD connected with mongo atlas db"
                  dropdown={{
                    action: nodeMongoCRUD,
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoNode}
                  title="Vortex DB Web Backend"
                  description="This is the backend that handles the web version of the Vortex DB"
                  dropdown={{
                    action: vortexBackend,
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Backend;

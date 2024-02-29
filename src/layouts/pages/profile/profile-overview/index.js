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
import Divider from "@mui/material/Divider";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/pages/profile/components/Header";

// Images
import homeDecor1 from "assets/images/backend_bg_image.jpg";
import homeDecor2 from "assets/images/math_bg.jpg";
import homeDecor3 from "assets/images/mediumbackground.jpeg";
import homeDecor4 from "assets/images/git_branches.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={8} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m Sergio Manrique, I am a software engineer interested in companies or projects that carry out web development under the 'Front-End' and 'Back- End' paradigms. I have Knowledge and experience with AWS cloud services, serverless and event-driven architectures along with API's, databases, machine learning and infrastructure. I am willing to learn and gain experience in the fields that allow me to grow professionally and improve the foundation of my profession."
                info={{
                  email: "sergiman94@gmail.com",
                  location: "Medellin - Colombia",
                }}
                social={[
                  {
                    link: "https://twitter.com/sergiman94",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://github.com/sergiman94",
                    icon: <GithubIcon />,
                    color: "github",
                  },
                  {
                    link: "https://www.linkedin.com/in/sergio-a-manrique/",
                    icon: <LinkedInIcon />,
                    color: "linkedin",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Hands-on different fields !
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                title="Backend"
                description="Backend projects includes handling requests from clients, processing data, interacting with databases, and managing user authentication."
                action={{
                  type: "internal",
                  route: "/projects/backend",
                  color: "info",
                  label: "View projects",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                title="AI"
                description="AI projects can include machine learning, natural language processing, computer vision, and other AI techniques applied."
                action={{
                  type: "internal",
                  route: "/projects/ai",
                  color: "info",
                  label: "View projects",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                title="Articles"
                description="Medium articles about different topics I like to write about."
                action={{
                  type: "internal",
                  route: "/articles",
                  color: "info",
                  label: "View articles",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                title="Timeline"
                description="Timeline of my road around the tech industry."
                action={{
                  type: "internal",
                  route: "/timeline",
                  color: "info",
                  label: "View timeline",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;

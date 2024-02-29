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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BookingCard from "examples/Cards/BookingCard";

// Images
import article1 from "assets/images/article_1.png";
import article2 from "assets/images/article_2.png";
import article3 from "assets/images/article_3.png";

function Articles() {
  const article1Content = (
    <>
      <Tooltip
        title="Launch"
        placement="bottom"
        onClick={() =>
          window.open(
            "https://medium.com/@sergiman94/handful-summary-about-confusion-matrix-179ff100a881",
            "_blank"
          )
        }
      >
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">launch</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  const article2Content = (
    <>
      <Tooltip
        title="Launch"
        placement="bottom"
        onClick={() =>
          window.open(
            "https://medium.com/@sergiman94/closed-form-linear-regression-217d1bd0feaa",
            "_blank"
          )
        }
      >
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">launch</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  const article3Content = (
    <>
      <Tooltip
        title="Launch"
        placement="bottom"
        onClick={() =>
          window.open(
            "https://medium.com/@sergiman94/what-i-learned-about-the-random-forest-algorithm-as-a-beginner-3b22a0e2a26b",
            "_blank"
          )
        }
      >
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">launch</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={article1}
                  title="Handful Summary About Confusion Matrix"
                  description="This summary provides an attempt to simplify what a confusion matrix is and the fundamental concepts around it."
                  action={article1Content}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={article2}
                  title="Closed Form Linear Regression"
                  description="This time, we’re going to take a look at the best computationally way to implement the Linear Regression algorithm without gradient descent."
                  action={article2Content}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={article3}
                  title="What I Learned About the Random Forest Algorithm as a Beginner"
                  description="Let's review the Random Forest Algorithm !"
                  action={article3Content}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Articles;

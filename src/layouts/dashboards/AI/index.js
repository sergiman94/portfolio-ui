/* eslint-disable prettier/prettier */
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
import logoTF from "assets/images/small-logos/tf_logo.png";
import logoKaggle from "assets/images/small-logos/kaggle_logo.png";
import logoJupyter from "assets/images/small-logos/jupyter_nb_logo.png";

function AI() {
  const flowersClassification = () => {
    window.open("https://github.com/sergiman94/flowers-multiclassification", "_blank");
  };
  const dogscatsClassification = () => {
    window.open("https://github.com/sergiman94/dogs-vs-cats-with-data-augmentation", "_blank");
  };
  const closedFormLinearRegression = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/closedFormLinearRegression.ipynb", "_blank");
  };
  const flowersTransferLearning = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/exercise_flowers_with_transfer_learning.ipynb", "_blank");
  };
  const forecastingCNN = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/forecasting_with_cnn.ipynb", "_blank");
  };
  const microgradNotes = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/microgradFromScratch.ipynb", "_blank");
  };
  const textGenerationWithLSTMs = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/nlp_constructing_text_generation_model.ipynb", "_blank");
  };
  const EmbeddingsSentimentAnalysis = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/nlp_embeddings_and_sentiment.ipynb", "_blank");
  };
  const MultipleModelsSentimentAnalysis = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/nlp_multiple_models_for_predicting_sentiment.ipynb", "_blank");
  };
  const simpleTextClassification = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/simple_text_classification.ipynb", "_blank");
  };
  const timeSeriesMovingAverage = () => {
    window.open("https://github.com/sergiman94/ml-notebooks/blob/master/time_series_moving_average.ipynb", "_blank");
  };
  const kaggleCompetitions = () => {
    window.open("https://github.com/sergiman94/kaggle-competitions", "_blank");
  };
  const titanicCompetitionEDA = () => {
    window.open("https://github.com/sergiman94/kaggle-competitions", "_blank");
  };
  const item = (logo, title, description, action) => (
    <Grid item xs={12} md={6} lg={4}>
      <MDBox mb={1.5} mt={1.5}>
        <ComplexProjectCard
          image={logo}
          title={title}
          description={description}
          dropdown={{
            action: action,
          }}
        />
      </MDBox>
    </Grid>
  );

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar light absolute />
      </MDBox>
      <Header avatar={false} bgImage={"ai"} />
      <MDBox pb={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <MDBox mb={1}>
              <MDTypography variant="h5">My Open Source AI Projects & Notebooks</MDTypography>
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
            {item(logoKaggle,"Kaggle Competitions","Solutions for the different kaggle competitions I've joined", kaggleCompetitions)}
            {item(logoKaggle,"EDA On Titanic Competition","Exploratory Data Analysis (EDA) on Titanic dataset", titanicCompetitionEDA)}
            {item(logoTF, "End-to-End Flowers Multiclass Classification", "Foundational end-to-end multiclass classification for computer vision.", flowersClassification)}
            {item(logoTF,"End-to-End Dogs vs Cats Binary Classification","Foundational end-to-end binary classification for computer vision.", dogscatsClassification)}
            {item(logoJupyter,"Closed-Form Linear Regression Algorithm","Implementation of the linear regression algorithm from scratch", closedFormLinearRegression)}
            {item(logoTF,"Flowers Classification With Transfer Learning","Implementation of transfer learning for multiclass classification", flowersTransferLearning)}
            {item(logoTF,"Time Series Forecasting With CNNs","Using CNNs for timeseries forecasting", forecastingCNN)}
            {item(logoJupyter,"Micrograd Notes","Notes from Andrej Karpathy's backpropagation video", microgradNotes)}
            {item(logoJupyter,"NLP Text Generation With LSTMs","Implementing LSTMs for text generation", textGenerationWithLSTMs)}
            {item(logoJupyter,"Embeddings & Sentiment Analysis","Overview on how to use embeddings for sentiment analysis", EmbeddingsSentimentAnalysis)}
            {item(logoJupyter,"Multiple Models For Sentiment Analysis","Implementation of multiple RNNs and LSTMs for sentiment analysis", MultipleModelsSentimentAnalysis)}
            {item(logoJupyter,"Simple Text Classification","Simple Text Classification With RNNs", simpleTextClassification)}
            {item(logoJupyter,"Time Series Moving Average Technique","Implementation of the moving average technique for time series", timeSeriesMovingAverage)}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AI;

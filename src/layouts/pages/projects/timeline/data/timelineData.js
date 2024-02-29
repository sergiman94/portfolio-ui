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

const timelineData = [
  {
    color: "success",
    icon: "notifications",
    title: "Intern Universidad San Buenaventura [Colombia]",
    dateTime: "2018 - 2019",
    description:
      "Degree final project and internship carried out with the Universidad San Buenaventura in agreement with the insurance company Colmena building a web configuration panel, which consists of admin services managed by the university that's affiliated with the insurance company. The main objective was to provide geospacial data of the elements that can be used as risk prevention, these includes defibrillators, stretchers, fire extinguishers and meeting points. Data is currently stored in a MySQL database with an API that can be used through a mobile app. Currently the project is in the hands of the University of San Buenaventura Cali and the Colmena insurance company, however attached is a link explaining the project and its operation. Stack: Node, Sequelize ORM, MySQL and Angular (NDA prevents sharing the code base)",
  },
  {
    color: "error",
    icon: "vpn_key",
    title: "Grappe [France]",
    dateTime: "March.2020 - Sept.2020",
    description:
      "Grappe is a mobile app based company, here I was developing the Penny App, which main goal is to bring content creators together in one single app and get paid for their content, here they can schedule streamings in different platforms and post exclusive content. this web and mobile app were developed using FCM, firebase real time database and cloud functions for the backend side, these cloud functions had an integration with stripe and coinbase, so we can allow the users to do payments with crypto, for this I used stripe webhooks and coinbase API, cloud functions didn't have a test environment at that time, so I had to build some test servers with node and express then I can make sure everything was running properly. the frontend side have been built with native environment such as android studio (Java-Kotlin) and Xcode(swift) Ubicabus-iOS Ubicabus-Android both were developed using google maps API and mongo db, express server- this app goal was providing bus drivers a localization tag so when the user start the app, they (users) can see how far or close is the bus and so the app can make predictions (using ML) about public transportation traffic.",
  },
  {
    color: "warning",
    icon: "payment",
    title: "TIPI [Colombia]",
    dateTime: "Oct.2020 - Mar.2021",
    description:
      "TIPI is a hardware-software company that offers solutions to comercial/health clients such a restaurants, bars, security companies, hospitals, health centers, malls and shops. Lucy Smart System: Lucy is a system that can detect in a health facility (hospital) what is the exact position of an asset (desfibrilator, extinguisher, oxigen, first aid, wheelchair) and notify nurses abot the nearest one, also the system can alert when a patient has an urgent need of an asset and so detect where is the nearest nurse or artifact to handle that urgency. this system uses hardware devices connected to the cloud and a microservices system built with java spring boot, I made this system from scratch. WiCloud: cloud storage of all company hardware devices, this company had a lot of hardware devices so it had a system to handle and monitor all states, this was made with JEEE and mySQL. Smilers: quality check system, this product was saving and analyzing quality satisfaction of the clients, like restaurants, bars, malls. I was the lead of 3 or 4 devs, we were handling all support and new development features, I was coding mostly in Java but also some things were developed in node js",
  },
  {
    color: "success",
    icon: "inbox",
    title: "Mango Soft [USA]",
    dateTime: "Mar.2021 - Nov.2021",
    description:
      "Mango Soft Inc is a company focused in sports and health the main clients are Galaxy FC, Chicago FC, Orlando FC and Miami FC, this for the sports side but for the health side are Clinica Country (bogotá), Clinica Medellin(medellín). DAM: this product handles all digital assets such as pictures, videos, pdf files, csv files, internal files and alos DICOM's for the health client sector, I developed a serverless architecture using AWS lambdas and Claudia JS framework, this framework allows the easy creation, management and deployment of lambdas. Dynamo DB is the main database and we had these streams to the neo4j graph database for data analysis and machine learning predictions so we can give sports stats and useful knowledge and information about the different tournaments and matches. this backend development was with typescript/javascript environment and also node. Mango Smart Forms (built from scratch) : Mango Soft uses this smart forms for different scenarios in the health industry such as informed consent, digital firm and identification. this smart forms are part of the hospital system and we can manage different types on different scenarios that's why the are 'smart' because they can have a conditional behavior depending of the user responses. This was using the same DAM architecture with Claudia JS, lambdas and dynamo db. Accreditations-Registration: these two products were developed for stadium authorization to different matches and tournamnets, here we can authorize and monitor each user and player so we can give them access to privileges and vip zones. this was made with MERN stack (MONGO, EXPRESS, REACT, NODE) and also streams to neo4j for data analysis and prediction.",
    badges: ["message"],
  },
  {
    color: "info",
    icon: "campaign",
    title: "Synerio [USA]",
    dateTime: "Oct.2021 - Jul.2022",
    description:
      "Synerio is focused on transforming the way people use and share data. With our multi-faceted data ecosystem as the foundation, we empower people across roles and industries to make better decisions and realize new opportunities based on the seamless flow of comprehensive and actionable data. Synerio provides data infrastructure and analytics to unify and enhance data from disparate sources, enabling companies of every size to embrace a data-driven approach.",
  },
  {
    color: "warning",
    icon: "archive",
    title: "Autodesk [Canada]",
    dateTime: "Ago.2022 - Present",
    description:
      "Autodesk is changing how the world is designed and made. Our technology spans architecture, engineering, construction, product design, manufacturing, media, and entertainment, empowering innovators everywhere to solve challenges big and small. From greener buildings to smarter products to more mesmerizing blockbusters, Autodesk software helps our customers to design and make a better world for all. Over 100 million people use Autodesk software like AutoCAD, Revit, Maya, 3ds Max, Fusion 360, SketchBook, and more to unlock their creativity and solve important design, business and environmental challenges. Our software runs on both personal computers and mobile devices and taps the infinite computing power of the cloud to help teams around the world collaborate, design, simulate and fabricate their ideas in 3D. We provide exceptional compensation/benefit packages and we’d love for you to join us. We’re proud to be an equal opportunity employer and we consider all qualiﬁed applicants without regard to race, gender, disability, veteran status or other protected category. To see our culture in action, check out #AutodeskLife. We are headquartered in the San Francisco Bay Area and have more than 10,000 employees worldwide.",
  },
];

export default timelineData;

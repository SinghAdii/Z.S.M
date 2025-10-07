


import React from "react";
import "./ServiceDetailsCard.css";
import aiServiceImage from "../../../assets/images/aiServiceImage.png";
import personalSoftwareServiceImage from "../../../assets/images/personalSoftwareServiceImage.png";
import cyberSecurityServiceImage from "../../../assets/images/cyberSecurityServiceImage.png";
import AppDevelopmentServiceImage from "../../../assets/images/AppDevelopmentServiceImage.png";
import webAppServiceImage from "../../../assets/images/webAppServiceImage.png";
import webDevelopmentServiceImage from "../../../assets/images/webDevelopmentServiceImage.png";
import dataSercurityServiceImage from "../../../assets/images/dataSercurityServiceImage.png";
import AiMlServiceImage from "../../../assets/images/AiMlServiceImage.png";
import PlatformServices from "./PlatformServices";
import Development from "./Development";
import CmsEcommerce from "./CmsEcommerce";
import Clouds from './Clouds'
import Containerisation from "./Containerisation";
import UIUX from "./UIUX";
import Testing from "./Testing";
import BigData from "./BigData";
import DataVisualization from "./DataVisualization";
import DataOps from "./DataOps";
import SmartBots from "./SmartBots";

const ServiceDetailsCard = () => {

  return (
    <>
    <PlatformServices/>
    <Development/>
    <CmsEcommerce/>
    <Clouds/>
    <Containerisation/>
    <UIUX/>
    <Testing/>
    <BigData/>
    <DataVisualization/>
    <DataOps/>
    <SmartBots/>
    </>
  );
};

export default ServiceDetailsCard;

// Images Import
import homeServiceImg from "./assets/home/beautician1.png";
import cleaningServiceImg from "./assets/home/cleaning1.webp";
import personalCareImg from "./assets/home/handyman1.webp";
import solarServiceImg from "./assets/home/mbm1.png";
import homeInspectionImg from "./assets/home/solar.webp";
import mahirServiceImg from "./assets/home/solar.webp";


const ServicesBox = () => {
  return (
   <div>
    <div className="row d-flex justify-content-center align-items-center gap-3">
      <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 
      bg-white shadow rounded d-flex justify-content-center 
      align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={homeServiceImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
Personal Care
Females Only
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12
       bg-white shadow rounded d-flex justify-content-center
        align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={cleaningServiceImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
          Cleaning Service
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12
       bg-white shadow rounded d-flex justify-content-center
        align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={personalCareImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
          Personal Care
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 
      bg-white shadow rounded d-flex justify-content-center 
      align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={solarServiceImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
          
Maintained by Mahir
        </div>
      </div>
       <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 
      bg-white shadow rounded d-flex justify-content-center 
      align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={mahirServiceImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
          Solar installation
        </div>
      </div>
       <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 
      bg-white shadow rounded d-flex justify-content-center 
      align-items-center gap-2 p-3">
        <div>
        <img className="img-thumbnail w-75 h-75" src={homeInspectionImg} alt="" />
        </div>
        <div className="fs-5 fw-bold">
          Solar installation
        </div>
      </div>
      
    </div>
   </div>
     
  );
};

export default ServicesBox;
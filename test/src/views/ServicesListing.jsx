import ServicesBox from "../ServicesBox";
import ServicesBanner from "./ServicesBanner";
import Record from "../views/Data";
import { useEffect, useState } from "react";

function ServicesListing() {
  const [dt,setDt]=useState([])

  useEffect(() => {
    const data = Record(); // ✅ Fetch data properly inside useEffect
    setDt(data);
  }, []);
  const handleDelete = (index) => {
    const updatedData = dt.filter((_, i) => i !== index);
    setDt(updatedData);
  };
  return (
    <div>
      <div className="row m-0">
        <div className="col-7">
          <ServicesBox />
        </div>
        <div className="col-5">
          <ServicesBanner />
        </div>
      </div>
      <div>
      <h2>User List</h2>
        <ul>
          {dt.map((user, index) => (
            <li key={index}>
            {user.id}  
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.city}</li>
            <button onClick={() => handleDelete(index)}>Delete</button>  
            </li>
            

          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesListing;

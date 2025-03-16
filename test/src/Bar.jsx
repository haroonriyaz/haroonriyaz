
import Img1 from '../src/pic1.jpg'
import img2 from '../img/l.webp'
import img3 from '../img/l.webp'
const StudentFeeList = () => {
  return (
    <div className="p-4">
      <h1 className="h1"><b>On Time, Done Right.</b></h1>
      <p1 className='p1'>Connecting customers and technicians for quick,
      safe, and affordable bookings.</p1>
      <div>
        <h1>
        Select City
        </h1>
      </div >
     <div style={{display:'flex',justifyContent:'space-around'
      ,gap:'300px',alignItems:'center'
      ,boxShadow:'1px 2px 10px 1px gray'
      ,fontSize:'18px',outline:'none',border:'none'
      ,padding:'8px 12px'
      ,width:'600px',height:'50px',borderRadius:'10px'}}>
      <select name="" id="">
        <option value="lahore">Lahore</option>
        <img src={img2} alt=""  width="50px"  height="90px"/>
        
        <option value="Islamabad">Islamabad</option>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Krachi"><h1>Krachi</h1>
          <img src={img3} alt=""  width="50px"  height="90px"/>
        </option>

      </select>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'
      ,gap:'30px',alignItems:'center',
        boxShadow:'1px 2px 10px 1px gray',
        width:'300px',borderRadius:'10px'}}>
        <div><img src={Img1} alt="" width="50px"  height="90px"/></div>
        <div>Services</div>

      </div>
    </div>
  );
};

export default StudentFeeList;

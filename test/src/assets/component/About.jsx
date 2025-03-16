import Img3 from  './mahir.jpeg'
export default function About() {
  return (
    <div style={{display:'flex',justifyContent:
      'space-around',gap:'30px',alignItems:'center'
        ,boxShadow:'1px 2px 10px 1px gray',width:
        '100vh',borderRadius:'10px'}}>
       <div className='img'><img src={Img3} alt="" width="200px"  height="90px"/>
              <button>login</button></div>
      
    </div>
  )
}
 
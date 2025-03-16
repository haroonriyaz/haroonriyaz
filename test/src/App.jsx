import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import './Style.css'
import Home from './Home.jsx';
import Location from './views/Location.jsx';
import ServicesListing from './views/ServicesListing.jsx';
import Mahir from './views/Mahir.jsx';
import FloatingButtons from './views/FloatingButtons.jsx';
import FlexBox from './layout/FlexBox.jsx';

export default function App() {
  return (
    <>
    <div className='bg-primary-gray'>
    <Home />
   <Location/>
   <ServicesListing/>
   <Mahir/>
   <FloatingButtons/>
   <FlexBox/>
    </div>
     </>
  )
}

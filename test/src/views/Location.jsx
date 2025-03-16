

export default function Location() {
  return (
    <div className="container-fluid align-items-start justyfy-content-center">
        <div className="row ml-4 gap-3 coumstwidth ">
            <div className="col-7 ">
            <div className='py-3'>
      <h3>Select City</h3>
      <div className='d-flex justify-content-center align-items-center bg-white rounded p-2'>
        <select name="location" id="" className="select-option-location">
            <option value="lahore">lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
        </select>
      </div>
    </div>
            </div>
        </div>

     
    </div>
  )
}

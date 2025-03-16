import Logo from '../assets/component/mahir.jpeg'
export default function Header() {
  return (
    <div>
      <div className="container-fluid justify-content-center">
        <div className="row bg-primary-gray justify-content-center" >
            <div className="col-11">
                <img src={Logo} alt="" className='img-fluid custom-logo-size' />
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
                <a href="/login" className='text-decoration-none text-secondary'> Login</a>
            </div>

        </div>
      </div>
    </div>
  )
}

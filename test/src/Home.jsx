import Header from "./layout/Header";
import './Style.css'
export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="container bg-primary-gray py-5">
      <h2  className="bg-primary-gray fs-1">On Time, Done Right.</h2>
      <p  className="bg-primary-gray w-50 fs-4">Connecting customers and technicians for quick,
      safe, and affordable bookings.
      </p>

    </div>
    </>
  )
}

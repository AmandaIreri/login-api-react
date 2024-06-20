import Login from "./Login"
import Navbar from "./Navbar/navbar"
// import Users from "./Users"

export const Introduction = () => {
  return(
    <h1>We are AdaLab</h1>
  )
}

function App(){
  return(
    <div>
      <Navbar />
      <Login />
      {/* <Users /> */}
    </div>
  )
}
export default App;
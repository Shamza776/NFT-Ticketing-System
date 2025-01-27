//import 'front-end\src\index.css'
import {useNavigate} from 'react-router-dom'
//import connect wallet component
import  ConnectWallet  from '../Components/connectWallet';

function Home() {
    const navigate = useNavigate();
  const handleSignUpAdmin = () => {
    navigate('/sign-upAdmin')
  }
  const handleSignUpUser = () => {
    navigate('/sign-upUser')
  }
  const handleSignIn = () => {
    navigate('/sign-in')
  }

  return (
    <>
      <h1>NFT TICKETING SYSTEM</h1>
      <div className="card">
        <ConnectWallet/>
        <p>
          Welcome! Want to take part in an event? or create your own?
          Sign-up below!
        </p>
        <button onClick={handleSignUpAdmin}>Sign-Up As Admin!</button>
        <button onClick={handleSignUpUser}>Sign-Up As User!</button>
      </div>
      <p>Already have an account, 
        <button onClick={handleSignIn}>Sign-in</button></p>
    </>
  )
}

export default Home;
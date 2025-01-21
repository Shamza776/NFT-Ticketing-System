//import 'front-end\src\index.css'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/sign-up')
  }
  const handleSignIn = () => {
    navigate('/sign-in')
  }

  return (
    <>
      <h1>NFT TICKETING SYSTEM</h1>
      <div className="card">
        <button>
          Connect Wallet
        </button>
        <p>
          Welcome! get your ticket here!
          Sign-up below to get your ticket!
        </p>
        <button onClick={handleSignUp}>Sign-Up</button>
      </div>
      <p>Already have an account, 
        <button onClick={handleSignIn}>Sign-in</button></p>
    </>
  )
}

export default Home;
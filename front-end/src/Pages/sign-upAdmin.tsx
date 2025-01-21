//import 'front-end\src\index.css'
import { useNavigate } from "react-router-dom";

function SignUpAdmin() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/Admin/dashboard1')
    }
    return(
       <>
        <h1>Sign-up As Admin</h1>
        <div>
            <form action=" ">
                <label htmlFor="">Enter email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="">Enter password</label>
                <input type="password" name="password" id="password" />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
       </> 
    )
}

export default SignUpAdmin;
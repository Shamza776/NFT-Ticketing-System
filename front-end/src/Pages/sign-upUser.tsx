import { useNavigate } from "react-router-dom";

function SignUpUser() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/User/dashboard')
    }
    return(
       <>
        <h1>Sign-up As a User</h1>
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

export default SignUpUser;
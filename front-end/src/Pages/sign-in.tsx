function SignIn(){
    return(
        <>
            <div>
                <h1>Sign-In</h1>
                <form action="">
                    <label htmlFor="">Enter email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="">Enter password</label>
                    <input type="password" name="password" id="password" />
                </form>
            </div>
        </>
    )
}
export default SignIn;
import { useStates } from 'react'; 

function FormsLogin(){

    function Login(event){

        event.preventDefault();

        console.log(email);

    }

    const [email, setEmail] = useStates();

    return(

        <article>

            <div className="small-container">

                <h2 className="title">Faça login</h2>

                <div className="login-box">

                    <img src="images/account/login.png" alt="Icone de Login" className="login-img"/>

                    <div className="login-input">

                        <form onSubmit={Login}>

                            <label>E-mail:</label>
                            <input id="email" onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Digite seu e-mail" /> <br/>

                            <label>Senha</label>
                            <input id="password" type="password" placeholder="Digite sua senha" /> <br/>

                        </form>

                        <input name="email" type="email" className="login-field" placeholder="Email"/><br/>
                        <input name="senha" type="password" className="login-field" placeholder="Senha"/><br/>
                        <button className="btn">Login</button><br/>

                        Não possui conta? <a href="register.html">Registre-se</a>

                    </div>

                </div>

            </div>

        </article>

    );

}

export default FormsLogin;
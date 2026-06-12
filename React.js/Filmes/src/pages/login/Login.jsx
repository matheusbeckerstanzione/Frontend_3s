import "./Login.css";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg";
import { UsuarioContext } from "../../context/UsuarioContext";
    import {Alerta} from "../../components/alerta/Alerta";
import { jwtDecode } from "jwt-decode";


const Login = () => {
  const navigate = useNavigate();
  const { setUsuario } = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem("usuario"));
    if (logado) {
      setUsuario(logado);
      navigate("/generos");
    }
  }, []);

  const loginUser = async () => {
    const gmail = novoUsuario.trim();
    const senhaDigitada = senha.trim();

    if (senhaDigitada.length === 0 || gmail.length === 0) {
      Alerta({
        title: "Campo obrigatório",
        text: "Por favor, insira seu e-mail e senha antes de continuar.",
        icon: "warning",
        confirmButtonColor: "#CC3F55",
        confirmButtonText: "Ok",
      });
      return;
    }

    const dadosLogin = {
      email: gmail,
      senha: senhaDigitada,
    };

    try {
      const retornoAPI = await api.post("/Login", dadosLogin);

      if (retornoAPI.status === 200) {
        const token = retornoAPI.data.token;
        const usuarioDecoded = jwtDecode(token);

        Alerta({
          title: "Login bem-sucedido",
          text: "Bem-vindo de volta!",
          icon: "success",
          confirmButtonColor: "#CC3F55",
        });

        setUsuario(usuarioDecoded);
        localStorage.setItem("usuario", JSON.stringify(usuarioDecoded));
        setNovoUsuario("");
        setSenha("");
        navigate("/generos");
      }
    } catch (e) {
      Alerta({
        title: "Erro no login",
        text: "E-mail ou senha incorretos.",
        icon: "error",
        confirmButtonColor: "#CC3F55",
      });
    }
  };

  const segurarSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        <form onSubmit={segurarSubmit} className="form_login">
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={novoUsuario}
                onChange={(e) => setNovoUsuario(e.target.value)}
              />
            </div>
            <div className="campo_input">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <Botao nomeDoBotao="Entrar" />
        </form>
      </section>
    </main>
  );
};

export default Login;
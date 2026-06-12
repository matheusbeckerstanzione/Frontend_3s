import "./Header.css";
import Logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {
  const navigate = useNavigate();
  const { setUsuario } = useContext(UsuarioContext);

  const LogOut = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <header>
      <div className="layout_grid cabecalho">
        <Link to="/">
          <img src={Logo} alt="Logo do Filmoteca" />
        </Link>

        <nav className="nav_header">
          <Link className="link_header" to="/filmes">Filme</Link>
          <Link className="link_header" to="/generos">Gênero</Link>
          <button className="botao_header" onClick={LogOut}>
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
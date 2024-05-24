import { useNavigate } from "react-router-dom";
import morango from "../../assets/morango.png"
import './Home.css'
 
const Home = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <h1>
            Morango
            </h1>
            <p>
            O morango é uma fruta vermelha, cuja origem é a Europa. Produzida pelo morangueiro, é um fruto rasteiro. Existem várias espécies de morango, sendo a fragaria a mais comum e cultivada em várias partes do mundo.
            </p>
           <img src={morango}></img>
            <button onClick={() => navigate("/about")}>
                Clique aqui para ver a Laranja!
            </button>
        </>
    );
};
 
export default Home;
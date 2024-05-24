import { useNavigate } from "react-router-dom";
import laranja from "../../assets/laranja.png"
import './Laranja.css'
 
const Laranja = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <h1>
            Laranja
            </h1>
            <p>
            A laranja é o fruto da laranjeira, árvore da família Rutaceae. 
            Possui porte médio que pode atingir até 8 metros de altura, tronco de cor castanho e copa de formato arredondado. 
            A fruta é de origem asiática, foi levada pelos árabes para a península Ibérica e de lá se propagou pelo mundo.
            </p>
           <img src={laranja}></img>
            <button onClick={() => navigate(-1)}>
                Clique aqui para ver o Morango!
            </button>
        </>
    );
};
 
export default Laranja;

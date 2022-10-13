import {useState} from 'react';

function Home() {
    return (
        <div>
            <h5>Home</h5>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h5>{contador}</h5>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home 
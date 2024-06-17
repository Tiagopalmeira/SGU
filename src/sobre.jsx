import React from "react";
import './CSS/sobremim.css';

export default function SobreMim() {
    return (
        
        <div>
            <div className="galinho">

                <h1>Como contratar?</h1>
                <img src="../public/react.png" alt="Minha foto" className="fotoeu" />

            </div>

            <div className="centralizado">
                <h3>Melhores preços e ofertas:</h3>

                <div className="card">
                    <h4> Plano básico </h4>
                    <p>Acompanhe os seus desbravadores com facilidade por um preço acessivel.</p>
                    <span className="preco"> R$ X,99 </span> <span>/mensal</span> <br />
                    <button className="contratar">Contratar</button>
                </div>
                <div className="divisao"></div>
                <div className="card">
                    <h4> Plano premium </h4>
                    <p>Cadastre classes, atualize e acompanhe seus desbravadores de uma maneira geral. Clube organizado é clube vencedor.</p>
                    <span className="preco"> R$ X,99 </span> <span> /mensal </span><br />
                    <button className="contratar">Contratar</button>
                </div>

            </div>
        </div>
    );
}

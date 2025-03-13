"use client";

import { useState } from "react";

export default function Page() {
    const [input1, setInput1] = useState(""); 
    const [input2, setInput2] = useState(""); 
    const [match, setMatch] = useState(null);

    const handleCheck = () => {
        setMatch(input1 === input2 && input1 !== "");
    };

    return (
        <div>
            <input type="password" placeholder="Digite uma senha" value={input1} onChange={(e) => setInput1(e.target.value)} />
            <input type="password" placeholder="Repita a senha" value={input2} onChange={(e) => setInput2(e.target.value)}/> 
            <button onClick={handleCheck}>Verificar</button>

            {match !== null && <p>{match? "OK" : "ERROR"}</p>}
        </div>
    );
}
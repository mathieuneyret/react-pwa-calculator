import {useState} from "react";

const Calculatrice = () => {

    const [calcul, setCalcul] = useState(0)
    const [result, setResult] = useState(0)
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const [operator, setOperator] = useState(null)
    const [operande, setOperande] = useState(null)

    return (
        <>
            <div className={"calculator"}>
                {number.map(n =>
                    <button onClick={() => parOperande(n)}>{n}</button>
                )}
            </div>
            <button onClick={() => parOperator("+")}>+</button>
            <button onClick={() => calculate()}>=</button>
            <div>Calcul : {calcul}</div>
            <div>Résultat : {result}</div>
        </>
    );

    function parOperande(n) {
        setOperande(n)
        console.log(operande)
    }

    function parOperator(o) {
        setOperator(o)
        console.log(operator)
    }

    function calculate() {
        setResult(calcul + operator)
        console.log(result)
    }

}


export default Calculatrice;
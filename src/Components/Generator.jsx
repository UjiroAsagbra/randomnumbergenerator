import { useState } from "react"


const Generator = () => {
    const [num, setNum] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1)
    

    const handleMin= (e) => {
        setMin(e.target.value);
    }

    const handleMax= (e) => {
        setMax(e.target.value);
    }

    const generateRandom = (min,max) => {
        const minNum = parseInt(min)
        const maxNum = parseInt(max)
        if(minNum>=maxNum){
            setMin(max)
            alert("Maximum number has to be higer than minimum number")
            return;
        }
            return Math.floor(Math.random() * (maxNum -  minNum + 1)) + minNum
    }

    const handleClick = () => {
        setNum(generateRandom(min,max))
    };



    return (
    <div className="generator">
        <h2 className="title">Random Number Generator</h2>
        <h3 className="top">Minimum Number
            <input 
            type="number"  
            className=" input-box" 
            value={min}
            onChange={handleMin}
            /> 
        </h3>
        <h3 className="bottom">Maximum Number
            <input 
            type="number"  
            className=" input-box" 
            value={max}
            onChange={handleMax}
            /> 
        </h3>
        <button className="generate number" onClick={handleClick}>Generate number</button>
        <h2>Number: {num}</h2>
    </div>
    )
}

export default Generator
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
            setNum(max)
        }
            return Math.floor(Math.random() * (maxNum -  minNum + 1)) + minNum
    }

    const handleClick = () => {
        setNum(generateRandom(min,max))
    };



    return (
    <div className="generator">
        <h2 className="title">Random Number Generator</h2>
        <h3 className="top">Min
            <input 
            type="number"  
            className=" input-box" 
            value={min}
            onChange={handleMin}
            /> 
        </h3>
        <h3 className="bottom">Max
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
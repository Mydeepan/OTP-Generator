import React, { useEffect, useState } from 'react' 
import './PasswordGenerate.css';
import photo from '../assets/padlock-logo-vector-44699514.png';

export const PasswordGenerate = () => {
    const [passWord,setPassWord] = useState('');
    const [userInput,setUserInput] = useState('');
    const [upperCase,setUpperCase] = useState(true);
    const [lowerCase,setLowerCase] = useState(true);
    const [number,setNumber] = useState(true);
    const [symbol,setSymbol] = useState(true);
    const [error,setError] = useState('');
    
    const passWordGenerator = (e)=> {
        e.preventDefault();
        if(userInput === ''){
            setError('*Please Enter User input');
        }
        else if (isNaN(userInput)){
            setError('*Not enter Alphabet');
        }
        else{
            run(userInput);
            setError("")
        }
    } 
    useEffect(()=>{
        reset();

    },[])
    const run =(e)=>{
         let chart = '';
        if(upperCase) {chart += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'};
         if(lowerCase) {
            let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            chart += letter.toLowerCase();
        }
         if(number) {chart += '1234567890'};
         if(symbol) {chart +='~!@#$%^&*()'};

        
        let overViewPassword =''
        for (let i = 0; i < e; i++) {
            let randomPassword = Math.floor(Math.random()*chart.length);
            overViewPassword  += chart[randomPassword];
            setPassWord(overViewPassword);
            
        }
    }
    run();

    const reset =()=>{
        setPassWord('');
        setUserInput('');
    }
  return (
    <>
        {
        !passWord.length ? 
            <div className="container">
                <form action="#" onSubmit={e => passWordGenerator(e)}>
                    <h2>Password Generator</h2>
                    <div className="textbox-inputbox">
                        <input type="text" id='setValue' placeholder='Enter number' value={userInput} onChange={e => setUserInput(e.target.value)}/>
                        <p className='error'>{error}</p>
                        <div className='checkbox'>
                            <input checked={upperCase}  onChange={e=> setUpperCase(e.target.checked)} className='check' type="checkbox" name="uppercase" id="uppercase" />
                            <label htmlFor="uppercase">Uppercase</label>
                        </div>
                        <div className='checkbox'>
                            <input checked={lowerCase} onChange={e=> setLowerCase(e.target.checked)} className='check' type="checkbox" name="lowercase" id="lowercase" />
                            <label htmlFor="lowercase">Lowercase</label>
                        </div>
                        <div className='checkbox'>
                            <input checked={number} onChange={e=> setNumber(e.target.checked)} className='check' type="checkbox" name="number" id="number" />
                            <label htmlFor="number">Number</label>
                        </div>
                        <div className='checkbox'>
                            <input checked={symbol} onChange={e=> setSymbol(e.target.checked)} className='check' type="checkbox" name="symbols" id="symbols" />
                            <label htmlFor="symbols">Symbols</label>
                        </div>
                    </div>
                    <button className='submit' type='submit'>Submit</button>
                </form> 
                <div className="img-tag">
                    <img src={photo} alt="password" />
                </div>
            </div>   :
             <div className="password-box container">
                <h2 className='pass-success'>Password Successfully Generator</h2>
                <h1>{passWord }</h1>
                <button onClick={reset}>Ok</button>
            </div> 
    }
        
    </>
  )
}

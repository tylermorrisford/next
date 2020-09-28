import Link from 'next/link'
import React, { useState } from 'react';

export default function Home() {

    const [fact, setFact] = useState('');
    const [randomFact, setRandomFact] = useState('');
    const [factList, setFactList] = useState([]);
    
    const pageStyle = {
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontWeight: 300,
        margin: '40px auto',
        width: '400px'
    }

    const buttonStyle = {
        margin: '25px auto', 
        backgroundColor: 'black', 
        color: 'white', 
        width: '200px', 
        height: '50px', 
        border: '1px solid black', 
        borderRadius: '5px'
    }

    const saveStyle = {
        margin: '5px auto', 
        backgroundColor: 'white', 
        color: 'black',
        border: '1px solid black', 
        width: '125px', 
        height: '30px',  
        borderRadius: '5px'
    }

    const handleChange = (e) => {
        setFact(e.target.value);
    }

    const saveFact = () => {
        let newFacts = [...factList, fact];
        setFactList(newFacts);
        setFact('');
    }

    const randomize = () => {
        setRandomFact(factList[Math.floor((Math.random() * factList.length))])
    }


  return (
    <div className="container" style={pageStyle}>
        <h1>Create Next App</h1>
        <p style={{textAlign: 'center'}}>Next.js is a framework that uses React<br />Mostly rendered on the server side<br />
        Which... ok, enough <Link href="/about"><a><u>about us</u></a></Link>, let's talk about you!</p>
        <p>Enter and save a few random facts about yourself and then hit the random fact button and we'll print a random fact below for us to ponder together. <br />We assume literally everything you say is true.</p>
        <input style={{height: '30px', width: '250px', margin: '10px auto'}} type='text' 
        placeholder='a random fact about me is...' onChange={handleChange} value={fact}></input>
        <button onClick={saveFact} style={saveStyle}>Save this fact</button><br/>
        <small><em>random facts we got on you: {factList.length}</em></small>
        <button style={buttonStyle}
        onClick={randomize}
        >
            <strong>Hit me with a random fact!</strong></button>
        <hr/>
        <h2>{randomFact}</h2>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Helvetica;
        }

        button{
          cursor: pointer;
        }

        ::-webkit-input-placeholder {
          text-align: center;
       }
       
       :-moz-placeholder { /* Firefox 18- */
          text-align: center;  
       }
       
       ::-moz-placeholder {  /* Firefox 19+ */
          text-align: center;  
       }
       
       :-ms-input-placeholder {  
          text-align: center; 
       }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

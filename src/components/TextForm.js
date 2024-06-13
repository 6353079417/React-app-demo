import React,{useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("Enter Your Text");
    // setTextnp("Enter Your Text");

    const HandleOnChange = (event) => {
        // console.log("On change"); 
        setText(event.target.value)

    }

    const HandleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleLowerChange = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const HandleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById("exampleFormControlTextarea1")
        newText.select();
        navigator.clipboard.writeText(newText)
    }
    
    const HandleClear = () => {
        let newText = "";
        setText(newText);
    }
    const RemoveSpace = () => {
         let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }


    


    return (
        <div className="container my-5"> 
        
            <h1>{props.title}</h1>
            <textarea className={`form-control bg-${props.mode}  text-${props.mode === 'light' ? 'dark' : 'light' }`} id="exampleFormControlTextarea1"  rows="8" value={text} onChange={HandleOnChange}></textarea>
            <button className='btn btn-outline-success mt-3 mx-4' onClick={HandleUpChange}>Convert To Upper Case</button>  
            <button className='btn btn-outline-success mt-3 mx-4' onClick={HandleLowerChange}>Convert To Lower Case</button>
            <button className='btn btn-outline-success mt-3 mx-4' onClick={HandleSpeak}>Speak</button>
            <button className='btn btn-outline-success mt-3 mx-4' onClick={handleCopy}>Copy</button>

            <button className='btn btn-outline-danger mt-3 mx-4' onClick={HandleClear}>Clear</button>
            <button className='btn btn-outline-danger mt-3 mx-4' onClick={RemoveSpace}>Remove Extra Space</button> 
            <br /><br /><br />
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} Word</p>
            <p>{text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Reading Time</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        
        
        
    )
}


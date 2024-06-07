import React, {useState} from 'react'

export default function TextForm(props) {
        const [text, setText]= useState("Input Your Text");
        // setText("Enter Your Text");

        const handleOnChange = (event) => {
            console.log("On Change");
            setText(event.target.value);
        }
        const handleUpChange = () => {
            console.log("Btn Click");
            let newT = text.toUpperCase();
            setText(newT);
        }
        const handleLowChange = () => {
            console.log("Btn Click");
            let newText = text.toLowerCase();
            setText(newText);
        }
        const handleSpeak = () => {
            let newText = new SpeechSynthesisUtterance();
            newText.text = text;
            window.speechSynthesis.speak(newText);
        }
        const handleClear = () => {
            let newText = "";
            setText(newText);

        }
        const handleCopy = () => {
            var newText = document.getElementById('exampleFormControlTextarea1');
            newText.select();
            navigator.clipboard.writeText(newText.value);

        }
        const handleRemoveSpace = () => {
            let newText = text.split(/[ ] + /);
            setText(newText.join(" "));
        }

    return (

        <div className="mb-3 mx-5 my-5 ">
            <div>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert To Upper case</button>
            <button className='btn btn-outline-success my-3 mx-4' onClick={handleLowChange}>Convert To Lower case</button>
            <button className='btn btn-outline-warning my-3 mx-4' onClick={handleSpeak}>Speak</button>
            <button className='btn btn-outline-danger my-3 mx-4' onClick={handleClear}>Clear</button>
            <button className='btn btn-outline-danger my-3 mx-4' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-outline-danger my-3 mx-4' onClick={handleRemoveSpace}>Remove extra space</button>


            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split("").length} Words</p>
                <p>{text.length} Characters</p>
                <p>{0.008*text.split("").length} Reading Time </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>

    )
}

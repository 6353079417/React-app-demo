import React, {useState} from 'react'

export default function TextForm(props) {
        const [text, setText]= useState("Input Your Text");
        // setText("Enter Your Text");

        const handleOnChange = (event) => {
            console.log("On CHange");
            setText(event.target.value)
        }

        const handleUpChange = () => {
            console.log("Btn Click");
            let newText = text.toUpperCase();
            setText(newText);

        }

    return (

        <div className="mb-3 mx-5 my-5 ">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert To Upper case</button>
        </div>

    )
}

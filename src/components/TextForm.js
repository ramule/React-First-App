import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upper case was clicked');
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        console.log('handleOnChange was clicked');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container mt-3'>
                <div>
                    <h1>{props.heading}</h1>
                    <div className='mb-3'>
                        <textarea className='form-control' value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                </div>
                <div>
                    <h2>your text summary</h2>
                    <p>{text.split(/\s+/).filter((element) => {return element.length != 0}).length} words and {text.length} characters...</p>
                </div>
            </div>
        </>
    )
}

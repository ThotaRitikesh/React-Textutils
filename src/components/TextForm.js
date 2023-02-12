import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        const a=text.toUpperCase()
        setText(a)
    }
    const clear = ()=>{
        setText("")
    }
    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleLoClick = ()=>{
        const a=text.toLowerCase()
        setText(a)
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const[text,setText]=useState(" ");
  return (
    <>
<div className='container' style={{color:props.mode==='light'? 'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'? 'white':'#131f3b' ,color:props.mode==='light'? 'black':'white'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} style={{backgroundColor:props.mode==='light'? 'blue':'grey' ,color:props.mode==='light'? 'white':'black',border:0}}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} style={{backgroundColor:props.mode==='light'? 'blue':'grey' ,color:props.mode==='light'? 'white':'black',border:0}}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} style={{backgroundColor:props.mode==='light'? 'blue':'grey' ,color:props.mode==='light'? 'white':'black',border:0}}>copy text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={speak} style={{backgroundColor:props.mode==='light'? 'blue':'grey' ,color:props.mode==='light'? 'white':'black',border:0}}>speak</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clear} style={{backgroundColor:props.mode==='light'? 'blue':'grey' ,color:props.mode==='light'? 'white':'black',border:0}}>clear</button>



</div>
<div className="container my-3  " style={{color:props.mode==='light'? 'black':'white'}}>
    <h2>Your text summary</h2>
    {/* <p>{text.length} characters</p> */}
    <p>{text.split(/\s/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <h4>Preview of text</h4>
    <p>{text}</p>
</div>

</>
  )
}
 
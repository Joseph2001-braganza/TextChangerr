import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('');
    const [boldFont, setBoldFont] = React.useState(false);
    const [fontFamily1, setFontFamily] = React.useState(false);
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        setText("");
    }
    const handleTitleclick = () => {
        // here it goes 
        let go = titleCase(text);
        setText(go);
        function titleCase(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // here are its fun tions
    //using CSS for bold and other types of properties.
    /* let styles1 = {
         fontFamily: "sans-serif",
         fontStyle1: "italic",
         fontStyle2: "bold"
     }*/
    return (
        <>
            <div className="container">
                <div className="mb-3 ms-5 me-5">
                    <label htmlFor="box" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'} fw-bold fs-5`} >{props.heading}</label>
                    <textarea style={{
                        fontWeight: boldFont ? "bold" : "normal",
                        fontFamily: fontFamily1 ? "sans-serif" : "normal",
                    }} placeholder="Write in Here" value={text} onChange={handleOnChange} className={`form-control bg-${props.mode === 'light' ? 'light' : 'secondary text-light'}`} id="box" rows="8"></textarea>
                </div>
                <button className="mb-3 ms-5 me-3 btn btn-primary" onClick={handleUpclick} >Convert to UpperCase</button>
                <button className="mb-3 ms-5 me-3 btn btn-primary" onClick={handleLoclick} >Convert to lowerCase</button>
                <button className="mb-3 ms-5 me-3 btn btn-primary" onClick={handleTitleclick} >Convert to TitleCase</button>
                <button className="mb-3 ms-5 me-3 btn btn-success" onClick={handleClear}>Clear</button>
                <div className="dropdown mb-3 ms-5 me-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Styles
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={() => setBoldFont(!boldFont)}>Bold</button>
                        <button className="dropdown-item" onClick={() => setFontFamily(!fontFamily1)}>Sans Serif</button>
                    </div>
                </div>
            </div>
            <div className="container-hover">
                <div className={`mb-3 ms-5 me-5  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h2 className="text-danger">Summary</h2>
                    <p>words :{text.split(' ').filter((ele) => { return ele.length !== 0 }).length} and characters :{text.length}</p>
                    <h3 className="text-danger">Estimated time to Read</h3>
                    <p>{0.008 * text.split(" ").length} min</p>
                </div>
            </div>
        </>
    )
}

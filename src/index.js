import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let myDate=new Date()

function Header() {
  return <div className="my-header" style={{ backgroundColor: 'pink', textAlign: 'center', color: 'blue' }}><h1>היום הראשון הראשון שגומרים מאוחר לשנת תשפד</h1></div>
}

function MyFooter() {
  return <div><a href='https://'>קישור לשרות לקוחות</a></div>
}

function Body() {
  return <div>
    <label htmlFor="my-inpu">הכנס שם פרטי</label>
    <input id='my-inpu'></input>
  </div>
}

function MyDate(){
  //let myTitle=new Date().getDay()>1?'יום ראשון עבר':'יום ראשון';
  return <div>{new Date().getDay()>1?'יום ראשון עבר':'יום ראשון'}</div>
}

root.render(
  <React.Fragment>
    {/* <MyDate></MyDate>
    <Header></Header>
    <Body></Body>
    <MyFooter></MyFooter> */}
    <App></App>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

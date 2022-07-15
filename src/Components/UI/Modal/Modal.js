import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

// const Backdrop = (props) => {
//       return <div className={styles.backdrop} onClick={props.onCancel} />;
//     };

// const ShownModal = (props) => {

//       const [enteredTitle, setEnteredTitle] = useState('')
//       const [enteredInfo, setEnteredInfo] = useState('')
//       const [enteredPrice, setEnteredPrice] = useState('')

//       function onChangeTitleHandler (event) {
// setEnteredTitle(event.target.value)
//       }

//       function onChangeInfoHandler (event) {
//             setEnteredInfo(event.target.value)
//       }
//       function onChangePriceHandler (event) {
//             setEnteredPrice(event.target.value)
//       }

//       const submitHandler =(event) => {
//             event.preventDefault()
// console.log(enteredTitle, enteredInfo, enteredPrice)

//       }

// return (
//             <div className={styles.modal}>
// <form onSubmit={submitHandler}>
//                   <label>Title</label>
//                   <input type='text'value={enteredTitle} onChange={onChangeTitleHandler}/>
//                   <label>Description</label>
//                 <textarea rows="6" cols="50" onChange={onChangeInfoHandler} value={enteredInfo}></textarea>
//                 <label>Price</label>
//                   <input type='number' min='10' value={enteredPrice} onChange={onChangePriceHandler}/>
//                   <button className={styles['button-9']} onClick={props.onCancel}>Add</button>

//             </form>

//             </div>
//       )
// }

const Modal = (props) => {
  // const ShownModal = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredInfo, setEnteredInfo] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isValid, setIsValid] =useState(true)
  const [isSubbed, setIsSubbed] =useState(true)

  const onChangeTitleHandler=(event) =>{
      if(event.target.value.trim().length > 0){
            setIsValid(true);
      }
    setEnteredTitle(event.target.value);
  }

  const onChangeInfoHandler =(event) =>{
      if(event.target.value.trim().length > 0){
            setIsValid(true);
      }
    setEnteredInfo(event.target.value);
  }
  const onChangePriceHandler =(event) => {
      if(event.target.value.trim().length > 0){
            setIsValid(true);
      }
    setEnteredPrice(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    if( enteredTitle.trim().length === 0) {
      setIsValid(false);
      return;
    }  if(enteredInfo.trim().length === 0) {
      setIsValid(false);
      return;
    }  if(enteredPrice.trim().length === 0) {
      setIsValid(false);
      return;
    } 
    setIsSubbed(false)
    props.onAddData(enteredTitle, enteredInfo, enteredPrice);

  };

  

  return (
    <React.Fragment>
      <div className={styles.backdrop}  onClick={props.onCancel} />;
      <div className={styles.modal}>
     
        <form onSubmit={submitHandler}>
            <div style={{display: 'flex'}}>
          <label>Title</label>
          <label className={`${styles.errorMess} ${!isValid && styles.invalid}`}>Pls correct or add values</label>
          </div>
          <input
            type="text"
            value={enteredTitle}
            onChange={onChangeTitleHandler}
          />
          <label>Description</label>
          <textarea
            rows="6"
            cols="50"
            onChange={onChangeInfoHandler}
            value={enteredInfo}
          ></textarea>
          <label>Price</label>
          
          <input
            type="number"
            min="10"
            value={enteredPrice}
            onChange={onChangePriceHandler}
          />
          <div className={styles.btn}>
          <button className={styles["button-9"]} type='submit'>
            Add
          </button>
          {/* <button className={styles["button-9"]} type='reset' >
            Cancel
          </button> */}
           <label className={`${styles.subMess} ${!isSubbed && styles.suc}`}>Succesfully listed. Pls check list</label>
          </div>
          
        </form>
      
      </div>
    </React.Fragment>
  );
};
export default Modal;

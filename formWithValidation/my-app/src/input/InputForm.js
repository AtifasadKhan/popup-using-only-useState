import { useState } from 'react';
// -------------------------------------------------------
import NullPopup from '../popup/NullPopup';
import NegativePopup from '../popup/NegativePopup';
// -------------------------------------------------------

const InputForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // -------------------------------------------------------
  const [popup, setPopup] = useState(false);
  const [negative, setNegative] = useState(false);
  // -------------------------------------------------------

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //   obj to catch
    const inputCatched = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    // ------------------------------------------------------------------
    // *************************************************
    // for pop up
    // *************************************************
    if (inputCatched.name === '' || inputCatched.age === '') {
      setPopup(true);
      return null;
    }
    // =======================================
    else if (inputCatched.age < 0) {
      setNegative(true);
      return null;
    }
    props.retrieve(inputCatched);
    setAge('');
    setName('');

    // ------------------------------------------------------------------
  };

  return (
    <div>
      <form action='' onSubmit={submitHandler}>
        <div>
          <label htmlFor=''>Enter Name</label>
          <input
            type='text'
            name=''
            id=''
            onChange={nameHandler}
            value={name}
          />
        </div>

        <br />
        <div>
          <label htmlFor=''>Enter Age</label>
          <input
            type='number'
            name=''
            id=''
            onChange={ageHandler}
            value={age}
          />
        </div>

        <br />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <NullPopup trigger={popup} setTrigger={setPopup}></NullPopup>
      <NegativePopup
        trigger={negative}
        setNegative={setNegative}
      ></NegativePopup>
    </div>
  );
};
export default InputForm;

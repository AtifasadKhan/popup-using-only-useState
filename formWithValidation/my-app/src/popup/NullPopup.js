import './Popup.css';
const NullPopup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h4>Invalid blank input!</h4>
        <p>Please enter the values in the input fields!</p>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default NullPopup;

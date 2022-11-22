import './Popup.css';
const NegativePopup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h4>Invalid Age!</h4>
        <p>Please enter the proper age!</p>
        <button className='close-btn' onClick={() => props.setNegative(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default NegativePopup;

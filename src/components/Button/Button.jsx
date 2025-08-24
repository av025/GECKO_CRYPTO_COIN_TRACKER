function Button({ buttonText, onClickHandler, buttonStyles, buttonDisabled }) {
    console.log(buttonStyles)
  return (
    <button
      className={buttonStyles}
      onClick={onClickHandler}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;

function Button({ buttonText, onClickHandler, buttonStyles, buttonDisabled }) {
  return (
    <button
      className={`${buttonStyles} btn-wide text-white text-2xl`}
      onClick={onClickHandler}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;

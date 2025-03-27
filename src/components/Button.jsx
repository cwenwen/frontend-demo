function Button({ children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className='grow-0 font-ppNeueMontreal500 flex justify-center items-center bg-black cursor-pointer px-5 h-[35px] text-newsprint rounded-full'
    >
      {children}
    </button>
  );
}

export default Button;

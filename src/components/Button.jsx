function Button({ children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="font-ppNeueMontreal500 text-newsprint hover:bg-postItGreen flex h-[35px] grow-0 cursor-pointer items-center justify-center rounded-full bg-black px-5 hover:border hover:border-dashed hover:text-black"
    >
      {children}
    </button>
  );
}

export default Button;

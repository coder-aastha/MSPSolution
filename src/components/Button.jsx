function Button({ title, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-3xl text-xl font-bold p-1.5 px-5 text-white bg-[#015EC9] hover:bg-black"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;

function LargeButton({title}) {
  return (
    <div>
      <button className="rounded-full text-xl font-bold p-1.5 px-12 py-5 text-white bg-[#015EC9] hover:bg-black">
        {title}
      </button>
    </div>
  );
}

export default LargeButton;

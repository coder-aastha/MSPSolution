function AboutCompanyCard({ number, title }) {
  return (
    <div className="w-full max-w-[276px] h-[111.2px] flex flex-col gap-1 justify-center rounded-lg bg-[#F2F5F9] p-4">
      <h1 className="text-3xl font-bold text-[#015EC9]">{number}</h1>
      <p className="text-2xl font-medium">{title}</p>
    </div>
  );
}

export default AboutCompanyCard;

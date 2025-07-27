

function CompanyCard({ company }) {
  return (
    <div className="bg-white/30 p-6 rounded-4xl shadow-xl shadow-black/30 max-w-71">
      <a href={`/company-profiles/${company.id}`}>
        <img
          src={company.logo}
          alt={company.name}
          className="h-60 object-contain mx-auto"
        />
        <h2 className="text-center mt-4 font-bold text-2xl">{company.name}</h2>
      </a>
      
    </div>
  );
}

export default CompanyCard;

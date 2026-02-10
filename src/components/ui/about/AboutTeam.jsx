const AboutTeam = (member) => {
  return (
    <section>
      <div className="flex items-end justify-center w-92.5 h-107.5 bg-muted rounded-md mb-8">
        <img src={member.image} alt={member.firstName} />
      </div>
      <h3 className="font-inter text-[32px] font-medium">{member.firstName}</h3>
      <p className="font-poppins">{member.title}</p>
      <div className="flex items-center gap-4 mt-4">
        {member.icons.map((icon, index) => (
          <img key={index} src={icon} alt={`Social icon ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};
export default AboutTeam;

import Members from '../../assets/data/Members.json';

function FooterTeamLinks() {
  return (
    <div className=" lg:mr-6 lg:text-[15px] lg:text-[#FFFFFF] sm:invisible md:invisible lg:visible ">
      <h5 className="font-bold mb-1">Our Team</h5>
      <ul className="list-none mb-0">
        {Members.map((Member) => (
          <li key={Member.name}>
            <a href={Member.link} target="_blank" rel="noreferrer">
              {Member.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterTeamLinks;

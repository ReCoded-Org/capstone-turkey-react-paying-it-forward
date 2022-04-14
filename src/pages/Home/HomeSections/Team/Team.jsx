import Avatar from '@mui/material/Avatar';

function Team() {
  const memebers = [
    {
      name: 'Khadija',
      department: 'Web Devlelopment',
      // image: Khadija,
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      name: 'Kutay',
      department: 'Web Devlelopment',
      // image: Kutay,
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      name: 'Şebnem',
      department: 'Web Devlelopment',
      // image: Şebnem,
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      name: 'Abuobaida',
      department: 'Web Devlelopment',
      // image: Abuobaida,
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      name: 'Göksu',
      department: 'Web Devlelopment',
      // image: Göksu,
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      name: 'Mustafa',
      department: 'Web Devlelopment',
      // image: Mustafa,
      // facebook: facebook,
      // twitter: twitter,
    },
  ];

  return (
    <div className="py-8">
      <div>
        <h1 className="mb-12 text-4xl font-bold">The Team</h1>
      </div>
      <div>
        <div className="grid md:grid-cols-6 gap-3 mt-14 grid-cols-2 ml-12 sm:gap-0">
          {memebers.map((person) => {
            return (
              <div className=" ">
                <Avatar
                  //   alt={}
                  src={person.avatar}
                  className="my-4 lg:ml-12 xl:ml-20 md:ml-6 sm:mr-8"
                />
                <h2>{person.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;

import Card from './Card';

function Team() {
  const memebers = [
    {
      id: 1,
      name: 'Khadija',
      department: 'Web developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TGC9JKS8-3d89cad21cb6-512',
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      id: 2,
      name: 'Kutay',
      department: 'team leader',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U032E6F3KNY-1d2d343493bf-512',
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      id: 3,
      name: 'Şebnem',
      department: 'Web developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TGCCHPU4-3120bdbf7c87-512',
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      id: 4,
      name: 'Abuobaida',
      department: 'Web developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TE4JQQ4T-3245dfa48692-512',
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      id: 5,
      name: 'Göksu',
      department: 'Web developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02SZETTP1V-c422a48cbb0c-512',
      // facebook: facebook,
      // twitter: twitter,
    },
    {
      id: 6,
      name: 'Mustafa',
      department: 'Web developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02T7CZD8J2-10780d1f297d-512',

      // facebook: facebook,
      // twitter: twitter,
    },
  ];
  return (
    <div className="mt-3">
      <div>
        <h1 className=" mt-14 text-4xl font-bold ">The Team</h1>
      </div>
      <div className="py-12 flex flex-row md:gap-14 flex-wrap items-center justify-center">
        {memebers.map((person) => (
          <div className="">
            <div key={person.id} className=" mt-14 px-8">
              <Card {...person} className="p-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

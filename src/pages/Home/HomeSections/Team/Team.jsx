import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import { Typography } from '@mui/material';

function Team() {
  const MemberNames = [
    {
      avatar: 'khadija',
      name: 'khadija hawa',
    },
    {
      avatar: 'kutay',
      name: 'Kutay Kağan Özen',
    },
    {
      avatar: 'Şebnem',
      name: 'Şebnem',
    },
    {
      avatar: 'Abuobaida',
      name: 'Abuobaida Abdi',
    },
    {
      avatar: 'Göksu',
      name: 'Göksu Alkan',
    },
    {
      avatar: 'Mustafa',
      name: 'Mustafa Durmaz',
    },
  ];

  return (
    <div className="h-[90%] py-6 ">
      <div>
        <h1 className="mb-12 text-4xl font-bold">The Team</h1>
      </div>
      <div>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={12}
          className=" mt-14"
        >
          {MemberNames.map((person) => {
            return (
              <div className="">
                <Avatar
                  //   alt={}
                  src={person.avatar}
                  className=" object-fit mb-9 mx-8"
                />
                <h2>{person.name}</h2>
              </div>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}

export default Team;

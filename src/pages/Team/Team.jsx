function Team() {
  const members = [
    {
      id: 1,
      name: 'Kutay Kağan Özen',
      department: 'Team Leader',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U032E6F3KNY-1d2d343493bf-512',
      link: 'https://github.com/Iseluin',
    },
    {
      id: 2,
      name: 'Khadija Hawa',
      department: 'Web Developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TGC9JKS8-3d89cad21cb6-512',
      link: 'https://github.com/khadijahawa',
    },
    {
      id: 3,
      name: 'Şebnem Görmüş',
      department: 'Web Developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TGCCHPU4-3120bdbf7c87-512',
      link: 'https://github.com/sebnemgormus',
    },
    {
      id: 4,
      name: 'Abuobaida Abdi',
      department: 'Web Developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02TE4JQQ4T-3245dfa48692-512',
      link: 'https://github.com/androidmini9x',
    },
    {
      id: 5,
      name: 'Göksu Alkan',
      department: 'Web Developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02SZETTP1V-c422a48cbb0c-512',
      link: 'https://github.com/goksu1',
    },
    {
      id: 6,
      name: 'Mustafa Durmaz',
      department: 'Web Developer',
      image:
        'https://ca.slack-edge.com/T02ST1JH0CE-U02T7CZD8J2-10780d1f297d-512',
      link: 'https://github.com/mustafadurmaz',
    },
  ];

  return (
    <div className="my-4">
      <h1 className="text-4xl font-medium title-font text-gray-900 my-12">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
        {members.map((member) => {
          return (
            <div key={member.id} className="flex flex-col items-center my-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mb-3 object-cover object-center rounded-full"
              />
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.department}</p>
              <div className="flex justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5ZM18 16.5417V12.4631C18 10.2783 16.8368 9.26164 15.2851 9.26167C14.0327 9.26167 13.4731 9.95303 13.1598 10.437V9.42877H10.8016C10.8334 10.0965 10.8016 16.5417 10.8016 16.5417H13.16V12.5694C13.16 12.3565 13.176 12.1449 13.2382 11.9929C13.4088 11.5676 13.7965 11.1279 14.4479 11.1279C15.3013 11.1279 15.6423 11.7803 15.6423 12.7362V16.5417H18ZM13.1598 10.437V10.46H13.1443C13.1467 10.4561 13.1495 10.452 13.1524 10.4479C13.155 10.4442 13.1575 10.4406 13.1598 10.437ZM7 7.2287C7 6.53075 7.52773 6 8.33455 6C9.14145 6 9.63744 6.53075 9.65294 7.2287C9.65294 7.91155 9.14145 8.4583 8.319 8.4583H8.30325C7.51246 8.4583 7 7.91144 7 7.2287ZM9.49763 16.5417H7.14007V9.42877H9.49763V16.5417Z"
                    fill="#3F3B3B"
                  />
                </svg>
                <svg
                  className="ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5ZM16.575 8.6625C17.1 8.625 17.55 8.475 18 8.2875C17.6625 8.775 17.25 9.225 16.8 9.5625V9.8625C16.8 13.125 14.325 16.875 9.7875 16.875C8.4 16.875 7.0875 16.5 6 15.7875C6.1875 15.825 6.41249 15.825 6.59999 15.825H6.6C7.7625 15.825 8.85 15.45 9.675 14.775C8.625 14.7375 7.6875 14.025 7.3875 13.05C7.5375 13.0875 7.68749 13.0875 7.83749 13.0875H7.8375C8.03392 13.0875 8.20177 13.0589 8.39093 13.0267C8.41845 13.022 8.44642 13.0173 8.475 13.0125C7.35 12.7875 6.4875 11.8125 6.4875 10.6125V10.575C6.825 10.7625 7.2 10.875 7.6125 10.875C6.975 10.425 6.525 9.675 6.525 8.8125C6.525 8.3625 6.6375 7.95 6.8625 7.575C8.0625 9.075 9.8625 10.05 11.925 10.1625C11.8875 9.975 11.85 9.7875 11.85 9.6C11.85 8.2125 12.975 7.125 14.325 7.125C15 7.125 15.6375 7.425 16.0875 7.9125C16.65 7.8 17.175 7.6125 17.6625 7.3125C17.475 7.875 17.1 8.3625 16.575 8.6625Z"
                    fill="#3F3B3B"
                  />
                </svg>
                <a href={member.link}>
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;

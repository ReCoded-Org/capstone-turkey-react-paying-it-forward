import React from 'react'

import Members from '../assets/data/Members.json';

function FooterTeamLinks() {
  return (
    <div className="mt-6 text-sm text-[#FFFFFF] hidden md:block md:ml-[10px]">
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
  )
}

export default FooterTeamLinks
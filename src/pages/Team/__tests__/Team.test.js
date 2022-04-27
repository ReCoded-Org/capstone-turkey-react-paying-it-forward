import { render, screen } from '@testing-library/react';
import Team from '../Team';

test('Team Page', () => {
  const members = [
    'Kutay Kağan Özen',
    'Khadija Hawa',
    'Şebnem Görmüş',
    'Abuobaida Abdi',
    'Göksu Alkan',
    'Mustafa Durmaz',
  ];

  render(<Team />);

  for (let i = 0; i < members.length; i += 1) {
    expect(screen.getByText(members[i])).toBeInTheDocument();
  }
});

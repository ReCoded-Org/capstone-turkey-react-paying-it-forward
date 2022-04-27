import { render, screen, fireEvent, wait } from '@testing-library/react';
import Team from '../Team';

test('Test Team Page', () => {

    const members = [
        'Kutay Kağan Özen', 'Khadija Hawa', 'Şebnem Görmüş', 'Abuobaida Abdi', 'Göksu Alkan', 'Mustafa Durmaz'
    ];

    render(<Team />);

    for (let i = 0; i < members.length; i++) {
        expect(screen.getByText(members[i])).toBeInTheDocument();
    }

});

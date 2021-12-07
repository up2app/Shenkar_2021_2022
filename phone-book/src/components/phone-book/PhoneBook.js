import { useState } from 'react';
import User from '../user/User';

const PhoneBook = () => {

    //state --> the component info
    const [book, SetBook] = useState([
        { id: 1, name: 'Shani', phone: '050-1111111' },
        { id: 2, name: 'Alon', phone: '050-2222222' },
        { id: 3, name: 'Sitar', phone: '050-3333333' },
        { id: 4, name: 'Yaara', phone: '050-4444444' },
        { id: 5, name: 'Eden', phone: '050-5555555' },
    ])

    return (
        <div>
            {
                book.map((item) => <User data={item} />)
            }
        </div>
    )
}

export default PhoneBook;
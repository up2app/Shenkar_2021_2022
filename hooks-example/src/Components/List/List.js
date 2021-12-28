//component that render list of hobbies 
//in this component we can display, add or remove hobby  

import { useContext, useEffect } from 'react';
import Item from '../Item/Item';
import { HobbiesContext } from '../../Context/HobbiesContext'; //import the context to access the dat aand functions 

function List() {

  //destructure what weget from the provider
  const { hobbies, AddHobby, RemoveHobby } = useContext(HobbiesContext);

  useEffect(() => {
    AddHobby({ id: 2, name: 'soccer' })
  }, [])

  return (
    <div className="list">
      {/* render items */}
      {hobbies.map(hobby => <Item data={hobby} handleDelete={RemoveHobby} />)}
    </div>
  );
}

export default List;
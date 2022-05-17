import React, { useState } from 'react'
import { getPhotos } from '../../store/actions/actions';
import { Menu as SemanticMenu } from 'semantic-ui-react'
import { MENU } from '../../shared/constants';

function Menu(){
  const [types, setTypes] = useState([]);

  const handleItemClick = (e) => {
    const item = e.target.id;
    let newTypes = [];

    // Add item if not already in types
    if (!types.includes(item)) {
      newTypes = [...types, item];
    } else {
      // Remove item if already in list
      newTypes = types.filter((type) => type !== item);
    }

    // Updated State && Make API call to update photos
    setTypes(newTypes);
    getPhotos(newTypes);
  };

  return (
    <SemanticMenu data-testid='menu'>
      {MENU.map((item, idx) => (
        < SemanticMenu.Item
          key= {`${item}_${idx}`}
          id={item}
          active={types.includes(item)}
          onClick={handleItemClick}
        >
          {item}
        </ SemanticMenu.Item>
      ))}
    </SemanticMenu>
    )
}

export default Menu;

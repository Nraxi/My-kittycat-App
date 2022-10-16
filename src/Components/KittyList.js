import React, { useState } from 'react'
import '../CSS/Kittys.css'

function KittyLista() {

  const api = './catdata.json'

  //Gets all kittys
  const [kittysList, setKittysList] = useState([])

  //Sort cute kittys
  const [kittysListSort, setKittysListSort] = useState([])


  //Gets all kittys
  function Kittys() {
    fetch(api)
      .then(response => response.json())
      .then(data => setKittysList(data.cats))
      .catch(err => console.error(err));
  }

  //Sort all cute kittys 
  function sortCuteKittys() {
    fetch(api)
      .then(response => response.json())
      .then(data => setKittysListSort(data.cats))
      .catch(err => console.error(err));
    const sorted = kittysList.sort((a, b) => {
      return b.cutenessLevel - a.cutenessLevel;
    })
    setKittysListSort(sorted)

  };

  //Sort all bad kittys 
  function sortBadKittys() {
    const sorted = kittysList.sort((a, b) => {
      return a.cutenessLevel - b.cutenessLevel;
    })
    setKittysListSort(sorted)

  };

  return (
    <div className='Listig'>

      <div className='SortMenu'>
        <h4>Sorting:</h4>
        <button className='ButtonsKitty-b1' onClick={Kittys}>None</button>
        <button className='ButtonsKitty-b2' onClick={sortCuteKittys}>Much cute</button>
        <button className='ButtonsKitty-b3' onClick={sortBadKittys}>Not cute</button>
      </div>
      <div className='grid'>
        {/* Get all Kittys */}
        <ul className='allakatter' >
          {kittysList.map(u => (
            <li className='listofcats' key={u.name}>
              <img src={`images/${u.image}`} alt="blank" className='bild' />
              <p>{u.name}</p>
            </li>

          ))}
        </ul>

      </div>




    </div >
  )
}

export default KittyLista
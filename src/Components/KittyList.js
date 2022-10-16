import React, { useState } from 'react'


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
      return a.cutenessLevel - b.cutenessLevel;
    })
    setKittysListSort(sorted)

  };

  //Sort all bad kittys 
  function sortBadKittys() {
    const sorted = kittysList.sort((a, b) => {
      return b.cutenessLevel - a.cutenessLevel;
    })
    setKittysListSort(sorted)

  };

  return (
    <div className='allakatter'>


      <button onClick={Kittys}>Get all Kittys</button>
      <button onClick={sortCuteKittys}>Get cute Kittys</button>
      <button onClick={sortBadKittys}>Get Bad Kittys</button>


      {/* Get all Kittys */}
      <ul className='listofcats'>
        {kittysList.map(u => (
          <li key={u.name}>
            <img src={`images/${u.image}`} alt="blank" />
            {u.name}
          </li>
        ))}
      </ul>



    </div>
  )
}

export default KittyLista
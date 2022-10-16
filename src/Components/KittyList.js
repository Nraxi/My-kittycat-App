import React, { useState } from 'react'


function KittyLista() {

  const api = './catdata.json'

  //Get first kitty
  const [kitty, setKitty] = useState([])

  //Gets all kittys
  const [kittysList, setKittysList] = useState([])

  //Sort cute kittys
  const [kittysListSort, setKittysListSort] = useState()


  //Get first kitty
  function kittyList() {
    fetch(api)
      .then(response => response.json())
      .then(data => setKitty(data.cats[0].name))
      .catch(err => console.error(err));
  }

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
      .then(function (data) {
        console.log(data)
        data.cats.sort(function (a, b) {
          return a.cutenessLevel - b.cutenessLevel
        });
      })
      .catch(err => console.error(err));
  }

  function sortBadKittys() {

    fetch(api)
      .then(response => response.json())
      .then(function setKittysListSort(data) {
        console.log(data)
        return data.cats.sort(function (a, b) {
          return b.cutenessLevel - a.cutenessLevel
        })
      })
      .catch(err => console.error(err));
  }



  return (
    <div className='allakatter'>

      <button onClick={kittyList}>Get one Kitty</button>
      <button onClick={Kittys}>Get all Kittys</button>
      <button onClick={sortCuteKittys}>Get cute Kittys</button>
      <button onClick={sortBadKittys}>Get Bad Kittys</button>


      {/* Gets first Kitty */}
      <div>{kitty}</div>

      {/* Get all CUTE Kittys */}
      {/* <ul>
        {kittysListCute.map(u => (
          <li key={u.name}>
            <img src={`images/${u.image}`} />
            {u.name}
          </li>
        ))}
      </ul> */}


      {/* Get all Kittys */}
      <ul>
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
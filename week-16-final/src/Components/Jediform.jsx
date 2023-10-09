import React from 'react'
import {useState, useEffect} from 'react'

export default function Jediform() {

    const API_URL ="http://localhost:3000/profile"

    const [jedis, setJedis] = useState([{}])

    const [newJediName, setNewJediName] = useState('')
    const [newJediLightsaber, setNewJediLightsaber] = useState('')
    const [newJediForceAbility, setNewJediForceAbility] = useState('')
    
    const [updateJediName, setUpdateJediName] = useState('')
    const [updateJediLightsaber, setUpdateJediLightsaber] = useState('')
    const [updateJediForceAbility, setUpdateJediForceAbility] = useState('')

    const getJedi = () => {
        fetch(API_URL)
        .then(data => data.json())
        .then(data => setJedis(data))
      }
      
      useEffect(() => {
        getJedi()
      }, [])

      const deleteJedi = (id) => {
        fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        }).then(() => getJedi())
      }

      const postNewJedi = (e) => {
        e.preventDefault()
      
        fetch(API_URL, {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: newJediName,
          lightaberColor: newJediLightsaber,
          favForceAbility: newJediForceAbility,
          })
        }).then(() => getJedi())
      }

      const updateJedi = (e, jediObject) => {

        e.preventDefault()
      
        let updateJediObject = {
          ...jediObject,
          name: updateJediName,
          lightaberColor: updateJediLightsaber,
          favForceAbility: updateJediForceAbility,
        }
      
        fetch(`${API_URL}/${jediObject.id}`, {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updateJediObject)
        }).then(() => getJedi())
      
      }

    return (
        <div className="App">
      <form>
        <h3>Post New Jedi</h3>
        <label>Jedi Name:</label>
        <input onChange = {(e) => setNewJediName(e.target.value)}></input><br></br>
        <label>Jedi Rank:</label>
        <input onChange = {(e) => setNewJediLightsaber(e.target.value)}></input><br></br>
        <label>Jedi Color:</label>
        <input onChange = {(e) => setNewJediForceAbility(e.target.value)}></input><br></br>
        <button className="btn btn-outline-success" onClick={(e) => postNewJedi(e)}>Post</button>
      </form>

      {jedis.map((jedi, index) => (
      <div className="jediContainer" key={index}>
        <div>
          Name: {jedi.name}<br></br>
          Rank: {jedi.lightaberColor}<br></br>
          Class: {jedi.favForceAbility}<br></br>
          <button className="btn btn-outline-danger" onClick={() => deleteJedi(jedi.id)}>X</button>
        </div>
        <form>
          <h4>Update Jedi</h4>
          <label>Jedi Name:</label>
          <input onChange = {(e) => setUpdateJediName(e.target.value)}></input><br></br>
          <label>Jedi Rank:</label>
          <input onChange = {(e) => setUpdateJediLightsaber(e.target.value)}></input><br></br>
          <label>Jedi Class:</label>
          <input onChange = {(e) => setUpdateJediForceAbility(e.target.value)}></input><br></br>
          <button className="btn btn-outline-info" onClick={(e) => updateJedi(e, jedi)}>Update</button>
        </form>
      </div>
    ))}
  </div>
  );
    
}
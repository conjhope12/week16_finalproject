import {useState, useEffect} from 'react'

// The below function contains all of the CRUD parameters for week 16:

export default function Jediform() {

  // This varibale contains my JSON API.

    const API_URL ="http://localhost:3000/jedis"

    const [jedis, setJedis] = useState([{}])

    const [newJediName, setNewJediName] = useState('')
    const [newJediLightSaber, setNewJediLightSaber] = useState('')
    const [newJediForceAbility, setNewJediForceAbility] = useState('')
    
    const [updateJediName, setUpdateJediName] = useState('')
    const [updateJediLightSaber, setUpdateJediLightSaber] = useState('')
    const [updateJediForceAbility, setUpdateJediForceAbility] = useState('')

// The two functions below allow my to retrieve and remove data from the JSON API using Vite-React.
// >> I am using useState and useEffect to help create the link for the function components.

    const getJedi = () => {
        fetch(API_URL)
        .then(data => data.json())
        .then(data => setJedis(data))
        .then(data => console.log(jedis))
      }
      
      useEffect(() => {
        getJedi()
      }, [])

// The function below allows me to delete data from the API.
// >> This function deletes by ID.
// >> Fetch allows me to make AJAX requets.

      const deleteJedi = (id) => {
        fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        }).then(() => getJedi())
      }

// This function allows me to add data to an API with no limit.
// >> e.preventDefault() allows data to be posted to the API by preventing a refresh.

      const postNewJedi = (e) => {
        e.preventDefault()
      
        fetch(API_URL, {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: newJediName,
          lightSaberColor: newJediLightSaber,
          favForceAbility: newJediForceAbility,
          })
        }).then(() => getJedi())
      }

// This finction allows me to create changes to existing data within the API.
// A form will appear next to posted data in the API.
// >> The new strings within the form will replace the old data within the API.

      const updateJedi = (e, jediObject) => {

        e.preventDefault()
      
        let updateJediObject = {
          ...jediObject,
          name: updateJediName,
          lightSaberColor: updateJediLightSaber,
          favForceAbility: updateJediForceAbility,
        }
      
        fetch(`${API_URL}/${jediObject.id}`, {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updateJediObject)
        }).then(() => getJedi())
      
      }

    return (

    // The below form allows me to post new data.
    // >> The onClick below connects the button with the events and functions in the JS.

    // The .map allows me to display the data entered from the input's command.
    // >> The "key" allows me to create an unique index so Vite does not act up on me.

    // The final form attaches itself to the existing data.
    // >> What ever strings are sent through the inputs will replace the existing data with new strings.
        <div className="App">
          <form>
            <h3 className="jedi-post-title" >Post New Jedi</h3>
            <h6 className="jedi-input-label-post">Jedi Name:</h6>
            <input className="jedi-input-post" onChange = {(e) => setNewJediName(e.target.value)}></input><br></br>
            <h6 className="jedi-input-label-post">Jedi Lightsaber:</h6>
            <input className="jedi-input-post" onChange = {(e) => setNewJediLightSaber(e.target.value)}></input><br></br>
            <h6 className="jedi-input-label-post">Jedi Force Ability:</h6>
            <input className="jedi-input-post" onChange = {(e) => setNewJediForceAbility(e.target.value)}></input><br></br>
            <button className="btn btn-outline-success jedi-btn-post" onClick={(e) => postNewJedi(e)}>Post</button>
          </form>

          {jedis.map((jedi, index) => {
            return (
          <div className="jediContainer" key={index}>
            <div className='jedi-delete'>
              Name: {jedi.name}<br></br>
              Rank: {jedi.lightSaberColor}<br></br>
              Class: {jedi.favForceAbility}<br></br>
              <button className="btn btn-outline-danger" onClick={() => deleteJedi(jedi.id)}>X</button>
            </div>
            <form className="jedi-form-update">
              <h4 className="jedi-update-title">Update Jedi</h4>
              <label>Jedi Name:</label><br></br>
              <input className="jedi-input" onChange = {(e) => setUpdateJediName(e.target.value)}></input><br></br>
              <label>Jedi Lightsaber:</label><br></br>
              <input className="jedi-input" onChange = {(e) => setUpdateJediLightSaber(e.target.value)}></input><br></br>
              <label>Jedi Force Ability:</label><br></br>
              <input className="jedi-input" onChange = {(e) => setUpdateJediForceAbility(e.target.value)}></input><br></br>
              <button className="btn btn-outline-info" onClick={(e) => updateJedi(e, jedi)}>Update</button>
            </form>
          </div>)
          })}
        </div>
  )
    
}
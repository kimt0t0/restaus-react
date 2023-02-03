import { useState } from 'react'
import { createRestaurant } from '../services/Api'
import '../styles/AddRestaurant.scss'

function AddRestaurant () {
//   const [name, setName] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    latitude: 0,
    longitude: 0
  })

  //   const handleChangeName = (event) => {
  //     setName(event.target.value)
  //   }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.name && formData.description) {
      const result = await createRestaurant(formData)
      console.log(result)
    }
  }

  return (
    <div className='add-restaurant'>
      <div className='ar-header'>
        <h1 className='ar-title'>AJOUTER UN RESTAURANT</h1>
      </div>
      <div className='ar-content'>

        <form className='ar-form' onSubmit={handleSubmit} noValidate>

          <label htmlFor='' className='arf-label'>
            Nom:
            <input type='text' className='arf-input' name='name' onChange={handleChange} value={formData.name} />
          </label>

          <label htmlFor='' className='arf-label'>
            Description:
            <input type='text' className='arf-input' name='description' onChange={handleChange} value={formData.description} />
          </label>

          <label htmlFor='' className='arf-label'>
            Latitude:
            <input type='number' className='arf-input' name='latitude' onChange={handleChange} value={formData.latitude} />
          </label>

          <label htmlFor='' className='arf-label'>
            Longitude:
            <input type='number' className='arf-input' name='longitude' onChange={handleChange} value={formData.longitude} />
          </label>

          <input type='submit' value='Ajouter le restaurant' />
        </form>
      </div>
    </div>
  )
}

export default AddRestaurant

import React, {useState} from 'react'

const Step2 = ({data, onDataChange}) => {
  const [addressLine1, setAddressLine1] = useState(data.addressLine1 || '')
  const [addressLine2, setAddressLine2] = useState(data.addressLine2 || '')
  const [city, setCity] = useState(data.city || '')
  const [state, setState] = useState(data.state || '')
  const [zipCode, setZipCode] = useState(data.zipCode || '')

  const handleChange = e => {
    const {name, value} = e.target
    switch (name) {
      case 'addressLine1':
        setAddressLine1(value)
        break
      case 'addressLine2':
        setAddressLine2(value)
        break
      case 'city':
        setCity(value)
        break
      case 'state':
        setState(value)
        break
      case 'zipCode':
        setZipCode(value)
        break
      default:
        break
    }
    onDataChange({addressLine1, addressLine2, city, state, zipCode})
  }

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <label>
        Address Line 1:
        <input
          type='text'
          name='addressLine1'
          value={addressLine1}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address Line 2:
        <input
          type='text'
          name='addressLine2'
          value={addressLine2}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        State:
        <input
          type='text'
          name='state'
          value={state}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Zip Code:
        <input
          type='text'
          name='zipCode'
          value={zipCode}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  )
}

export default Step2

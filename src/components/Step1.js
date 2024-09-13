import React, {useState} from 'react'

const Step1 = ({data, onDataChange}) => {
  const [name, setName] = useState(data.name || '')
  const [email, setEmail] = useState(data.email || '')
  const [phone, setPhone] = useState(data.phone || '')

  const handleChange = e => {
    const {name, value} = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      default:
        break
    }
    onDataChange({name, email, phone})
  }

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type='tel'
          name='phone'
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  )
}

export default Step1

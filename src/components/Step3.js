import React from 'react'

const Step3 = ({data, onSubmit}) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Address Line 1:</strong> {data.addressLine1}
      </p>
      <p>
        <strong>Address Line 2:</strong> {data.addressLine2}
      </p>
      <p>
        <strong>City:</strong> {data.city}
      </p>
      <p>
        <strong>State:</strong> {data.state}
      </p>
      <p>
        <strong>Zip Code:</strong> {data.zipCode}
      </p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Step3

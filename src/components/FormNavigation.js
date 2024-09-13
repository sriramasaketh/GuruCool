import React from 'react'

const FormNavigation = ({
  currentStep,
  onNext,
  onBack,
  disableBack,
  disableNext,
}) => {
  return (
    <div className='form-navigation'>
      <button onClick={onBack} disabled={disableBack}>
        Back
      </button>
      <button onClick={onNext} disabled={disableNext}>
        Next
      </button>
    </div>
  )
}

export default FormNavigation

import React, {useState, useEffect} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import FormNavigation from './FormNavigation'

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData')
    return savedData ? JSON.parse(savedData) : {}
  })

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleDataChange = stepData => {
    setFormData(prevData => ({...prevData, ...stepData}))
  }

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1)
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={formData} onDataChange={handleDataChange} />
      case 2:
        return <Step2 data={formData} onDataChange={handleDataChange} />
      case 3:
        return <Step3 data={formData} onSubmit={handleSubmit} />
      default:
        return null
    }
  }

  return (
    <div className='form-container'>
      <FormNavigation
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        disableBack={currentStep === 1}
        disableNext={currentStep === 3}
      />
      {renderStep()}
    </div>
  )
}

export default FormContainer

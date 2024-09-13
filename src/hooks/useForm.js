import {useState, useEffect} from 'react'

const useForm = initialData => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData')
    return savedData ? JSON.parse(savedData) : initialData
  })

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleChange = newData => {
    setFormData(prevData => ({...prevData, ...newData}))
  }

  return [formData, handleChange]
}

export default useForm

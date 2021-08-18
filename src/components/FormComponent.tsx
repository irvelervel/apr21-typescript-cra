import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ChangeEvent, FormEvent, useState } from 'react'

const FormComponent = () => {
  const [name, setName] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent

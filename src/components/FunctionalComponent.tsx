import { useState } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [name, setName] = useState<null | string>(null)

  return (
    <>
      <h1>FUNCTIONAL COMPONENT</h1>
      <p onClick={() => setName('Mike')}>{name}</p>
    </>
  )
}

export default FunctionalComponent

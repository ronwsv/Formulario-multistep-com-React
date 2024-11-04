import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';
 
// Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

import "./App.css"

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setdata] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setdata((prev) => {
      return {
        ...prev,
        [key]: value
      };{
      }
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
     <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
     <Thanks data={data}/>];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className='App'>
      <div className="header">
      <h2>Deixe sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para
         avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">{currentComponent}</div>
        {/* estou no minuto 29:19 da aula */}
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
                </button>
            )}
            
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Avançar</span>
                </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
                </button>
            )}
            </div>
          
       
        </form>
      </div>
      </div>
  )
}

export default App
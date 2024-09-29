import React from 'react'
import Tableprop from './Tableprop'

 export const Dataprop = (props) => {

   let {children} = props
    
  return (

    <div>
             <h1>{children}</h1>

        <h1>Destructuring while receiving props</h1>
        {/* Destructuring while receiving props*/}

        <Tableprop myname="raghul"role ="front-end" Framework =" Next js" exp ={1} />
        <Tableprop myname="raghul rag "role ="CSE" Framework ="CIET" exp ={1} />


    </div>

  )
}

export default Dataprop
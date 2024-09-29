import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'  // Import your main React component
import './index.css'
import { Attributes } from './Attributes';
import { Expression } from './Expression';
import {FunctionCompont} from './components/FunctionCompont';
import {AddingEvent} from './Events/AddingEvent'
import {PassingEvent} from './Events/PassingEvent'
import {EventObject} from './Events/EventObject'
//import {LogicalOperactors} from './Condictionals/LogicalOperactors'
import {Parent} from './Props/ParentChildren/Parent'
import {Prop} from './Props/DefaultProp/Prop'
import {Dataprop} from './Props/DestruReceivingProp/Dataprop'
//import {ClassCompont} from './components/ClassCompont'
import { Usestate } from './Hooks/Usestate'
import {Usestate1} from './UseState/Usestate1'
import {Usestate2} from './UseState/Usestate2'
import {Usestate3} from './UseState/Usestate3'
import {Project1} from './UseState/Project1'
import {Project2} from './UseState/Project2'
import {Useeffect} from './Hooks/Useeffect';
import {UseEffect1} from './UseEffect/UseEffect1';
import {UseEffect2} from './UseEffect/UseEffect2';
import {UseEffect3} from './UseEffect/UseEffect3';
import {UseEffectCleanUp} from './UseEffect/UseEffectCleanUp '
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Attributes/>
    <Expression/>
    <FunctionCompont/>
    <div className='evnt'>
    <AddingEvent/>
    <EventObject/>
    <PassingEvent/>
    </div>
    <Parent/>
    <Prop/>
    <Dataprop/>
    <Usestate/>
    <Usestate1/>
    <Usestate2/>
    <Usestate3/>
    <Project1/>
    <Project2/>
    <Useeffect/>
    <UseEffect1/>
    <UseEffect2/>
    <UseEffect3/>
    <UseEffectCleanUp/>
  </React.StrictMode>
);

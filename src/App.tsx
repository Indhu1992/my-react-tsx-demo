import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Footer } from './component/Footer/Footer';
import { Greet } from './component/Greet'
import { Header } from './component/Header/Header';
import { Heading } from './component/Heading';
import { Home } from './component/Home/Home';
import { Input } from './component/Input';
import { Landing } from './component/Landing/Landing';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person'
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';


function App() {
  const personName = {
    first: 'Indhu',
    second: 'Mathi',
  }
  const personList = [{
    first: 'Ajith',
    second: 'Kumar',
  },
  {
    first: 'Pushpa',
    second: 'C',
  },
  {
    first: 'Anajali',
    second: 'C',
  }]
  return (
    <div className="App">
      {/* <Greet name="Indhu" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status Status='Error' />
      <Heading>Type of variant</Heading>
      <Oscar>
        <Heading>The Oscar react component</Heading>
      </Oscar>
      <Greet name='Indhu' isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1 px solid black', padding: '1rem' }} /> */}
      {/* */}
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react';

function Abc(props) {
  return <h2>my name is {props.name}</h2>;
}
export default function Navbar() {
  return (
    <>
      <h1>My name is :</h1>
      <Abc name='abhiraj' />
    </>
  );
}

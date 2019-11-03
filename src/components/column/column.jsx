import React from 'react';

import Container from './container';
import Title from './title';
import PersonList from './person-list';
import Person from '../person/person';

import forcarErro from '../../forcar-erro';

export default class Column extends React.Component {
  state = {
    error: false
  };

  dispararErro = e => {
    try {
      forcarErro(this);
    } catch (error) {
      console.log('erro disparado: ', error);
      this.setState({ error });
    }
  };
  render() {
    if (this.state.error) {
      return <h1>Capturei um erro.</h1>;
    }
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <PersonList>
          {this.props.people.map(person => (
            <Person key={person.id} person={person} />
          ))}
        </PersonList>
      </Container>
    );
  }
}

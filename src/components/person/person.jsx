import React from 'react'

import Container from './container'

export default class Task extends React.Component {
  render() {
    return (
      <Container>
        {this.props.person.content}
      </Container>
    )
  }
}
import React from 'react';

import ErrorBoundary from './ErrorBoundary'
import Column from './components/column/column';
import initialData from './initial-data';

class App extends React.Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const columnPeople = column.peopleIds.map((personId) => this.state.people[personId]);

      return (
        <ErrorBoundary>
          <Column key={columnId} people={columnPeople} column={column} />;
        </ErrorBoundary>
      )
    })
  }
}

export default App;

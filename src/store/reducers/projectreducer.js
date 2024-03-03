const initState={
    projects : [
        {
            id: 1,
            title: 'First Object',
            description: 'This is the description of the first object.',
            technologies: ['C++', 'C#']
          },
          {
            id: 2,
            title: 'Second Object',
            description: 'This is the description of the second object.',
            technologies: ['C++', 'C#']
          },
          {
            id: 3,
            title: 'Third Object',
            description: 'This is the description of the third object.',
            technologies: ['C++', 'C#']
          }
      ]
}
const projectreducers = (state = initState, action) => {
  console.log('Reducer called with action:', action);
  switch (action.type) {
      case 'CREATE_PROJECT':
          console.log('created', action.project);
          // Update state as needed
          return state;
      default:
          console.log('Unknown action:', action);
          return state;
  }
}
export default  projectreducers;
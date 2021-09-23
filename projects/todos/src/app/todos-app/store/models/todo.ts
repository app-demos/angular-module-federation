export interface Todo {
  id: string;
  completed: boolean;
  label: string;
}
export const dummyTodos = [{
  label: 'Buy milk',
  completed: false,
  id: '42',
},
{
  label: 'Build something fun!',
  completed: false,
  id: '43',
}];
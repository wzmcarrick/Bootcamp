import TaskItem from './TaskItem';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'task1',
    priority: 'High',
    assignee: 'joseph',
    dueDate: '2022-02-02',
    // detail: 'lorem ipsum...lorem...............',
  },
  {
    id: 2,
    name: 'task2',
    priority: 'Medium',
    assignee: 'elton',
    dueDate: '2022-03-02',
    // detail: 'lorem ipsum...',
  },
  {
    id: 3,
    name: 'task1',
    priority: 'Low',
    assignee: 'ziming',
    dueDate: '2023-02-02',
    // detail: 'lorem ipsum...',
  },
];

const Column = ({ data }) => {
  return data.map((task) => <TaskItem key={task.id} showTask={task} />);
};

export default Column;

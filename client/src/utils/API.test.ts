import axios from 'axios';
import API from './API';

jest.mock('axios');


it('This route should retrieve Todo data', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        todo_id: 44,
        name: 'axiosMock',
        description: "We're mock testing axios",
        tags: ['test'],
        added: new Date(),
        completed: new Date()
      }
    ]
  })
  
  let result = await API.getAllTodos();
  expect(result.data[0].name).toBe('axiosMock');
});

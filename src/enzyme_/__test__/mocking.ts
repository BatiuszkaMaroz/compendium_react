// mAxios.get.mockImplementation(async (url) => {
//   if (url === 'https://jsonplaceholder.typicode.com/posts') {
//     return {
//       data: [
//         {
//           id: 1,
//           title: 'john doe',
//         },
//         {
//           id: 2,
//           title: 'keyboard cat',
//         },
//       ],
//     };
//   }

//   return { data: undefined };
// });

// jest.mock('axios', () => ({
//   get: jest.fn().mockResolvedValue(43),
// }));

// (axios as any).get.mockResolvedValue(43);

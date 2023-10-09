import { rest } from 'msw';

const createMockList = (length: number, item: any) => Array(length).fill(item);

// api 많아지면 분리
export const handlers = [
  rest.get('/stocks/mock-user', (req, res, ctx) => {
    const stockItem = {
      image: 'mock_img_link',
      name: 'stock_mock_name',
      price: 30000,
      stock: 3,
    };

    return res(ctx.status(200), ctx.json(createMockList(10, stockItem)));
  }),
];

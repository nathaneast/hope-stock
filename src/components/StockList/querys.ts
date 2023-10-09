import apis from '@/apis';
import { useQuery } from 'react-query';

const STOCK_LIST = 'stockList';

export const useStockList = () => useQuery([STOCK_LIST], apis.stockList);

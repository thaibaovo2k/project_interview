import { useRoutes } from 'react-router-dom';
import { FavoritePage } from './pages/FavoritePage';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/favorite', element: <FavoritePage /> },
  { path: '/detail/:id', element: <ProductDetailPage /> },
  { path: '/*', element: <HomePage /> },
]

export const App = () => {
  const router = useRoutes(routes)

  return router;
}

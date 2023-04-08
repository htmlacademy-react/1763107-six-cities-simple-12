import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainLayout from '../../pages/main-layout/main-layout';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import ErrorPage from '../../pages/error-page/error-page';
import { OfferList } from '../../types/offers';

interface Props {
  offers: OfferList;
  numberOffers: number;
}

function App({ offers, numberOffers }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainLayout offers={offers} numberOffers={numberOffers} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Room} element={<RoomPage offers={offers} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

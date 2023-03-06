import MainLayout from '../../pages/main-layout/main-layout';

interface Props {
  offers: number;
}

function App(props: Props): JSX.Element {
  const { offers } = props;
  return <MainLayout offers={offers} />;
}

export default App;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Card from '../../components/card/card';
import { OfferList } from '../../types/offers';

const ROOM_LINK = '/offer/';

interface Props {
  offers: OfferList;
}

function CardList({ offers }: Props): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  function onMouseOverHandler(id: string) {
    setActiveCard(id);
  }
  function onMouseLeaveHandler() {
    setActiveCard(null);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {activeCard}
      {offers.map((offer) => (
        <Link to={`${ROOM_LINK}${offer.id}`} key={`${offer.id}`}>
          <Card
            offer={offer}
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
        </Link>
      ))}
    </div>
  );
}
export default CardList;

import { useState } from 'react';
import { OfferList } from '../../types/offers';
import OtherCard from '../../components/other-card/OtherCard';

interface Props {
  offers: OfferList;
}

export default function OfferListContainer({ offers }: Props): JSX.Element {
  const [activeOtherCard, setActiveOtherCard] = useState<string | null>(null);

  function onMouseOverHandler(id: string) {
    setActiveOtherCard(id);
  }
  function onMouseLeaveHandler() {
    setActiveOtherCard(null);
  }
  return (
    <div className="near-places__list places__list">
      {activeOtherCard}
      {offers.map((offer) => (
        <OtherCard
          key={offer.id}
          offer={offer}
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

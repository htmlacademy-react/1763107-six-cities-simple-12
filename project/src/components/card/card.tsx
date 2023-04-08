import { Offer } from '../../types/offers';

interface CardProps {
  offer: Offer;
  onMouseOver: (id: string) => void;
  onMouseLeave: () => void;
}

function Card(props: CardProps): JSX.Element {
  const { offer, onMouseOver, onMouseLeave } = props;
  const { id, price, rating, title, type, image } = offer;
  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => onMouseOver(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default Card;

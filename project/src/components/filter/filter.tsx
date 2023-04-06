import { useState } from 'react';

const FILTER_VALUES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function Filter(): JSX.Element {
  const [filter] = useState(FILTER_VALUES[0]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {FILTER_VALUES.map((item) => {
          const currentClass =
            filter === item
              ? 'places__option places__option--active'
              : 'places__option';
          return (
            <li className={currentClass} tabIndex={0} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
export default Filter;

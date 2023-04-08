import * as React from 'react';

interface CityList {
  cities: string[];
}

function CityList(props: CityList): JSX.Element {
  const { cities } = props;
  return (
    <div className="tabs">
      <h1 className="visually-hidden">Cities</h1>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;

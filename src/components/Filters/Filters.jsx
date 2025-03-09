import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './Filters.module.css';

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState('A to Z');
  console.log(selectedFilter);

  return (
    <div className={s.filtersContainer}>
      <label className={s.filtersLabel}>Filters</label>
      <div className={s.filtersSelectWrap}>
        <select
          className={s.filtersSelect}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option className={s.filtersOption} value="A to Z" selected>
            A to Z
          </option>
          <option className={s.filtersOption} value="Z to A">
            Z to A
          </option>
          <option className={s.filtersOption} value="Less than 10$">
            Less than 10$
          </option>
          <option className={s.filtersOption} value="Greater than 10$">
            Greater than 10$
          </option>
          <option className={s.filtersOption} value="Popular">
            Popular
          </option>
          <option className={s.filtersOption} value="Not popular">
            Not popular
          </option>
          <option className={s.filtersOption} value="Show all">
            Show all
          </option>
        </select>
        {/* <svg width={20} height={20}>
          <use href={icons + '#icon-chevron-down'}></use>
        </svg> */}
      </div>
    </div>
  );
};

export default Filters;

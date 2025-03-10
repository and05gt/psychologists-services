import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './Filters.module.css';

const options = [
  { label: 'A to Z', value: 'A to Z' },
  { label: 'Z to A', value: 'Z to A' },
  { label: 'Less than 10$', value: 'Less than 10$' },
  { label: 'Greater than 10$', value: 'Greater than 10$' },
  { label: 'Popular', value: 'Popular' },
  { label: 'Not popular', value: 'Not popular' },
  { label: 'Show all', value: 'Show all' },
];
const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className={s.filtersContainer}>
      <p className={s.filtersLabel}>Filters</p>
      <div className={s.customSelect}>
        <div className={s.select} onClick={() => setShowOptions(!showOptions)}>
          {selectedOption ? selectedOption.label : 'A to Z'}
          {showOptions ? (
            <svg width={16} height={16}>
              <use href={icons + '#icon-chevron-up'}></use>
            </svg>
          ) : (
            <svg width={16} height={16}>
              <use href={icons + '#icon-chevron-down'}></use>
            </svg>
          )}
        </div>
        {showOptions && (
          <div className={showOptions ? s.optionsShow : s.options}>
            {options.map((option) => (
              <div
                className={s.option}
                key={option.value}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;

import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './Filters.module.css';
import { useDispatch } from 'react-redux';
import { getSortType } from '../../redux/psychologists/slice.js';

const options = [
  { id: 1, label: 'A to Z' },
  { id: 2, label: 'Z to A' },
  { id: 3, label: 'Less than 10$' },
  { id: 4, label: 'Greater than 10$' },
  { id: 5, label: 'Popular' },
  { id: 6, label: 'Not popular' },
  { id: 7, label: 'Show all' },
];
const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    dispatch(getSortType(option.label));
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
          <div className={showOptions && s.optionsShow}>
            {options.map((option) => (
              <div
                className={
                  selectedOption.label === option.label
                    ? s.optionSelected
                    : s.option
                }
                key={option.id}
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

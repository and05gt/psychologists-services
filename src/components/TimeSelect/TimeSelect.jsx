import { useRef, useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './TimeSelect.module.css';

const times = [
  { id: 1, value: '09:00' },
  { id: 2, value: '09:30' },
  { id: 3, value: '10:00' },
  { id: 4, value: '10:30' },
];

const TimeSelect = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimes, setShowTimes] = useState(false);
  const timeSelectRef = useRef(null);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setShowTimes(false);
    onTimeSelect(time.value);
  };

  const handleTimeSelectClick = () => {
    setShowTimes(!showTimes);
    if (timeSelectRef.current) {
      timeSelectRef.current.focus();
    }
  };

  return (
    <div className={s.customTimeSelect}>
      <div
        className={s.timeSelect}
        onClick={handleTimeSelectClick}
        tabIndex={0}
        ref={timeSelectRef}
      >
        {selectedTime ? selectedTime.value : '00:00'}
        <svg width={16} height={16}>
          <use href={icons + '#icon-clock'}></use>
        </svg>
      </div>
      {showTimes && (
        <div className={showTimes && s.timeOptionsShow}>
          <p className={s.timeSubtitle}>Meeting time</p>
          <div className={s.timeOptionWrap}>
            {times.map((time) => (
              <div
                className={s.timeOption}
                key={time.id}
                onClick={() => handleSelectTime(time)}
              >
                {time.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSelect;

import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './TimeSelect.module.css';

const times = [
  { id: 1, value: '09:00' },
  { id: 2, value: '09:30' },
  { id: 3, value: '10:00' },
  { id: 4, value: '10:30' },
];

const TimeSelect = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimes, setShowTimes] = useState(false);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setShowTimes(false);
  };

  return (
    <div className={s.customTimeSelect}>
      <div className={s.timeSelect} onClick={() => setShowTimes(!showTimes)}>
        {selectedTime ? selectedTime.value : '00:00'}
        <svg width={20} height={20}>
          <use href={icons + '#icon-clock'}></use>
        </svg>
      </div>
      {showTimes && (
        <div className={showTimes ? s.timeOptionsShow : s.timeOptions}>
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

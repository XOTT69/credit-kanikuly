import React, { useState } from 'react';

export default function CreditLimitChecker({ clientType, onNext }) {
  const [hasCreditLimit, setHasCreditLimit] = useState(null);
  const [message, setMessage] = useState('');

  const handleSelection = (value) => {
    setHasCreditLimit(value);
    if (value === false) {
      setMessage(
        'Кредитний ліміт ВІДСУТНІЙ або НЕ ДОСТУПНИЙ: НЕ пропонуємо надати документи для кредитних канікул, консультуємо стандартно щодо кредитного ліміту (підвищення, умови тощо)'
      );
    } else {
      setMessage(
        'Кредитний ліміт НАЯВНИЙ: Переходимо до наступного кроку'
      );
    }
  };

  return (
    <div>
      <h2>Перевірка наявності кредитного ліміту</h2>
      <p>Будь ласка, підтвердіть наявність кредитного ліміту у Клієнта</p>
      <div>
        <button onClick={() => handleSelection(true)}>Так</button>
        <button onClick={() => handleSelection(false)} style={{ marginLeft: 10 }}>Ні</button>
      </div>
      {message && (
        <div style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
          {message}
        </div>
      )}
      {hasCreditLimit !== null && (
        <button style={{ marginTop: 20 }} onClick={onNext}>
          Наступний крок
        </button>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

const militaryDocs = [
  'Військовий квиток (сторінки 1, 4-5, 8-9)',
  'Посвідчення офіцера (сторінки 1-2, 8-12)',
  'Військово-обліковий документ (електронна або паперова форма)',
  'Форма № 5',
  'Форма № 33',
  'Витяг з наказу про призначення на посаду (копія)'
];

const relativeDocs = [
  'Свідоцтво про шлюб (оригінал або pdf з Дія)',
  'Документи про військову службу чоловіка/дружини'
];

const cadetDocs = [
  'Довідка з підрозділу/органу про участь у заходах оборони'
];

export default function DocumentRequirements({ clientType, onNext }) {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (clientType === 'military') setList(militaryDocs);
    else if (clientType === 'relative') setList(relativeDocs);
    else if (clientType === 'cadet') setList(cadetDocs);
    else setList([]);

    setChecked([]);
  }, [clientType]);

  useEffect(() => {
    setChecked(new Array(list.length).fill(false));
  }, [list]);

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div>
      <h2>Вимоги та перелік документів</h2>
      <p>Відмітьте отримані документи згідно інструкції.</p>
      <ul>
        {list.map((doc, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={checked[idx] || false}
                onChange={() => toggleCheck(idx)}
              />
              {doc}
            </label>
          </li>
        ))}
      </ul>
      <button style={{ marginTop: 20 }} onClick={onNext}>
        Наступний крок
      </button>
    </div>
  );
}

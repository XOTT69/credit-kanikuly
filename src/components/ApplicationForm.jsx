import React, { useState } from 'react';

export default function ApplicationForm({ clientType, onNext }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    servicePlace: '',
    serviceType: '',
    documents: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, documents: e.target.files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Зазвичай тут відправка даних на сервер або у ХД
    alert('Заявка прийнята! Дані: ' + JSON.stringify(formData, null, 2));
    onNext();
  };

  return (
    <div>
      <h2>Оформлення заявки</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ПІБ:</label><br/>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Телефон:</label><br/>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Місце проходження служби:</label><br/>
          <input type="text" name="servicePlace" value={formData.servicePlace} onChange={handleChange} />
        </div>
        <div>
          <label>Форма служби (контракт/мобілізований):</label><br/>
          <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChange} />
        </div>
        <div>
          <label>Документи (фото/скани):</label><br/>
          <input type="file" name="documents" onChange={handleFileChange} multiple required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Відправити заявку</button>
      </form>
    </div>
  );
}

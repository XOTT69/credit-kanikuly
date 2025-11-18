import React, { useState } from 'react';
import CreditLimitChecker from '../components/CreditLimitChecker';
import DocumentRequirements from '../components/DocumentRequirements';
import MessageTemplates from '../components/MessageTemplates';
import ApplicationForm from '../components/ApplicationForm';
import LawReference from '../components/LawReference';

export default function OperatorWorkflow() {
  const [step, setStep] = useState(0);
  const [clientType, setClientType] = useState(null);

  const steps = [
    "Вибір типу клієнта",
    "Перевірка кредитного ліміту",
    "Інструкція для консультації",
    "Вимоги до документів",
    "Оформлення заявки",
    "Мовний модуль",
    "Роз'яснення по закону"
  ];

  return (
    <div style={{ maxWidth: 800, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Робота з військовослужбовцями: Кредитні канікули</h1>
      <div style={{ marginBottom: 20 }}>
        <strong>{`Крок ${step + 1} із ${steps.length}: ${steps[step]}`}</strong>
      </div>
      {step === 0 &&
        <select onChange={e => { setClientType(e.target.value); setStep(step + 1); }} defaultValue="">
          <option value="" disabled>– Оберіть тип клієнта –</option>
          <option value="military">Військовослужбовець</option>
          <option value="relative">Родич військового</option>
          <option value="cadet">Курсант</option>
        </select>
      }
      {step === 1 && <CreditLimitChecker clientType={clientType} onNext={() => setStep(step + 1)} />}
      {step === 2 && <MessageTemplates clientType={clientType} onNext={() => setStep(step + 1)} />}
      {step === 3 && <DocumentRequirements clientType={clientType} onNext={() => setStep(step + 1)} />}
      {step === 4 && <ApplicationForm clientType={clientType} onNext={() => setStep(step + 1)} />}
      {step === 5 && <MessageTemplates clientType={clientType} onlyMessages={true} />}
      {step === 6 && <LawReference />}
      {step > 0 && (
        <div style={{ marginTop: 20 }}>
          <button onClick={() => setStep(step - 1)} disabled={step === 0}>Назад</button>
          {step < steps.length - 1 && <button style={{ marginLeft: 10 }} onClick={() => setStep(step + 1)}>Вперед</button>}
        </div>
      )}
    </div>
  );
}

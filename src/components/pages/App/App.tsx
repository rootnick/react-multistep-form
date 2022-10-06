import { useMultistepForm } from '@/hooks/useMultistepForm';
import appStyle from './app.module.css';

import { UserForm } from '@/components/forms/UserForm';
import { AddressForm } from '@/components/forms/AddressForm';
import { AccountForm } from '@/components/forms/AccountForm';
import { FormEvent, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

export function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Form successful!');
  };

  return (
    <div className={appStyle.app}>
      <form onSubmit={onSubmit}>
        <div className={appStyle.formCounter}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className={appStyle.buttonsContainer}>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

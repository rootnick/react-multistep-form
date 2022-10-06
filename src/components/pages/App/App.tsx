import { useMultistepForm } from '@/hooks/useMultistepForm';
import appStyle from './app.module.css';
import { UserForm } from '@/components/forms/UserForm';
import { AddressForm } from '@/components/forms/AddressForm';
import { AccountForm } from '@/components/forms/AccountForm';

export function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  return (
    <div className={appStyle.app}>
      <form>
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

          <button type="button" onClick={next}>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}

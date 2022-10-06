import { useMultistepForm } from '@/hooks/useMultistepForm';
import appStyle from './app.module.css';

export function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>, <div>three</div>]);

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

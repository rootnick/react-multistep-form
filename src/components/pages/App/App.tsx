import { useMultistepForm } from '@/hooks/useMultistepForm';
import appStyle from './app.module.css';

export function App() {
  const { steps, currentStepIndex } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>three</div>,
  ]);

  return (
    <div className={appStyle.app}>
      <form>
        <div className={appStyle.formCounter}>
          {currentStepIndex + 1}/{steps.length}
        </div>
      </form>
    </div>
  );
}

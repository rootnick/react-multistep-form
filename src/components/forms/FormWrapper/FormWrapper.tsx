import { ReactNode } from 'react';
import formStyle from './wrapper.module.css';

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className={formStyle.header}>{title}</h2>
      <div className={formStyle.children}>{children}</div>
    </>
  );
}

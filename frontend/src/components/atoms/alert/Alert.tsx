'use client';

import React from 'react';
import clsx from 'clsx';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert = ({ type, message }: AlertProps) => {
  return (
    <div
      role="alert"
      className={clsx(
        'alert p-4 mb-4 flex items-center',
        {
          'alert-success': type === 'success',
          'alert-error': type === 'error',
        }
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current mr-2"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={clsx(
            type === 'success'
              ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              : 'M6 18L18 6M6 6l12 12'
          )}
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Alert;

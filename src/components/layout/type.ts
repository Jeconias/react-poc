import React from 'react';

export type BaseComponent<T = {}> = T & {
  children?: React.ReactNode;
};

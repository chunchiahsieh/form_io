import React from 'react';

import styles from './Strapi.module.css';

export interface StrapiProps {
  prop?: string;
}

export function Strapi({prop = 'default value'}: StrapiProps) {
  return <div className={styles.Strapi}>Strapi {prop}</div>;
}

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Formio} from './Formio';

const meta: Meta<typeof Formio> = {
  component: Formio,
};

export default meta;

type Story = StoryObj<typeof Formio>;

export const Basic: Story = {args: {}};

import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {MyForm} from './MyForm';

const meta: Meta<typeof MyForm> = {
  component: MyForm,
};

export default meta;

type Story = StoryObj<typeof MyForm>;

export const Basic: Story = {args: {}};

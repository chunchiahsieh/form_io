import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Strapi} from './Strapi';

const meta: Meta<typeof Strapi> = {
  component: Strapi,
};

export default meta;

type Story = StoryObj<typeof Strapi>;

export const Basic: Story = {args: {}};

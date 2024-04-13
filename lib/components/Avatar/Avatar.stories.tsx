import {Meta, StoryFn} from '@storybook/react';
import Avatar, {AvatarProps} from './';

export default {
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Oleksandr Maksymenko',
  size: 'large',
  variant: 'circle',
  isBadge: true,
};
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../../../../src/Text';

const TextMeta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    children: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Basic: StoryObj<typeof Text> = {};

export const AnotherExample: StoryObj<typeof Text> = {
  args: {
    children: 'Another example',
  },
};

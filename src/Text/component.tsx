import React, { type FC, memo } from 'react';
import { Text as RNText } from 'react-native';

const Text: FC = ({ children }) => {
  return <RNText className="text-red">{children}</RNText>;
};

export default memo(Text);

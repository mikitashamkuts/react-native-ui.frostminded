import React, { type FC, memo } from 'react';
import { Text as RNText } from 'react-native';

type Props = {
  test: number;
};

const Text: FC<Props> = ({ test }) => {
  return <RNText>{test}</RNText>;
};

export default memo(Text);

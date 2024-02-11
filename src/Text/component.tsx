import React, { type FC, memo } from 'react';
import { Text as RNText } from 'react-native';

type Props = {
  test: any;
};

const Text: FC<Props> = ({ children, test }) => {
  return (
    <RNText className="text-red">
      {children}
      {test}
    </RNText>
  );
};

export default memo(Text);

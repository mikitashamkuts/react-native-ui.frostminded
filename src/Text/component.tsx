import React, { type FC, memo } from 'react';
import { Text as RNText } from 'react-native';

type Props = {
  test2: any;
};

const Text: FC<Props> = ({ children, test2 }) => {
  return (
    <RNText className="text-red">
      {children}
      {test2}
    </RNText>
  );
};

export default memo(Text);

import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '@gympass/yoga';

function SkeletonPage() {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: '16px',
      }}
    >
      <Skeleton
        type="circular"
        width={48}
        height={48}
        style={{ marginBottom: 16 }}
      />
      <Skeleton type="rectangular" width={400} height={200} />
    </View>
  );
}

export default SkeletonPage;

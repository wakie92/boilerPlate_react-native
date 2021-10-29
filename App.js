/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import WebviewContainer from './src/components/shared/WebviewContainer';

const App = () => {
  // 웹뷰와 rn과의 소통은 아래의 ref 값을 이용하여 이루어집니다.
  let webviewRef = useRef();

  /** 웹뷰 ref */
  const handleSetRef = _ref => {
    webviewRef = _ref;
  };

  /** webview 로딩 완료시 */
  const handleEndLoading = syntheticEvent => {
    // eslint-disable-next-line no-console
    console.log('handleEndLoading', syntheticEvent);

    /** rn에서 웹뷰로 정보를 보내는 메소드 */
    webviewRef.postMessage('로딩 완료시 webview로 정보를 보내는 곳');
  };

  return (
    <>
      <WebviewContainer
        webviewRef={webviewRef}
        handleSetRef={handleSetRef}
        handleEndLoading={handleEndLoading}
      />
    </>
  );
};

export default App;

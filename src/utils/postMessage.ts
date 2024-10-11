const reactNativePostMessage = (message: string) => {
  const isAndroid = /Android/.test(navigator.userAgent);
  const isiOS = /(iPhone|iPad|iPod)/.test(navigator.userAgent);
  if (isAndroid && isiOS) {
    alert('메세지 보냄' + message);
    window.ReactNativeWebView.postMessage(message);
  }
};

export default reactNativePostMessage;

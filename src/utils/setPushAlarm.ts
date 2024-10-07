const setPushAlarm = (state: boolean) => {
  if (state) {
    window.ReactNativeWebView.postMessage('push_notification');
  } else {
    window.ReactNativeWebView.postMessage('un_push_notification');
  }

  window.addEventListener('message', (e) => {
    console.log('Received message', e.data);
  });
};

export default setPushAlarm;

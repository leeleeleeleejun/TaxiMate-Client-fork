const handleError = (statusCode: number) => {
  switch (statusCode) {
    case 400:
      alert('Bad Request: 요청이 잘못되었습니다.');
      break;
    case 401:
      {
        alert(
          'Unauthorized: 로그인 정보가 유효하지 않습니다. 다시 로그인해주세요.'
        );
      }
      break;
    case 403:
      alert('Forbidden: 이 작업을 수행할 권한이 없습니다.');
      break;
    case 404:
      alert('Not Found: 요청한 리소스를 찾을 수 없습니다.');
      // 리다이렉트 또는 다른 처리
      redirectToHome();
      break;
    case 500:
      alert(
        'Internal Server Error: 서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.'
      );
      break;
    case 503:
      alert(
        'Service Unavailable: 서버가 현재 사용할 수 없습니다. 나중에 다시 시도해주세요.'
      );
      break;
    default:
      alert(
        `Error: 서버에서 예기치 않은 상태 코드를 반환했습니다. (Status code: ${statusCode})`
      );
  }
};

function redirectToHome() {
  window.location.href = '/';
}

export default handleError;

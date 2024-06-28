//marker 사용하는 상위 map 컴포넌트 스타일 하위로 추가하여 사용

const MarkerIconStyle = `
 .marker-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -100%;
    margin-top: -70%;
  }

  .marker-content-box {
    min-width: 40px;
    max-width: 500px;
    height: 40px;
    padding: 0 10px;

    background-color: var(--color-main);
    border-radius: 8px;
    border: none;

    color: var(--color-white);
    font-size: var(--font-small);
    font-weight: var(--weight-semi-bold);
    text-align: center;
    line-height: 40px;

    white-space: nowrap;
    span {
      font-weight: var(--weight-light);
    }
  }

  .marker-bottom-triangle {
    width: 0;
    height: 0;

    border-top: 11px solid var(--color-main);
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
  }
`;

export default MarkerIconStyle;

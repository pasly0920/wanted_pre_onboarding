function GNB() {
  return (
    <div className="Nav">
      <div className="NavButton">
        <img
          className="Menu"
          src="https://static.wanted.co.kr/images/icon-menu.png"
          alt=""
        ></img>
        <img
          className="logo"
          src="https://www.wantedlab.com/img/logo.png"
          alt=""
        ></img>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">채용</a>
          </li>
          <li>
            <a href="/">이벤트</a>
          </li>
          <li>
            <a href="/">직군별 연봉</a>
          </li>
          <li>
            <a href="/">이력서</a>
          </li>
          <li>
            <a href="/">커뮤니티</a>
          </li>
          <li>
            <a href="/">프리랜서</a>
          </li>
          <li>
            <a href="/">AI 합격예측</a>
          </li>
        </ul>
      </div>
      <aside>
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <defs>
            <path
              id="qt2dnsql4a"
              d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
            ></path>
          </defs>
          <g fill="none" fillRule="evenodd">
            <use
              fill="#333"
              fillRule="nonzero"
              stroke="#333"
              strokeWidth=".3"
            ></use>
          </g>
        </svg>
      </aside>
    </div>
  );
}
export default GNB;

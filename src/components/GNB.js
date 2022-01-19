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
            <a href="/" className="community">
              커뮤니티
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="/">프리랜서</a>
          </li>
          <li>
            <a href="/" className="AI">
              AI 합격예측
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      Beta
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <aside>
        <ul>
          <li>
            <button
              className="searchButton"
              typeof="button"
              data-attribute-id="gnb"
              data-gnb-kind="search"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                xmlnsXlink="https://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <defs>
                  <path
                    id=""
                    d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                  />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    stroke="#333"
                    strokeWidth=".3"
                    xlinkHref="#qt2dnsql4a"
                  ></use>
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button
              className="signUpButton"
              typeof="button"
              data-attribute-id="gnb"
              data-gnb-kind="signupLogin"
            >
              회원가입/로그인
            </button>
          </li>
          <li>
            <a className="dashboardButton" href="/dashboard">
              기업 서비스
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
export default GNB;

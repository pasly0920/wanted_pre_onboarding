import Carousel from "./components/Carousel";
import GNB from "./components/GNB";

function App() {
  const obj = [
    [
      "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
      "개발자 되고싶은 분들!?",
      "프론트엔드 무료 교육과정 참여하기",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
      "성과를 내는 마케팅",
      "실제 사례를 공개합니다!",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
      "개발자 성장 비결 공개!",
      "Velog, 글 쓰는 개발자들의 이야기",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
      "성장하는 개발자가 되려면?",
      "OOO 검색하지 말 것!",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
      "포트폴리오를 부탁해!",
      "디자이너의 포폴 살펴보기",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
      "해, 커리어 EP 02 공개",
      "마지막 관문 2라운드의 승자는?",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
      "2022년 달라지는 노동법령",
      "노무관리 쟁점 한 눈에 파악하기",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
      "UX 디자이너의 커리어 설계",
      "브랜드 가치를 더하는 디자인",
    ],
    [
      "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
      "마케팅 주니어를 찾습니다",
      "기업 과제 풀고 취업까지 한번에!",
    ],
  ];
  return (
    <div>
      <GNB />
      <Carousel props={obj} />
    </div>
  );
}

export default App;

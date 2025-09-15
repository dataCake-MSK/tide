import './index.css';

function HeaderBanner() {
  return (
    <header className="header-banner">  {/* header, nav는 div(무의미, block줄바꿈)에 SEO용 의미 추가한 semantic 태그 */}
      <div className="header-content">  
        <div className="title-section">
          <img src="tide-logo.png" alt="tide logo" className="title-icon"/><h1 className="title">TIDE</h1><small className="subtitle">Tools for Integrated Digital Engineering</small>
        </div>
        <nav className="menu-list">
          <span className="menu-item">CAN MDF Decode</span>  {/* 무의미 inline 태그 */}
          <span className="menu-item">MDF Merge</span>
          <span className="menu-item">What is MDF?</span>
        </nav>
      </div>
    </header>
  );
}

function CanMdfDecodeSection() {
  return (
    <section className="app-section">
      <h2 className="app-title">CAN MDF Decode</h2>
      <p className="app-description">
        CAN 통신 데이터를 포함한 MDF 파일을<br />
        DBC 파일을 통해 변환하여 읽고 해석 가능한 신호 데이터 포맷을 신규 MDF 파일을 생성
      </p>
      
      <div className="interface-section">
        <h3 className="interface-title">API</h3>
        <a href="https://google.com">문서(Swagger) 링크</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <HeaderBanner />
      <CanMdfDecodeSection />
    </div>
  );
}

import './index.css';

function HeaderBanner() {
  return (
    <header className="header-banner">  {/* header, nav는 div(무의미, block줄바꿈)에 SEO용 의미 추가한 semantic 태그 */}
      <div className="header-content">  
        <div className="title-section">
          <h1 className="title">TIDE</h1>
          <div className="title-icon">🔧</div>
        </div>
        <p className="subtitle">Tools for Integrated Digital Engineering</p>
        <nav className="menu-list">
          <span className="menu-item">CAN MDF Decode</span>  {/* 무의미 inline 태그 */}
          <span className="menu-item">MDF Merge</span>
          <span className="menu-item">What is MDF?</span>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <HeaderBanner />
    </div>
  );
}

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

      <div className="interface-section">
        <h3 className="interface-title">Test UI</h3>
        <div className="test-ui-grid">
          {/* Step 1 - MDF File Selection */}
          <div className="test-column">
            <div className="step-header">
              <div className="step-label">Step 1</div>
              <p className="step-description">변환하고자 하는 MDF 파일을 선택하세요.</p>
            </div>
            <div className="button-n-files">
              <button className="test-button active"> MDF 파일 선택</button>
              <div className="file-input-container">
                <div className="file-item">
                  <span className="file-name">testfile.mdf</span>
                  <button className="file-remove">×</button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - DBC File Selection */}
          <div className="test-column">
            <div className="step-header">
              <div className="step-label">Step 2</div>
              <p className="step-description">신호 해석에 사용할 DBC 파일들을 선택하세요.</p>
            </div>
            <button className="test-button inactive">DBC 파일 선택</button>
            <div className="checkbox-container">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" checked disabled />
                VDMS
              </label>
            </div>
            <div className="file-input-container">
              <div className="file-item">
                  <span className="file-name">testfile1.dbc</span>
                <div className="file-controls">
                  <select className="file-dropdown">
                    <option value="미적용">미적용</option>
                    <option value="전 채널">전 채널</option>
                    <option value="채널1(P1)">채널1(P1)</option>
                  </select>
                  <button className="file-remove">×</button>
                </div>
              </div>
              <div className="file-item">
                  <span className="file-name">testfile2.dbc</span>
                <div className="file-controls">
                  <select className="file-dropdown">
                    <option value="미적용">미적용</option>
                    <option value="전 채널">전 채널</option>
                    <option value="채널1(P1)">채널1(P1)</option>
                  </select>
                  <button className="file-remove">×</button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Process */}
          <div className="test-column">
            <div className="step-header">
              <div className="step-label">Step 3</div>
              <p className="step-description">선택한 파일들을 서버로 전송하여 변환을 시작합니다.</p>
            </div>
            <button className="test-button inactive">업로드 및 변환</button>
          </div>

          {/* Step 4 - Download */}
          <div className="test-column">
            <div className="step-header">
              <div className="step-label">Step 4</div>
              <p className="step-description">변환 완료된 MDF 파일을 다운로드하세요.</p>
            </div>
            <button className="test-button inactive">MDF 파일 다운로드</button>
          </div>
        </div>
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

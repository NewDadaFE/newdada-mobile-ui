import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import GitHubButton from 'react-github-button'
import 'react-github-button/assets/style.css'

export default class Home extends React.Component {
    componentWillMount() {
        if (location.hash) {
            const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');

            location.href = pathname;
        }
    }

    render() {
        const title = '新达达 | 移动端组件库';
        const iframeUrl = 'https://newdadafe.github.io/impression_vue/#/button';

        return (
            <DocumentTitle title={title}>
                <div className="home-main">

                    <div className="banner-text-wrapper">
                        <h2 key="h2">移动端组件库&前端框架</h2>
                        <div>
                          设计、前端高效协同，快速搭建移动端组件库
                          <GitHubButton
                              key="github-button"
                              type="stargazers"
                              namespace="NewDadaFE"
                              repo="newdada-mobile-ui"
                          />
                        </div>
                        <div className="start-button-wrap" key="button">
                            <Link to="/docs/vue/introduce">
                                开始探索
                            </Link>
                        </div>
                    </div>

                    <div className="home-iframe">
                        <div style={{ width: '377Px', height: '620Px' }}>
                            <div className="demo-preview-wrapper">
                                <div className="demo-preview-header">
                                    <div className="demo-preview-statbar">
                                        <img
                                            width="350Px"
                                            role="presentation"
                                            style={{ margin: '0 2Px' }}
                                            src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
                                    </div>
                                    <div style={{ height: '40Px' }}>
                                        <div className="url-box">{iframeUrl}</div>
                                    </div>
                                </div>
                                <section className="code-box-demo code-box-demo-preview">
                                    <iframe
                                        id="demoFrame" name="demoFrame"
                                        style={{
                                            width: '377Px',
                                            height: '548Px',
                                            border: '1Px solid #F7F7F7',
                                            borderTop: 'none',
                                            boxShadow: '0 2Px 4Px #ebebeb' }}
                                        src={iframeUrl}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

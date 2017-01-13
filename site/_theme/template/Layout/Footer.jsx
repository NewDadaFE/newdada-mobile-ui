import React from 'react';
import Select from 'antd/lib/select';
// import { version as packageVersions } from 'antd-mobile/package.json';
// import { docVersions } from '../../';

const Option = Select.Option;
// docVersions[packageVersions] = packageVersions;

export default class Footer extends React.Component {

  handleVersionChange = (url) => {
    window.location.href = url;
  }

  render() {
    // const options = Object.keys(docVersions).map(version => (
    //   <Option value={docVersions[version]} key={version}>{version}</Option>
    // ));
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>源码</h2>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="https://github.com/NewDadaFE/vue-impression">vue-impression</a>
            </div>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="https://github.com/NewDadaFE/react-impression">react-impression</a>
            </div>
          </li>
          <li>
            <h2>联系我们</h2>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/NewDadaFE/vue-impression/issues">
              反馈和建议
            </a>
          </li>
          <li>
            <div>©2016 新达达前端技术 & 到家前端研发部</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
            <div>
              文档版本：none
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}

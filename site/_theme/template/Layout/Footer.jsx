import React from 'react';
import Select from 'antd/lib/select';

export default class Footer extends React.Component {
    render() {
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
                        <div>©2017 新达达前端技术 & 到家前端研发部</div>
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

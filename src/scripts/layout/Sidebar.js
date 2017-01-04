import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar, Nav, Icon,Button } from 'react-impression';
import routesConfig from './routes.js';

//侧边栏
export default class AppSidebar extends Component {

    onClickHandle = () => {

    }
    render() {
        const { decrement, counter } = this.props;

        //先写一个循环试试
      //   const extractRoutes = config => {
      //     const routes = [];
      //
      //     config.forEach(group => {
      //         group.children.forEach(item => {
      //             const { path, name } = item;
      //             routes.push(<Nav.Link><Link to={item.path}><Icon type={item.name} left />{item.name}</Link></Nav.Link>)
      //         });
      //     });
      //
      //     return routes;
      // };

      //const routes = extractRoutes(routesConfig);

        return (
          <Sidebar>
              <Sidebar.Header>UI</Sidebar.Header>
              <Sidebar.Body>
                <Nav>
                  {
                    routesConfig.map(group => {
                      return (
                        <div>
                          <Nav.Title>{group.title}</Nav.Title>
                          {
                            group.children.map(item => {
                              return (
                                <Nav.Link><Link to={item.path}><Icon type={item.icon} left />{item.name}</Link></Nav.Link>
                              );
                            })
                          }
                          </div>
                      );
                    })
                  }
                </Nav>
              </Sidebar.Body>
          </Sidebar>
        );
    }
}

// 侧边栏Sidebar
// const AppSidebar = () => {
//     return (
//         <Sidebar>
//             <Sidebar.Header />
//               <Button theme="primary" onClick="{this.onClickHandle}" left>click me</Button>
//             <Sidebar.Body>
//                 <Nav>
//                     <Nav.Link>
//                         <Link to="/index"><Icon type="television" left />Counter</Link>
//                     </Nav.Link>
//                     <Nav.Link>
//                         <Link to="/home"><Icon type="television" left />Counter</Link>
//                     </Nav.Link>
//                     <Nav.Link>
//                         <Link to="/index"><Icon type="television" left />Counter</Link>
//                     </Nav.Link>
//                 </Nav>
//             </Sidebar.Body>
//         </Sidebar>
//     );
// };


// export default AppSidebar;

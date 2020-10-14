import { Menu } from 'antd';
import Style from '../styles/SubNavbar.module.css';
import Link from 'next/link';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class SubNavbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} mode="horizontal" className={Style.menu}>
         <Menu.Item key="home" >
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="mail" >
          <Link href="/contratar">Contratar</Link>
        </Menu.Item>
        <Menu.Item key="app" >
          <Link href="/cotizacion">Cotizar</Link>
        </Menu.Item>
        <SubMenu key="SubMenu"  title="Creatividad - Submenu">
          <Menu.ItemGroup title="Informacion">
            <Menu.Item key="setting:1">Escritor</Menu.Item>
            <Menu.Item key="setting:2">Publica aqui</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Buscando Empleo"> 
          
            <Menu.Item key="setting:3">
              <Link href="/JobCalculator">Calculadora Salarios</Link>
            </Menu.Item>
          
            <Menu.Item key="setting:4">Trabajos</Menu.Item>
            <Menu.Item key="setting:5">Trabaja Aqui</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
        {/* target="_blank" rel="noopener noreferrer" */}
          <a href="">
            Contacto
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default SubNavbar;
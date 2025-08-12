import { Layout, Typography, Space, Row, Col, Divider } from 'antd';
import { 
  CloudUploadOutlined, 
  PictureOutlined, 
  ShareAltOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

function App() {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="header-content">
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            <PictureOutlined /> PicNest
          </Title>
          <Space>
            <Text style={{ color: 'white' }}>图片托管平台</Text>
          </Space>
        </div>
      </Header>
      
      <Content className="app-content">
        <div className="content-wrapper">
          <div className="hero-section">
            <Title level={1} style={{ textAlign: 'center', marginBottom: 20 }}>
              欢迎使用 <span className="brand-name">PicNest</span>
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', marginBottom: 40 }}>
              现代化的图片托管和分享平台，让您的图片管理更简单、更安全、更高效
            </Paragraph>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <CloudUploadOutlined className="feature-icon" />
              <Title level={4}>图片上传</Title>
              <Text>支持 JPG、PNG、GIF、WebP 等多种格式的图片上传和管理</Text>
            </div>
            
            <div className="feature-card">
              <PictureOutlined className="feature-icon" />
              <Title level={4}>图片管理</Title>
              <Text>智能分类、批量操作和高级搜索功能</Text>
            </div>
            
            <div className="feature-card">
              <ShareAltOutlined className="feature-icon" />
              <Title level={4}>智能分享</Title>
              <Text>短链接生成、权限控制和分享统计</Text>
            </div>
            
            <div className="feature-card">
              <SafetyOutlined className="feature-icon" />
              <Title level={4}>安全防护</Title>
              <Text>病毒扫描、文件验证和访问控制</Text>
            </div>
            
            <div className="feature-card">
              <ThunderboltOutlined className="feature-icon" />
              <Title level={4}>高性能</Title>
              <Text>CDN 加速、智能压缩和缓存优化</Text>
            </div>
            
            <div className="feature-card">
              <GlobalOutlined className="feature-icon" />
              <Title level={4}>全球访问</Title>
              <Text>多地域部署，确保全球用户快速访问</Text>
            </div>
          </div>
        </div>
      </Content>
      
      <Footer className="app-footer">
        <div className="footer-content">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={8}>
              <div className="footer-section">
                <Title level={4} style={{ color: 'white', marginBottom: 16 }}>
                  <PictureOutlined /> PicNest
                </Title>
                <Text style={{ color: '#b0b0b0' }}>
                  现代化的图片托管和分享平台，致力于为用户提供安全、高效、便捷的图片管理服务。
                </Text>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div className="footer-section">
                <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
                  功能特性
                </Title>
                <ul className="footer-links">
                  <li><Text style={{ color: '#b0b0b0' }}>图片上传与管理</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>智能分享系统</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>安全防护机制</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>性能优化</Text></li>
                </ul>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div className="footer-section">
                <Title level={5} style={{ color: 'white', marginBottom: 16 }}>
                  技术支持
                </Title>
                <ul className="footer-links">
                  <li><Text style={{ color: '#b0b0b0' }}>API 文档</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>开发者指南</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>常见问题</Text></li>
                  <li><Text style={{ color: '#b0b0b0' }}>联系我们</Text></li>
                </ul>
              </div>
            </Col>
          </Row>
          
          <Divider style={{ borderColor: '#333', margin: '24px 0' }} />
          
          <div className="footer-bottom">
            <Text style={{ color: '#b0b0b0' }}>
              © 2025 PicNest. 让图片分享更简单、更安全、更高效 🎯
            </Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App

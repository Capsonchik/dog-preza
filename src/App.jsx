import { useState } from 'react'
import './App.css'
import {
  Accordion,
  Card,
  Container,
  Content,
  Footer,
  Header,
  Nav,
  Navbar,
  Tag,
  TagGroup,
  VStack,
  Placeholder,
  Text, Carousel
} from "rsuite";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding: '5px'}}>
      <Container style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Header>
          <Navbar appearance={'inverse'}>
            <Navbar.Brand href="#">МОЙ САЙТ</Navbar.Brand>
            <Nav>
              <Nav.Item eventKey="1">Главная</Nav.Item>
              <Nav.Item eventKey="2">Обо мне</Nav.Item>
              <Nav.Item eventKey="3">Контакты</Nav.Item>
            </Nav>
          </Navbar>
        </Header>
        <Content>
          <Text weight={'semibold'} size={'xl'} style={{marginBottom: '1rem'}}>Обо мне</Text>
          <Card shaded direction="row" style={{marginBottom: '.5rem'}}>
            <img
              src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974&auto=format&fit=crop"
              alt="Shadow"
              width={200}
              style={{ objectFit: 'cover' }}
            />
            <VStack spacing={2}>
              <Card.Header as="h5">Мой пёсель Джони</Card.Header>
              <Card.Body>
                Это безумно жизнерадостная собака. Он очень любит гулять на свежем воздухе и играть с другими друзьями пёселями
              </Card.Body>
              <Card.Footer>
                <TagGroup>
                  <Tag size="sm">🐶 Пес</Tag>
                  <Tag size="sm">☀️ Солнышко</Tag>
                  <Tag size="sm">🌈 Радуга</Tag>
                </TagGroup>
              </Card.Footer>
            </VStack>
          </Card>
          <Text weight={'semibold'} size={'xl'} style={{marginBottom: '1rem'}}>Мои навыки</Text>
          <Accordion>
            <Accordion.Panel header="React" defaultExpanded>
              <Text>Отлично знаю React и умею его применять</Text>
            </Accordion.Panel>
            <Accordion.Panel header="JavaScript">
              <Placeholder.Paragraph />
            </Accordion.Panel>
            <Accordion.Panel header="RSuite">
              <Placeholder.Paragraph />
            </Accordion.Panel>
          </Accordion>
          <Text weight={'semibold'} size={'xl'} style={{marginBottom: '1rem'}}>Галерея</Text>
          <Carousel className="custom-slider">
            <img style={{objectFit: 'contain'}} src="https://avatars.mds.yandex.net/i?id=5bf4ec987bd137af9a5d112c87055be9b3ff1f8f-9107119-images-thumbs&n=13" height="250" />
            <img style={{objectFit: 'contain'}} src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
            <img style={{objectFit: 'contain'}} src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
            <img style={{objectFit: 'contain'}} src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
            <img style={{objectFit: 'contain'}} src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
          </Carousel>
        </Content>
        <Footer>
          <Text>Напиши мне в ТГ для связи: @coding_sergo</Text>
        </Footer>
      </Container>
    </div>
  )
}

export default App

import React, { Component } from 'react'
import "./App.css"
import { Container, Navbar, Row, Col,
  NavbarBrand, NavbarToggler, Nav, 
  Collapse, NavItem, NavLink, Button,
  Input, Modal, ModalBody, ModalHeader, 
  ModalFooter, Form
} from 'reactstrap';
import profil from './img/profil.png'
import gir from './img/gir.png'
import cekred from './img/cekred.png'
import cekgray from './img/cekgray.png'
import pencil from './img/pencil.png'
import trash from './img/trash.png'
import paper from './img/paper.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import plus from './img/plus.png'

export default class App extends Component {

    state = {
      modalOpen: false,
    }

  render() {
    return (
      <Container>
        <Navbar color="blue" blue expand="md shadow">
          <div className="header">
            <text className="textLogo">Logo</text>
            <div className="poto">
              <img src={profil} />
              <text className="name">Samsul Arifin</text>
              <img src={gir}/>
            </div>
          </div>
        </Navbar>
        <div className="body">
          <div>
            <div className="cardTo">
              <div className="paper">
                <img src={paper} />
              </div>
              <div className="textContent">
                <div className="upcontent">
                  <text className="content">Hallo, Sam!</text>
                </div>
                <div className="content2">
                  You have 2 tasks left for today, Already completed Task today?
                </div>
              </div>
            </div>
            <Calendar />
          </div>
          <div className="main">
            <div className="title">
              <text>Task For Today</text>
            </div>
            <div className="section">
              <Button className="create" onClick={() => this.setState({modalOpen: true})}>
                <img src={plus}/>Create New
              </Button>
              <Input className="search" placeholder="Cari" />
            </div>
            <div className="task">
              <div className="cardBody">
                <div className="secTitle">Daily Stand Up</div>
                <div className="cekred"><img src={cekred} />Complete</div>
              </div>
              <div>1.  Dont forget prepare your report and any blocker in Front end.</div>
              <div className="textTask">
                2. Telling Project Manager for new assignment.
                <div className="icon">
                  <img className="pencil" src={pencil}/><img src={trash}/>
                </div>
              </div>
            </div>
            <div className="task">
              <div className="cardBody">
                <div className="secTitle">Meeting With CLient A</div>
                <div className="cekgray"><img src={cekgray} />Set as Complete</div>
              </div>
              <div>1.  Loream Ipsum Dolor Amet.</div>
              <div className="textTask">
                2.  Loream Ipsum Dolor Amet.
                <div className="icon">
                  <img className="pencil" src={pencil}/><img src={trash}/>
                </div>
              </div>
            </div>
            <div className="task">
              <div className="cardBody">
                <div className="secTitle">Meeting With CLient B</div>
                <div className="cekgray"><img src={cekgray} />Set as Complete</div>
              </div>
              <div>1.  Loream Ipsum Dolor Amet.</div>
              <div className="textTask">
                2.  Loream Ipsum Dolor Amet.
                <div className="icon">
                  <img className="pencil" src={pencil}/><img src={trash}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen}>
            <ModalHeader>
              <h3>New task</h3>
            </ModalHeader>
            <ModalBody>
              <Form>
                <h3>Title</h3>
                <Input placeholder="Fill title"/>
                <h3>Description</h3>
                <Input placeholder="Fill description" />
                <h3>Choose Date</h3>
                <Calendar />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.setState({modalOpen: false})}>cancel</Button>
              <Button onClick={() => this.setState({modalOpen: false})}>Create Task</Button>
            </ModalFooter>
        </Modal>
      </Container>
    )
  }
}

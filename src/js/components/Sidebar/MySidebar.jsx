import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { connect } from "react-redux"
import { toggleSidebar } from "../../action/action"

const mapStateToProps=(state)=>{
    return {visible:state.sidebarVisible}
}

class MySidebar extends Component {
//   state = { visible: false }

//   handleHideClick = () => this.setState({ visible: false })
//   handleShowClick = () => this.setState({ visible: true })
//   handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.props

    return (
      <div>
        {/* <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group> */}

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={()=>this.props.toggleSidebar(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='user' />
              Aditya
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='blogger' />
              Blogs
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='star' />
              Rating
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='settings' />
              Settins
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default connect(mapStateToProps,{toggleSidebar})(MySidebar)
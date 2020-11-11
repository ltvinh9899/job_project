import React, { Component } from 'react';
import Modal from 'react-awesome-modal'
import Login from './Login'
import './Modal.css'
class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="400"
                    backgroundColor="red"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <Login class="Login"></Login>
                    </div>
                </Modal>
            </section>
        );
    }
}
                            
export default Modals;
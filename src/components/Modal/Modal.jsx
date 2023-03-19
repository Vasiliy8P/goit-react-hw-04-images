import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.onClose()
        }
    }

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        return (
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">{this.props.children}</div>
            </div>
        )
    }
    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default Modal;
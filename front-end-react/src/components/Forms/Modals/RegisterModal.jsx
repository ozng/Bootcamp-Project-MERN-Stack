import { Modal } from 'antd'
import React, { useState } from 'react'
import Register from '../Register'

const RegisterModal = ({ isRegisterModalVisible, setIsRegisterModalVisible, showRegisterModal }) => {

    const handleCancel = () => {
        setIsRegisterModalVisible(false);
    };
    return (
        <Modal footer={null} title="Register" visible={isRegisterModalVisible} onCancel={handleCancel} bodyStyle={{ overflowY: 'scroll', height: 500 }}>
            <Register />
        </Modal>
    )
}

export default RegisterModal
import { Modal } from 'antd'
import React, { useState } from 'react'
import SignIn from '../SignIn';

const SignInModal = ({ isSignInModalVisible, setIsSignInModalVisible, showSignInModal }) => {

    const handleCancel = () => {
        setIsSignInModalVisible(false);
    };
    return (
        <Modal footer={null} title='Sign In' visible={isSignInModalVisible} onCancel={handleCancel} >
            <SignIn />
        </Modal>
    )
}

export default SignInModal
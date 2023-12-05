import { useState } from "react";
import Modal from 'react-modal'
import { FaAngleRight } from "react-icons/fa";

import { 
    Container, 
    WelcomeHeader, 
    HeaderSpanEl, 
    LoginForm, 
    FormTitle, 
    CustomInputContainer,
    CustomLabel,
    CustomInput,
    CustomSelect,
    CustomOption,
    SubmitBtn,
    SkipBtn,
    PopupContainer,
    FamiliarContainer,
    LoginBtn,
} from "./StyledComponets";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the last value (0.5) for transparency
    },
};

Modal.setAppElement('#root')
    

const Welcome = () =>{
    const [modalIsOpen, setIsOpen] = useState(false);
    // const [name, setName] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const afterOpenModal = () => {
        // Perform any actions needed after the modal is opened
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return(
    <Container>
        <WelcomeHeader>Welcome, <HeaderSpanEl>Viewer</HeaderSpanEl></WelcomeHeader>

        <LoginForm>
            <FormTitle>Let me know who wants to View</FormTitle>
            <CustomInputContainer className="form-group">
                <CustomLabel htmlFor="email">Email  </CustomLabel>
                <CustomInput type="email" name="email" id="email" placeholder='Enter Your Mail Id...' />
            </CustomInputContainer>

            <CustomInputContainer>
                <CustomLabel htmlFor="name">Name  </CustomLabel>
                <CustomInput type='text' name='name' id='name' placeholder='Enter Your Name...' />
            </CustomInputContainer>

            <CustomInputContainer>
                <CustomLabel htmlFor="access-key">Create Access Key  </CustomLabel>
                <CustomInput type='password' name='Access Key' id='access-key' placeholder="Access Key must be 8 characters." />
            </CustomInputContainer>

            <CustomInputContainer>
                <CustomLabel htmlFor="access-key">Re-enter Access Key  </CustomLabel>
                <CustomInput type='password' name='Access Key' id='access-key' placeholder="Re Enter Access Key" />
            </CustomInputContainer>

            <CustomInputContainer>
                <CustomLabel htmlFor="purpose">Purpose  </CustomLabel>
                <CustomSelect name='purpose' id='purpose'>
                    <CustomOption>Exploring</CustomOption>
                    <CustomOption selected>Hiring</CustomOption>
                    <CustomOption>Refering</CustomOption>
                    <CustomOption>Other</CustomOption>
                </CustomSelect>
            </CustomInputContainer>

            <SubmitBtn type='submit' >Submit</SubmitBtn>
            <FamiliarContainer>If you are familiar? Click <LoginBtn type='button'>Here</LoginBtn> </FamiliarContainer>
            
            <PopupContainer>
            <SkipBtn type='button' onClick={openModal}>Skip <FaAngleRight /></SkipBtn>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Don't act smart. Provide atleast Name and MailId.</h2>
                    <button onClick={closeModal}>Submit Details</button>
                </Modal>
            </PopupContainer>
        </LoginForm>
    </Container>
    )
}

export default Welcome
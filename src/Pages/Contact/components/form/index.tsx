import React, { useEffect, useRef } from 'react'
import { ProjectsSecondaryWrapper } from '../../../../Components/common/ProjectsSecondaryWrapper.styled'
import { Column } from '../../../../Components/common/Column.styled'
import { H5 } from '../../../../Components/common/H5.styled'
import { Input } from '../../../../Components/common/Input'
import { TextArea } from '../../../../Components/common/TextArea'
import { SendMessage } from '../../../../services/SendMessage'
import { ProjectsForm } from '../../styled/ProjectsForm.styled'
import { FormButton } from '../../styled/FormButtonstyled'

export const Form = () => {

    const ref = useRef<any>()
    const { MessageInput, setMessageInput, SendMessageHandler } = SendMessage(ref)


    const resizeTextArea = () => {
        if (ref.current.value == "") {
            ref.current.style.height = "150px";
        } else {
            ref.current.style.height = "auto";
            ref.current.style.height = ref.current.scrollHeight + "px";
        }
    }

    useEffect(resizeTextArea, [MessageInput]);

    return (
        <ProjectsSecondaryWrapper>

            <ProjectsForm ref={ref} onSubmit={SendMessageHandler}>

                <Column width='100%' padding='0' align='flex-start'>
                    <H5>Name</H5>
                    <Input name='name' placeholder='Enter Your Name' />
                </Column>

                <Column width='100%' padding='0' align='flex-start'>
                    <H5>Email</H5>
                    <Input name='email' placeholder='Enter Your Email' />
                </Column>

                <Column width='100%' padding='0' align='flex-start'>
                    <H5>Message</H5>
                    <TextArea name='message' onChange={(e) => setMessageInput(e.target.value)} ref={ref} placeholder='Enter Your Message' />
                </Column>

                <div className='btn-gradient-1' >
                    <FormButton type="submit">SUBMIT</FormButton>
                </div>

            </ProjectsForm >
        </ProjectsSecondaryWrapper>
    )
}

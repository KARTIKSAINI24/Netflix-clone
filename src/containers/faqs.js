import React from 'react'
import { Accordion } from '../components'
import OptForm from '../components/opt-form'
import faqsData from '../fixtures/faqs'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently asked questions</Accordion.Title>
           
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it Now </OptForm.Button>
                <OptForm.Text>Ready to watch? ENter your email to start your subscription</OptForm.Text>
            </OptForm>

        </Accordion>
    )
}

import * as React from 'react'
import { Dialog } from "radix-ui";
import "./components.css"


const SubscribeDialog = () => {
    return (
        <Dialog.Root defaultOpen="true" modal="true">
            <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="dialog-content">
                <Dialog.Title className="dialog-title">stay in touch</Dialog.Title>
                <Dialog.Description className="dialog-description">
                Subscribe to receive future Peripheral Study newsletters.
                </Dialog.Description>
                <fieldset className="Fieldset">
                <label className="Label" htmlFor="name">
                    Name
                </label>
                <input className="Input" id="name" defaultValue="Pedro Duarte" />
                </fieldset>
                <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                    Username
                </label>
                <input className="Input" id="username" defaultValue="@peduarte" />
                </fieldset>
                <div
                style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                >
                <Dialog.Close asChild>
                    <button className="Button green">Save changes</button>
                </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
      )
}

export default SubscribeDialog;
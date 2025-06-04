import * as React from 'react'
import { Form } from "radix-ui";

import "./components.css"


const SubscribeForm = () => {
    return (
        <div className = "subscribe-container">
        <h2 className="subscribe-subtitle">stay in touch</h2>
        <p>Subscribe to receive future Peripheral Study newsletters.</p>
        <Form.Root className="subscribe-form-root" 
          action="https://gmail.us13.list-manage.com/subscribe/post?u=abfd043ab1f43a59c3d6e2b53&amp;id=763f4bc72a&amp;f_id=00c04ce1f0" 
          method="post"
          target="_self">
          <Form.Field name="EMAIL">
            <div className="subscribe-form-email">
              <Form.Control asChild>
                <input className="subscribe-form-input" id="mce-EMAIL" type="email" placeholder="youremail@example.com" required />
              </Form.Control>
              <Form.Message className="subscribe-form-message" match="typeMismatch">
                  <i>Please provide a valid email.</i>
              </Form.Message>
            </div>
          </Form.Field>
          <div aria-hidden="true" className="subscribe-hidden"><input type="text" name="b_abfd043ab1f43a59c3d6e2b53_763f4bc72a" tabindex="-1" value=""/></div>
          <Form.Submit asChild>
            <input type="submit" name="subscribe" value="Subscribe" className="subscribe-submit-button" />
          </Form.Submit>
        </Form.Root>
      </div>

      )
}

export default SubscribeForm;
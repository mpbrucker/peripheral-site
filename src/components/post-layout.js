import * as React from 'react'
import PageHeader from './page-header';
import "./style.css"


const PostLayout = ({ pageTitle, pageSubtitle, children }) => {
  return (
    <div className="global-wrapper">
      <PageHeader></PageHeader>
      <main>
        <div className="content-wrapper">
            <div className="post-content">
                <h1>{pageTitle}</h1>
                <h3>{pageSubtitle}</h3>
                {children}
            </div>
        </div>
      </main>
    </div>
  )
}

export default PostLayout;

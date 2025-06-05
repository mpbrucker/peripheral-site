import * as React from 'react'
import PageHeader from './page-header';
import "./style.css"


const PostLayout = ({ pageTitle, pageSubtitle, date, children }) => {
  return (
    <div className="global-wrapper">
      <PageHeader></PageHeader>
      <main>
        <div className="content-wrapper">
            <div className="post-content">
                <h1>{pageTitle}</h1>
                <div className="post-sub-content">
                  <h3 className="post-subtitle">{pageSubtitle}</h3>
                  <span className="post-date">{date}</span>
                </div>
                <div className="content-divider full-width"></div>
                {children}
            </div>
        </div>
      </main>
    </div>
  )
}

export default PostLayout;

import React from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'

import '../css/styles.css'
import NProgress from 'nprogress'

class Layout extends React.Component {
	componentDidMount(){
		NProgress.start();
	}

	render() {
		return (
      <div className="layout" onScroll={this.handleScroll}>
        <Head/>
        <Header/>

        <main>
          {this.props.children}
        </main>

        <Footer/>
      </div>
		)
	}
}

export default Layout

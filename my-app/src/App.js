import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
		<div>
        	<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<Product />
					</div>
					<div className="col-lg-4">
						<Product />
					</div>
					<div className="col-lg-4">
						<Product />
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default App;
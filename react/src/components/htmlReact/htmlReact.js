import React from 'react';
import ReactHTMLConverter from 'react-html-converter/node';
import '../dashboard/style.css'
import Sidebar from '../sidebar/sidebar'

 

 
class HTMLREACT extends React.Component {
    render() {
        const converter = new ReactHTMLConverter();
        const html = '<div class="my-div"><Test text="Hello World" /></div>';
        return (
            <main>
            <div className="s-layout">
                <Sidebar />
            
                <main className="s-layout__content">
                    <div className="dash_contain">
                    <p>DASHBOARD</p>
                    <br /><br />
                        <h1>{converter.convert(html)}</h1>
                    <br /><br />
                    </div>
                </main>
                </div>
		</main>
        );
    }
}

export default HTMLREACT
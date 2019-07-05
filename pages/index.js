import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class indexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({appName: 'Super App'})
                }, 1000);
            });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.props.appName}.js!</h1>
                <p>GO TO <Link href="auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push("/auth")}>GO to Auth</button>
            </div>
        );
    };
}

export default indexPage;
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({val: this.state.val +1 })
    }
    componentWillMount() {
        this.setState({m: 2})
    }
    render() {
        console.log('rendering!')
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
    componentDidMount() {
        this.inc = setInterval(this.update,500)
    }
    componentWillUnmount() {
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper


// import React from 'react';   video 9
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = { val: 0 };
//         this.update = this.update.bind(this);
//     }
//     update() {
//         this.setState({val: this.state.val +1 })
//     }
//     componentWillMount() {
//         console.log('mounting!')
//     }
//     render() {
//         console.log('rendering!')
//         return <button onClick={this.update}>{this.state.val}</button>
//     }
//     componentDidMount() {
//         console.log('mounted')
//     }
//     componentWillUnmount() {
//         console.log('bye!')
//     }
// }
//
// class Wrapper extends React.Component {
//     constructor() {
//         super();
//     }
//     mount() {
//         ReactDOM.render(<App />, document.getElementById('a'))
//     }
//     unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>Unmount</button>
//                 <div id="a"></div>
//             </div>
//         )
//     }
// }
//
//
//
// export default Wrapper


// import React from 'react';  video 8
//
// class App extends React.Component {
//     render() {
//         return <Button>I <Heart/> React</Button>
//     }
// }
//
// class Button extends React.Component {
//     render() {
//         return <button>{this.props.children}</button>
//     }
// }
//
// const Heart = () => <span className="glyphicon glyphicon-heart"></span>
//
// export default App


// import React from 'react';  video 7
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             red: 0,
//             green: 0,
//             blue: 0
//         }
//         this.update = this.update.bind(this)
//     }
//     update(e){
//         this.setState({
//             red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//             green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//             blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <Slider ref="red" update={this.update}/>
//                 {this.state.red}
//                 <br />
//                 <Slider ref="green" update={this.update}/>
//                 {this.state.green}
//                 <br />
//                 <Slider ref="blue" update={this.update}/>
//                 {this.state.blue}
//                 <br />
//             </div>
//         );
//     }
// }
//
// class Slider extends React.Component {
//     render(){
//         return (
//             <div>
//                 <input ref="inp" type="range"
//                 min="0"
//                 max="255"
//                 onChange={this.props.update} />
//             </div>
//         );
//     }
// }
//
// export default App

// import React from 'react';
// class App extends React.Component {  video 6
//     constructor(){
//         super();
//         this.state = { txt: '',}
//         this.update = this.update.bind(this)
//     }
//     update(e){
//         this.setState({txt: e.target.value})
//     }
//     render(){
//         return (
//             <div>
//                 <Widget txt={this.state.txt} update={this.update}/>
//                 <Widget txt={this.state.txt} update={this.update}/>
//                 <Widget txt={this.state.txt} update={this.update}/>
//                 <Widget txt={this.state.txt} update={this.update}/>
//             </div>
//         );
//     }
// }
//
// const Widget = (props) => {
//     return (
//         <div>
//             <input type="text" onChange={props.update} />
//             <h1>{props.txt}</h1>
//         </div>
//     );
// }
//
// export default App

// import React from 'react';
// class App extends React.Component {   video 5
//     constructor(){
//         super();
//         this.state = {
//             txt: 'this is the state txt',
//             cat: 0
//         }
//     }
//     update(e){
//         this.setState({txt: e.target.value})
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" onChange={this.update.bind(this)} />
//                 <h1>{this.state.txt}</h1>
//             </div>
//         );
//     }
// }
//
// export default App

// import React from 'react';
// import ReactDOM from 'react-dom';  video 4
// class App extends React.Component {
//     render(){
//         let txt = this.props.txt
//         return <h1>{txt}</h1>
//     }
// }
//
// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//     txt: 'this is the default txt'
// }
//
// ReactDOM.render(
//     <App cat={5} />,
//     document.getElementById('app')
// );

// class App extends React.Component {    video 3
//     render() {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 <b>Bold</b>
//             </div>
//         );
//     }
// }

// const App = () => <h1>Hello Eggheads</h1>    video 2

// export default App

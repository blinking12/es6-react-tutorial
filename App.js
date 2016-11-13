import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = { txt: '',}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
            </div>
        );
    }
}

const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update} />
            <h1>{props.txt}</h1>
        </div>
    );
}

export default App

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

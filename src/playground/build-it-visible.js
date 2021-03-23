class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibilty   = this.handleToggleVisibilty.bind(this);
        this.state = {                
            visibility: false
        };
    }
    handleToggleVisibilty(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibilty}> {this.state.visibility ? 'Hide Details' : 'Show Details'} </button>
                { this.state.visibility && (
                    <div>
                        <p>This is a very important detail!</p>
                    </div>
                    )
                }
           </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const changeVisibility = () => {
//     visibility = !visibility;
//     render();
// }


// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             { visibility && (
//                 <div>
//                     <p>This is a very important detail!</p>
//                 </div>
//              )}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();
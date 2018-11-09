

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount,10);

		if(!isNaN(count)) {
			this.setState(() => ({ count: count }));
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});	
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// Below is a JSX Version of this example


// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };

/* This chunk is legacy from the first time through this


// function getLocation(location) {
// 	if(location) {
// 		return <p>Location: {location}</p>;
// 	} 
// }

// const user = {
// 	name: 'Adam Pluth',
// 	age: 33,
// 	location: 'Denver'
// }
// const templateTwo = (
// 	<div>
// 		<h1>{user.name ? user.name : 'Anonymous'}</h1>
// 		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// 		{getLocation(user.location)}
// 	</div>
// );


*/


// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
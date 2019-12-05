import React from 'react';
import MaListe from'./liste'

//const App = () => <><h1>Bootcamp JS</h1>
class App extends React.Component
{
	constructor(props)
	{super(props);
		this.state={count:0, value:''};
	}

render()
{
	const nombres=this.state.count
	? new Array(this.state.count).fill(0).map((_,i)=>i)
	:[];
	return(
		<>
		
		<button  onClick= {e => {this.setState({count: this.state.count+1})}}>
			   boutons </button>
	   <input type="text" onChange={e=>this.setState({value: e.target.value})} />
	   <div>{this.state.count}
	   </div>
	   <div>{this.state.value}
	   </div>
    <MaListe titre={this.state.value} numbers ={nombres}/>
</>
		)
}
}

//<h2>Bootcamp JS</h2>
//<MaListe titre="Toto" numbers ={[1,2,3]}/>
//<MaListe titre="Toto1" numbers ={[100,200,300]}/>
//<MaListe titre="Toto2" numbers ={[201,202,203]}/>  </>;

export default App;

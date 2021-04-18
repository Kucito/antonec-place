class Grid extends React.Component {
  renderSquares(size){
    var squares = [];
    for( var i=0;i<size;i++){
      squares.push(<Square key={i}/>)
    }
    return squares;
  }
  render() {
  
    return (
      <div max-width={2024} max-height={2024}>
        {this.renderSquares(1024)}
      </div>
      
    )
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#00FF00"
    };
  }
  render() {
    return (
      <button className="square"   onClick={() => this.setState({color: '#FF0000'})} style ={{background: this.state.color}}>
        @
      </button>
    );
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);
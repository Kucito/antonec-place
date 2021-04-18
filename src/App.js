class Grid extends React.Component {
  renderSquares(size){
    var squares = [];
    for(var i = 0; i < size; i++){
      squares.push(<Square key={i}/>)
    }
    return squares;
  }
  render() {
    var size = 8;
    var html = [];
    for(var i = 0; i < size; i++){
      html[i] = (
        <div>
          {this.renderSquares(size)}
          <br></br>
        </div>
      );
    }
    return html;
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
      <button class="square" onClick={() => this.setState({color: '#FF0000'})} style ={{background: this.state.color}}>
        
      </button>
    );
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);
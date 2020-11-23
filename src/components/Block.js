import React from 'react';

class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [{ name: 'habia', age: 20 }, { name: 'aemon', age: 19 }]
        }
    }
    render() {
        // console.log(this.props.color);
        // let color = this.props.color;
        let newStud = this.state.students.filter(item => item.age > 19);
        return (
            <>
                {newStud.map(item => (
                    <h2>{item.name}</h2>
                ))}
                {this.state.students.filter(item => item.age > 19).map(item => (
                    <>
                        <h2>{item.name}</h2>
                        <h3>{item.age}</h3>
                    </>
                ))}
                {/* <h2>This is my {this.props.name}</h2>
                <h3 style={{ color: color }}>Greeting from {this.props.color}</h3>
                <h4>Greeting from {this.props.color}</h4> */}

            </>
        )
    }
}
export default Block;
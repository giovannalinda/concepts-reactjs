import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {
  state = {
    newTech: '',
    techs: [],
  }
  // executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // executado quando o componente deixa de existir                  
  componentWillUnmount() {

  }

  handleInputChange = event => {
    this.setState({ newTech: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
       newTech: ''
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech =>
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
            />)}
          <li>
            {this.state.newTech}
          </li>
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
          autoFocus
        />
        <button type="submit">Adicionar</button>
      </form>
    )
  }  
}

export default TechList;
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Lixeira from "./img/Lixeira.png";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

body {
  background: bisque;
  width:100%;
}
`;

const Title = styled.h1`
  color: brown;
  margin: 20px;
  font-size: 45px;
`;

const caixa = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class App extends Component {
  state = {
    taref: "",
    list: []
  };

  adiciona = (e) => {
    const { taref, list } = this.state;
    if (taref !== "") {
      this.setState({
        list: list.concat({
          list: list,
          id: Date.now()
        }),
        taref: ""
      });
    }
    e.preventDefault();
  };

  remover = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.filter((item) => {
        return item.id !== id;
      })
    });
  };

  handleChange = (e) => {
    this.setState({
      taref: e.target.value
    });
  };

  render() {
    const { list, taref } = this.state;
    const { adiciona, remover, handleChange } = this;
    return (
      <caixa>
        <Title> Lista de tarefas! </Title>
        <form>
          <GlobalStyle />
          <input onChange={handleChange} type="text" value={taref} />
          <button onClick={adiciona}>Adicionar</button>
          <ul>
            {" "}
            {list.map((item) => (
              <li>
                {" "}
                {item.taref} {item.id}
                <img
                  onClick={() => {
                    remover(item.id);
                  }}
                  src={Lixeira}
                  alt="Lixeira"
                />
              </li>
            ))}
          </ul>
        </form>
      </caixa>
    );
  }
}
export default App;

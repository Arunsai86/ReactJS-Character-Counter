import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  AppContainer,
  ResultContainer,
  CharInputContainer,
  InputContainer,
  Heading,
  InputBar,
  AddBtnElement,
  ImageContainer,
  ImageElement,
} from './styledComponents'

import EachCharacterItem from '../EachCharacterItem'

class Home extends Component {
  state = {
    inputText: '',
    characterList: [],
  }

  getInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  setCharacterList = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newData = {
      id: uuidv4(),
      word: inputText,
      length: inputText.length,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newData],
      inputText: '',
    }))
  }

  renderNoUserInputs = () => (
    <ImageContainer>
      <ImageElement
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </ImageContainer>
  )

  render() {
    const {inputText, characterList} = this.state
    const {length} = characterList
    // console.log(characterList)
    return (
      <AppContainer>
        <ResultContainer>
          <Heading color="#334155">Count the characters like a Boss...</Heading>
          {length === 0 ? (
            this.renderNoUserInputs()
          ) : (
            <ul>
              {characterList.map(eachChar => (
                <EachCharacterItem
                  key={eachChar.id}
                  characterDetails={eachChar}
                />
              ))}
            </ul>
          )}
        </ResultContainer>
        <CharInputContainer onSubmit={this.setCharacterList}>
          <Heading color="#ffbf1f">Character Counter</Heading>
          <InputContainer>
            <InputBar
              onChange={this.getInputText}
              placeholder="Enter the Characters here"
              value={inputText}
            />
            <AddBtnElement button="submit">Add</AddBtnElement>
          </InputContainer>
        </CharInputContainer>
      </AppContainer>
    )
  }
}
export default Home

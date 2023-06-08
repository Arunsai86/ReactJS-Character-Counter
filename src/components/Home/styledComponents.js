import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const ResultContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  padding: 20px;
`
export const CharInputContainer = styled.form`
  background-color: #0f172a;
  width: 50%;
  padding: 20px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
`

export const InputContainer = styled.div`
  display: flex;
`
export const InputBar = styled.input`
  width: 70%;
  height: 28px;
  outline: none;
  border: none;
  color: #475569;
  padding-left: 10px;
  border-radius: 5px;
  margin-right: 5px;
`
export const AddBtnElement = styled.button`
  height: 28px;
  width: 70px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffc533;
`

export const ItemText = styled.p`
  color: #1e293b;
  font-size: 16px;
  font-weight: 400;
`
export const ListedContainer = styled.li`
  list-style-type: none;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageElement = styled.img`
  margin-top: 20px;
  width: 90%;
`

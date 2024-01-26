import styled from 'styled-components'

export const SingerCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  height: 35vh;
  padding: 30px;
  padding-right: 60px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  margin: 0px;
  color: #fff;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #fff;
`
export const ListMainContainer = styled.div`
  background-color: #152850;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
`
export const Flex = styled.div`
  display: flex;
  margin-bottom: ${props => (props.list ? '20px' : null)};
  justify-content: space-between;
  width: ${props => (props.durationAndDelete ? '15%' : null)};
  align-items: center;
`
export const SearchCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 5px;
`
export const Input = styled.input`
  border: 0px;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: transparent;
`
export const ListCard = styled.ul`
  overflow: auto;
  padding: 0px;
  list-style-type: none;
`
export const ImgAndName = styled.div`
  display: flex;
  justify-content: ${props => (props.failure ? 'center' : null)};
  height: ${props => (props.failure ? '65vh' : null)};
  align-items: center;
`
export const Img = styled.img`
  width: 30%;
  border-radius: 15px;
  margin-right: 10px;
`
export const Name = styled.p`
  font-weight: bold;
  color: ${props => (props.genre ? '#3b82f6' : '#fff')};
  font-family: 'Roboto';
`
export const Btn = styled.button`
  color: #fff;
  font-size: 15px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  background-color transparent;
`

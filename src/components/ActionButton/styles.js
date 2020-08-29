import styled from '@emotion/styled'

export const Button = styled.button`
  background: linear-gradient(135deg, rgb(176, 106, 179) 30%, #3C0576 100%);
  box-shadow: 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.0);
  
  background-color: rgba(255, 255, 255, .3);
  min-width: 150px;
  height: 50px;
  color: hidden;
  
  border: 0;
  padding: 0 32.5px;
  margin-top: 2em;
  
  border-radius: 25px;
  transition: all .25s ease;
  
  & > span {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

    color: #FFF;
    font-size: 1.2em;
    font-weight: 500;
  }

  &:hover {
    box-shadow: 0 40px 100px 8px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.0);

    & > span {
      font-size: 1.25em;
    }
  }

  &:focus {
    outline: none;
  }
`

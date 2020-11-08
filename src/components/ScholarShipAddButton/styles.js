import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 43px 16px;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    text-align: center;
  }

  &:active {
    background-color: ${shade('0.1', '#FBFBFB')};
  }
`
export const PlusIcon = styled(FontAwesomeIcon)`
  height: 62px;
  width: 62px !important;
  margin-bottom: 15px;
  path {
    color: ${(props) => props.theme.mainBlue};
  }
`

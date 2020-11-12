import { FaWhatsapp, FaComments, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  background-color: ${(props) => props.theme.mainBlue};
`
export const FooterMessage = styled.p`
  padding: 35px;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.grayBackground};
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;

  @media (${(props) => props.theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.mainBlue};
  font-weight: 600;
`
export const FooterItem = styled.div`
  background-color: ${(props) => props.theme.secondaryBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  padding: 20px;
  gap: 3px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme.grayBackground};
    font-weight: 700;
  }

  h3,
  h4 {
    color: ${(props) => props.theme.grayBackground};
  }

  h4 {
    font-weight: 500;
  }

  .whatsapp {
    flex-direction: row !important;
  }

  @media (${(props) => props.theme.desktop}) {
    margin: 0;
    gap: 0;
    flex-direction: row;
    gap: 20px;
  }
`
const iconStyle = css`
  height: 48px;
  width: 48px !important;
  path {
    color: ${(props) => props.theme.grayBackground};
  }
`

export const Whatsapp = styled(FaWhatsapp)`
  ${iconStyle}
`
export const Comments = styled(FaComments)`
  ${iconStyle}
`

export const Envelope = styled(FaEnvelope)`
  ${iconStyle}
`

export const InfoCircle = styled(FaInfoCircle)`
  ${iconStyle}
`

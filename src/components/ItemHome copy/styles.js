import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 16px;
  align-items: center;
  background-color: #ffffff;

  .card__star {
    display: block;
    width: 1rem;
    height: 1rem;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEpElEQVRIS61VWWxUVRj+/jPbnaEspdjSKiBbQYQy0Aq+GBRoCCZEttJhM/hgfDFRHwwPNc604sIjRhMDSgxCoRUJ8oKCpPEBhNLOTAsiWKwttRVtKzLbneXc+5tzp5ZCse2D9+Xcc85//m/5z0IY49fg36XliogOIsiCPGfZK/szY1lKYwlSMcG315+cuXPPC8yMW7X+Y97Aia1jWTsmgF/9u7SoR+iLXn8eiJ7ClU81jNfT7pnVnydHAxkTQMse37GCVRsqC2Z9ArAHt4NT8UdQr/O+Vev7XwCaqzayd/d6IF4LYbogJaH1sxyU1hweleCoAWH/xg/yn63cXVhSB9YzAAuQnfHbhXHou26rXlJ1ODCSilEBmqs2sLfqJeDuRyDDDTBALGCajPDBcSitOTJijsHJpsC6KUYsXuIcP2m1kUzmk822HKa5cOqqnShaXA9OpwHTBpiwWnJk0HUhH72hfpDN/NGU8qJd03qMWPws2cX1pe+f7lXKqPW9bY1spJ5yTnkczkcew6QFK2Fzjoe7oBAOVwyEBpj9B0CGx2KfBVAqTEArAk/Zi0y0H3pEwEhF8fe1BqR7u5Du7QQJx2UKBTaw138CQCOATkBvh6mfBhkCbBLANoA1kCmyAIbqGwAzIE3ATIKsOAA5ZYB9IpBbDrjnI1zzIqjlHd/+3CXi5WnlvTASdoApa4FapNgyg6yxgb6ySQEY99QAdkARkAbINAEh0XXRjjt/ug9YNQgFtvfkeWXhtLUpmHEGGwyykqsk6n+APYss0INtotNSSgrUAbR9oyEaGfd76btfFw0WORTY0T15sSyaXh4H62SRhJo17SCLtQ1IdgGZPnDiDpDWgWg0q8SAlVyFBw860NZOPb4r6UetIg/dw6HqHd15JUbRtHIdnHCAMxEg3Q7W+4H4X/eSDRQaGQIMAklSdyCCBzTc7KSeymDMSj4MQA2E/Tu6XZN/Lpq3qRXybhIkBxiaAiSVfcjap+5SNcekLEfXd05caHD0+MLRweQPBVCDR2Zq7DtH4KQOzlDWW4MAyYN2WMkVc0kw40Cd38Pbf4qKB0/1Q09h7RwXb20uhuy8YhXV8ldmNw+pwqeyqizQDEFojKOvubHtWnxYvmED9Utdc6Y/s7Zt+RsnISOqeP/6PGCPSqzsUa1UWxMQduD8oRm4fbN79uamVPtQFcMAji/1rJvxdP6psjc7ICND7DEYwjpoACsFMsveAnAAjYdycatDX1NxKX5mZIASzx7vq09UzVrRDEMnq6BCnQUBRK46LIAJxRlwgsApYakRNuCXs3aEzruqK4KR+27XYQrqFrnPrdpXvDI3v8XyWAggdVsg+LELnW02i9yMuQZKt0g48yRYFyCD0dcxAQ1fZM5sCcfWjKigboGnZ93R3EK31g0jQmj90IUbzQ7YPVxd0RSz2H25LCcgE+Qvni+xpEKCNAm9fyJO7ZPtvpbY7JEBnnTzlstluFHzA65+qwEk6jYHIw99Go+X5RwDU+XCRRLz1kjU79VQGY7e58owi75a5mmTCZ4jHLbvN4dizw3ck//5aKn350RZToM0aIXdyTc3XYrNHRr8D9UGHp3CXKRkAAAAAElFTkSuQmCC');
    background-size: cover;
    margin: 0 0.15rem;
  }

  .card__star--half {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEJUlEQVRIS6WVa0xbZRjH/+/b0xulAyaCFtklyxhmLmGgXGaMc47F6GSDUChzomaRZSqTEFGim4BcMswucQUhXCYwoMAubCZ+0KDuw4QNdBvXxSyplFvBiWyWcmm785pTYFKBtsbz5STnPO//9zz/53nOIXDzaj2plnP3ZyZ/DUrB3bFpz/T0hGl3jhJ3goSYtux43RPPxWjo5t242HBel5qWss+ds24BfsxSe0oZTFEfqwGpGg11zRgyTnpmZCSbXUHcAgjZq6J2adY8+xOgqIKhfxDnGy83fJCZmvS/AXPZE1NURhxgawG8y+2adTXnsP+NBJcJugy4lhVf/9i26KS1YT0AtQA+pXaA4TcDzlY35hzN+SjbWRVOAddzk3YwkO8jUl8FrO0ANw14lzzUqyw7C71hUFVQ8IlxJQi5WhijpLOSWMKwnvEPthHQVTzPR4okcisVS/UBL8RuUgW2AJwY4MyAzz+AoYFh9PTchnFkFFPmqXvDwyN3CKWtBMxECf0699inHaQtR838tm43U8Vqhc+GLZDwdyF/PACwjAKWAcDaD/B/AhIKcJMOgOWyNplMGB0Zg9E4hls3u0Bas9S2cE3cOPnjih8RMRCxCBATgCNzomIOkHCAmLkFWAzVnioB6chPfIrnWfeWp1dB7qsA6Ly4GACHeQiZh5pcVrAA+KqiFr29fbH2JrfnaQItFjYQHOqJR9Z5AZTNC2Lubq9qwSKtq9FHZVkNeru6k04VH294OEUCxGplA0FhSvhuECALNjGAGgFOD3BtgC9zCqiqqMWNm7f2ab88oRMCHcZUgNhsZCA4UgmfgHHgQR9srB9EOgMiZYAUoAErAyrLqtHZ8UugtkI7tJDFkj24+mG0qr/TYIh55z4n858FlU2ByixgQk9kAFUtDygtrrD13uhcW3SmaGRxicsumu6VIKapLYD19tugHmYQqQVECjDJyhXk5xTiSHbmEr0lD5r3rvOWeXlOvJSrgXXoBEQKMyCxABI4taj4i1K8l3bINaBJHRz2aOCan7cfDIB1/BKowgwiAAT/PQD4L29RXU0DWr77IbyqrrzDqUWNezd+tjn2raNPrj8GXrBEPgOqsNj9n+hUwefl4WWnqLe7DwV5n79f31R92jlgz8ba8GTNa4F+RYBsFiKPKcwM+qP9shdG9eD1O9Lou4f2Q6lUOoDuTUzg4IFUXVNzncOfbolnTXuCrr2YnhyxWpoHy19e6PzWCwY9A0+gTbx457BarZYzq6gyPOKZpIzMdAdI7O7465e+uRDpooIglnDyMDpKTsOgFzaF6RgVpySc65tcfFAASai8dWf0zpA3D7xuf5WZcQSFx/Mdkl5SwYX4TVdsNv55SqBj3FLhfzcgLi4x1EMsKw/ZGhLa3dX9e3X9GX+Xe+DyY/MfAv4GnbyCPdAizNwAAAAASUVORK5CYII=');
    background-size: cover;
  }
`

const style = css`
  font-weight: 700;
  font-size: 18px;
`

export const WrapperItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 3px solid ${(props) => props.theme.gray};

  & :last-child {
    border: none;
  }
  .main-title {
    color: ${(props) => props.theme.secondaryBlue};
    font-size: 18px;
    font-weight: 700;
  }

  .percent {
    color: ${(props) => props.theme.green};
    ${style}
  }

  .price {
    color: ${(props) => props.theme.green};
    ${style}
    padding-top:10px;
  }
`
export const Star = styled.div``

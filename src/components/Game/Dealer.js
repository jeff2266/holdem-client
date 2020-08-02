import React from 'react'
import styled from '@emotion/styled'

const Dealer = () => {

    return (
        <DealerContainer>
            <DealerImageContainer>
                <img src="images/dealer.png" alt="dealer.png" />
            </DealerImageContainer>
            <DealerPrompt>Action Player 1</DealerPrompt>
        </DealerContainer>
    )
}

const DealerContainer = styled.div`
    display: grid;
    grid-template-rows: 3fr, 2fr;
    align-items: stretch;
`

const DealerImageContainer = styled.div`
    align-self: end;
    margin: 4px;
    img {
        display: block;
        margin: auto;
        max-width : 100%;
        max-height: 100%;
    }
`

const DealerPrompt = styled.div`
    padding         : 8px;
    border          : 4px solid rgba(233, 192, 154, 0.8);
    border-radius   : 8px;
    background-color: rgba(50, 50, 50, .8);
    text-align      : center;
`

export default Dealer
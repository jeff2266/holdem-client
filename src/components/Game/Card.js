import React from 'react'
import styled from '@emotion/styled'

const Card = ({ card, isUp }) => {
    return (
        <>
            {
                isUp ?
                    (card.suit === '♠' || card.suit === '♣') ?
                        < ImageContainerDiv style={{ background: "url('images/card_front.png') no-repeat center" }} ref={(el) => { if (el) el.style.setProperty('color', '#262626', 'important') }}>
                            <p>{card.value}</p>
                            <p>{card.suit}</p>
                        </ImageContainerDiv>
                        : < ImageContainerDiv style={{ background: "url('images/card_front.png') no-repeat center" }} ref={(el) => { if (el) el.style.setProperty('color', '#990902', 'important') }}>
                            <p>{card.value}</p>
                            <p>{card.suit}</p>
                        </ImageContainerDiv>
                    : <ImageContainerDiv style={{ background: "url('images/card_back.png') no-repeat center" }} />
            }
        </>
    )

}

const ImageContainerDiv = styled.div`
    width: 83px;
    height: 119px;
    margin: 2px;
    p {
        font-size: 1.25em;
        font-weight: 600;
        margin: 0px 6px;
    }
`

export default Card
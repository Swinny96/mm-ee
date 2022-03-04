import React from 'react'
import styled from 'styled-components'
import CardList from './Cards'

const Cards = () => {
  return (
      <CardContainer>
        {
          CardList.map(({id, image, title, text, link}) => {
            return (
              <Card key={id} className="card_background">
                <CardHeading>{title}</CardHeading>
                <CardText>{text}</CardText>
                <CardIconContainer>
                    <CardIcon src={image} alt={title} />
                </CardIconContainer>
                <CardCTAGroup>
                    <CardCTA href={link} aria-label={'View' + ' ' + 'link' +  ' ' + 'for' + ' ' + [title]}>{title}</CardCTA>
                </CardCTAGroup>
            </Card>
            )
          })
        }
      </CardContainer>
  )
}

export default Cards

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem;
  }
`
const Card = styled.div`
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  max-width: 200px;

  &:hover{
    background: transparent;
  }
`
const CardIconContainer = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`
const CardIcon = styled.img`
  aspect-ratio: 4/3;
  object-fit: scale-down;
`
const CardHeading = styled.h3`
  margin: 1.2rem 0;
`
const CardText = styled.p`
  margin: 1rem 0 2rem;
`
const CardCTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`
const CardCTA = styled.a``
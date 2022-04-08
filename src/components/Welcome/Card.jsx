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
                <CardTextContainer>
                    <CardHeading>{title}</CardHeading>
                    <CardText>{text}</CardText>
                </CardTextContainer>
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`
const Card = styled.div`
  padding: 36px;
  border-radius: 16px;
  max-width: 180px;
  min-width: 180px;
  border: 1px solid transparent;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  aspect-ratio: 4/3;
`

const CardTextContainer = styled.div`
    display: grid;
    gap: 8px;
    text-align: left;
`
const CardIconContainer = styled.div`
  overflow: hidden;
`
const CardIcon = styled.img`
    max-width: 64px;
    max-height: 64px;
`
const CardHeading = styled.h3`
  color: white;
  margin-bottom: 0px;
  font-family: Rubrik;
  font-style: normal;
  font-weight: 600;
`
const CardText = styled.h5`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: Rubrik;
  font-style: normal;
  font-weight: normal;
`
const CardCTAGroup = styled.div`
  display: flex;
  justify-content: center;
`
const CardCTA = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    background: #F5D500;
    border-radius: 20px;
    text-decoration: none;
    color: #005A61;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`
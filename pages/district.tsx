import React from "react";
import {IvyPage} from "../types";


const District: IvyPage = () => {
  return (<div>{renderCards()}</div>)
}

const cards = [{name: 'a', image: 'red', id: 1}, {name: 'b', image: 'ccc', id: 2}]

interface ICard {
  name: string
  id: number
  image: string
}

const Card: React.FC<{ card: ICard }> = ({card}) => {
  return <div>{card.name}</div>;
};

const renderCards = () => {
  return cards.map(card => {
    return <Card key={card.id} card={card}/>
  })
}

District.getInitialProps = async (ctx) => {
  const req = ctx.req
  const protocol = 'http' || req?.headers['x-forwarded-proto']
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const res = await fetch(baseUrl + '/base-data.json')
  return await res.json()
}

export default District

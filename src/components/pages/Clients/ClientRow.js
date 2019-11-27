import React from 'react';

const ClientRow = (props) => {
  const { name, surname, loyaltyTypeText, genderTypeText, cardNumber } = props.client;

    const date = new Date();
    const dateUpdate = date.toLocaleDateString();



    return (
    <div className="client__row">
      <div className="client__сell">Имя: {`${name}, ${surname}`}</div>
      <div className="client__сell">Метод: {loyaltyTypeText}</div>
      <div className="client__сell">Номер карты: {cardNumber}</div>
      <div className="client__сell">Пол: {genderTypeText}</div>
      <div className="client__сell">Дата: {dateUpdate}</div>
    </div>
  )
}

export default ClientRow;
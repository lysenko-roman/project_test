import React, { useState } from 'react';
import { genderTypes, loyaltyProgramTypes } from '../../mock';
import { connect } from 'react-redux';

import './style.scss';

const Form = props => {

  const { addClient } = props;
  const [state, setState] = useState({
    name: '',
    surname: '',
    genderTypeId: '',
    loyaltyTypeId: '',
    cardNumber: '',
  });

  const changeClient = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    })
  }

  const addClientHandler = () => {
    const genderTypeText = state.genderTypeId ? genderTypes.find(gender => gender.id === Number(state.genderTypeId)).name : '';

    addClient({
      ...state,
      loyaltyTypeText: loyaltyProgramTypes[state.loyaltyTypeId].name,
      genderTypeText,
    })
  };

  const { name, surname, loyaltyTypeId, cardNumber } = state;
  const isShowCardNumber = loyaltyProgramTypes[loyaltyTypeId] && loyaltyProgramTypes[loyaltyTypeId].alias === 'plasticCard';

  return (
    <div >
      <h1>Авторизация</h1>
      <form className='AuthForm' >
        <label>Имя</label>
        <input type='text' name='name' value={name} onChange={changeClient} placeholder='Имя' />
        <label>Фамилия</label>
        <input type='text' name='surname' value={surname} onChange={changeClient} placeholder='Фамилия' />
        <label >
          Пол
          <select name="genderTypeId" onChange={changeClient} >
            <option value="">Выберете пол</option>
            {genderTypes.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
          </select>
        </label>
        <label>
          Программа лояльности
        <select name="loyaltyTypeId" defaultValue="1" onChange={changeClient}>
            {Object.values(loyaltyProgramTypes).map(({ id, name }) => <option key={id} value={id} >{name}</option>)}
          </select>
        </label>
        {isShowCardNumber && <input
          type='text'
          name='cardNumber'
          value={cardNumber}
          onChange={changeClient}
          placeholder='номер карты'
        />}
        <button type="button" onClick={addClientHandler} >Сохранить</button>
      </form>
    </div>
  )
}

const mapDispathToProps = (dispath) => {
  return {
    addClient: client => dispath({ type: 'ADD_CLIENT', client }),
  }
}

export default connect(null, mapDispathToProps)(Form);

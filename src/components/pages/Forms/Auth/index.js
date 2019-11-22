import React from 'react';
import './style.scss';


const USERS = [
    {
        id: 'w',
        value: 'Женский',
        title: 'Женский',
        cart: 'пластиковая карта',
        cartTitle: 'пластиковая карта',
    },

    {
        id: 'm',
        value: 'Мужской',
        title: 'Мужской',
        cart: 'мобильное приложение',
        cartTitle: 'мобильное приложение',

    },

]


class Auth extends React.Component {

     state = {
             inputNameText: '',
             inputFamilyText: '',
             selectGenderText: '',
             selectProgramText: '',
             showData: {
                 name: '',
                 family: '',
                 gender: '',
                 program: '',
             }

     }

        handleInputNameChange = ({target: {value}}) => {

            this.setState({
                inputNameText: value,
            })
     }

        handleInputFamilyChange = ({target: {value}}) => {

            this.setState({
                inputFamilyText: value,
            })
     }

        handleSelectGenderChange = ({target: {value}}) => {

            this.setState({
                selectGenderText: value,
            })
        }

        handleSelectProgramChange = ({target: {value}}) => {

            this.setState({
                selectProgramText: value,
            })
        }

        handleShow = (e) => {
         e.preventDefault();
         const {inputNameText, inputFamilyText, selectGenderText, selectProgramText} = this.state;
         this.setState({
             inputNameText: '',
             inputFamilyText: '',
             selectGenderText: '',
             selectProgramText: '',
             showData: {
                 name: inputNameText,
                 family: inputFamilyText,
                 gender: selectGenderText,
                 program: selectProgramText,
             }
         })
     }

render () {

         const {inputNameText, inputFamilyText, selectGenderText, selectProgramText, showData} = this.state;
         const {name, family, gender, program} = showData;
         return (
             <div >
             <h1>Авторизация</h1>
             <form  className='AuthForm' >
             <label>Имя</label>
             <input type='text' name='name' value={inputNameText}  onChange={this.handleInputNameChange} placeholder='Имя' />
             <label>Фамилия</label>
             <input type='text' name='family' value={inputFamilyText} onChange={this.handleInputFamilyChange} placeholder='Фамилия' />
             <label >
             Пол
             <select  value={selectGenderText} onChange={this.handleSelectGenderChange} >
             {USERS.map(({id, value, title})=> (
                 <option key={id} value={value} >{title}</option>
                 ))  }
             </select>
             </label>
             <label>
             Программа лояльности
         <select  value={selectProgramText} onChange={this.handleSelectProgramChange}>
        {USERS.map(({id, cart, cartTitle})=> (
                <option key={id} cart={cart} >{cartTitle}</option>
))  }</select>
         </label>
         <button onClick={this.handleShow}>Сохранить</button>
             </form>
    <h2> Your full name is</h2>

    <h2>{name}</h2>
    <h2>{family}</h2>
    <h2>{gender}</h2>
    <h2>{program} </h2>

    </div>


     )
     }
 }



export default Auth;
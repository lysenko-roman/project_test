import React from 'react';
import './style.scss';

 class Auth extends React.Component {

     constructor (props) {
         super(props);
         this.state = {
             username: '',
             family: '',
         };
     }



     mySubmitHandler = (event) => {
         event.preventDefault();
         let family = this.state.family;

     }

     myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
     }

handleClick = (event) => {
    let fullName = this.state.username + '' + this.state.family;
    this.setState({Name: fullName});
}

     render  () {
         return (
             <div >
             <h1>Авторизация</h1>
             <form  className='AuthForm' onSubmit={this.mySubmitHandler}>
             <label>Имя</label>
             <input type='text' name='username'  onChange={this.myChangeHandler} placeholder='Имя' />
             <label>Фамилия</label>
             <input type='text' name='family' onChange={this.myChangeHandler} placeholder='Фамилия' />
             <label>
             Пол
             <select>

             <option value=''>женский</option>
             <option value=''>мужской</option>
             </select>
             </label>
             <label>
             Программа лояльности
         <select>
         <option value=''>пластиковая карта</option>
         <option value=''>мобильное приложение</option>
         </select>
         </label>
         <button onClick={this.handleClick}>Сохранить</button>
             </form>
    <h2> Your full name is {this.state.Name} </h2>
    </div>


     )
     }
 }



export default Auth;
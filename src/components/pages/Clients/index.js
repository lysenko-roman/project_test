import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClientRow from './ClientRow';
import './style.scss';

const Clients = (props) => {
  const { clients } = props;

  return (
    <div>
      <h1>Список клиентов</h1>
      <Link to="/registration" >Регистрация нового клиента</Link>
  {clients.map(client => <ClientRow key={client.id} client={client} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
  }
}

export default connect(mapStateToProps)(Clients);
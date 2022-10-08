import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'new website',
          type: 'deposit',
          category: 'web',
          amount: 600,
          createdAt: new Date('2022-10-01')
        },
        {
          id: 2,
          title: 'rent',
          type: 'withdraw',
          category: 'house',
          amount: -400,
          createdAt: new Date('2022-10-02')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')      
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) 

      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

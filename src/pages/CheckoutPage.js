import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g. send data to backend or show a success message
    alert('Order placed successfully!');
    // Redirect to homepage after successful form submission
    history.push('/');
  };

  return (
    <div className="checkout-page-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="johndoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" placeholder="123 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="Anytown" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" placeholder="ST" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="zip">Zip</label>
          <input type="text" id="zip" name="zip" placeholder="12345" value={zip} onChange={(e) => setZip(e.target.value)} />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
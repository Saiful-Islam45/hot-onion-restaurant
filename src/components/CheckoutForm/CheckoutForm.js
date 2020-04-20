import React, { useEffect } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
const CheckoutForm = (props) => {
    const [paymentFinished, setPaymentFinished] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        props.isPaid(paymentFinished);
    }, [paymentFinished])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        console.log(error, paymentMethod);
        if (error) {
            setPaymentError(error);
            setPaymentFinished(null);

        } else {
            setPaymentFinished(paymentMethod);
            setPaymentError(null);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-danger my-3" type="submit" disabled={!stripe}> Pay </button>
                {paymentError && <p style={{ color: "red" }}>Failed, {paymentError.message}</p>}
                {paymentFinished && <p style={{ color: "green" }}>Payment Successful</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
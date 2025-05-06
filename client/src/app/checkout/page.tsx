"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckoutSuspense from "./checkoutSkeleton";

function CheckoutPage() {
    const options = {
        clientId:
            "ARSfUYiZozMmD0kh5oqtJRWOrFJ00vq6CGw4SUg_vocCA2HldSxHEPJhNkEvkKAhjbY_aPDVZ_EbJwp-",
    };

    return (
        <PayPalScriptProvider options={options}>
            <CheckoutSuspense />
        </PayPalScriptProvider>
    );
}

export default CheckoutPage;
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSettings from "./UserSettings";
import LinkedAccount from "./LinkedAccount";
import BrandValues from "./BrandValues";
import CompetitorTrackingSetting from "./CompetitorTrackingSetting";
import BillingsPayments from "./BillingsPayments";

const Settings = () => {
    return (

        <div className="Settings">


            <Routes>
                <Route path="/" element={<UserSettings />} />
                <Route path="/linked-account" element={<LinkedAccount />} />
                <Route path="/brand-values" element={<BrandValues />} />
                <Route path="/competitor-tracking-setting" element={<CompetitorTrackingSetting />} />
                <Route path="/billings-payments" element={<BillingsPayments />} />

            </Routes>


        </div>

    )
}

export default Settings
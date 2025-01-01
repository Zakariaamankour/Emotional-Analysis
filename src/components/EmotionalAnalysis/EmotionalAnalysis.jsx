import React from "react"
 import Home from "./Home"
import Step2a from "./Step2a"
import { Route, Routes } from "react-router-dom"

const EmotionalAnalysis = () => {
    return (
        <div className="">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/step2a" element={<Step2a />} />
                <Route path="/step2b" element={<Step2a />} />
                <Route path="/step2c" element={<Step2a />} />
                <Route path="/step2d" element={<Step2a />} />
            </Routes>

        </div>

    )
}

export default EmotionalAnalysis
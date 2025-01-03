import React from "react"
 import Home from "./Home"
import Step2a from "./Step2a"
import { Route, Routes } from "react-router-dom"
import Step2b from "./Step2b"
import Step2c from "./Step2c"
import Step2d from "./Step2d"

const EmotionalAnalysis = () => {
    return (
        <div className="">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/step2a" element={<Step2a />} />
                <Route path="/step2b" element={<Step2b />} />
                <Route path="/step2c" element={<Step2c />} />
                <Route path="/step2d" element={<Step2d />} />
            </Routes>

        </div>

    )
}

export default EmotionalAnalysis
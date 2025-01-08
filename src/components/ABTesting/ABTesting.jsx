import React, { useState } from "react";
import "./ABTesting.css";

const ABTesting = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [currentConfig, setCurrentConfig] = useState({
        picture: "Current Picture",
        username: "Username",
        name: "Name",
        bio: "Bio",
        category: "Category",
        music: "Music",
        pronouns: "Pronouns",
        button: "Button",
    });

    const [newConfig, setNewConfig] = useState({
        picture: "New Picture",
        username: "",
        name: "",
        bio: "",
        category: "",
        music: "",
        pronouns: "",
        button: "",
    });

    const handleInputChange = (key, value) => {
        setNewConfig((prev) => ({ ...prev, [key]: value }));
    };

    const handleNextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="ab-testing-steps-container">
            <div className="ab-testing-steps-container-header1">

                <div className="ab-testing-steps-container-header">
                    <p className="ab-testing-steps-container-header-title">A/B <span>Testing</span></p>
                    <p className="ab-testing-steps-container-header-text">The world’s first.</p>
                </div>
            </div>

            {
                currentStep == 1 && (

                    <div className="ab-testing-steps-container-steps step1">
                        <div className="ab-testing-steps-container-steps-top">
                            <div className="ab-testing-steps-container-steps-top-left">
                                <p className="ab-testing-steps-current-picture-title">Current Picture</p>
                                <div className="ab-testing-steps-current-picture"></div>
                            </div>

                            <div className="ab-testing-steps-container-steps-top-right">
                                <div className="ab-testing-steps-container-steps-top-right-top">
                                    <div className="ab-testing-steps-container-steps-top-right-top-left">
                                        <p className="ab-testing-steps-current-name-title">Current Username</p>
                                        <p className="ab-testing-steps-current-name">Username</p>
                                    </div>
                                    <div className="ab-testing-steps-container-steps-top-right-top-right">
                                        <p className="ab-testing-steps-current-name-title">Current Name</p>
                                        <p className="ab-testing-steps-current-name">Name</p>
                                    </div>
                                </div>


                                <div className="ab-testing-steps-container-steps-top-right-bottom">
                                    <p className="ab-testing-steps-current-bio-title">Current Name</p>
                                    <p className="ab-testing-steps-current-bio">Name</p>

                                </div>
                            </div>
                        </div>

                        <div className="ab-testing-steps-container-steps-bottom">
                            <div className="ab-testing-steps-container-steps-bottom-left">
                                <p className="ab-testing-steps-container-steps-bottom-left-title">Everything look <br /> good? <span>Let’s Continue.</span></p>
                                <div className="ab-testing-steps-container-steps-bottom-left-button-container">
                                    <button className="ab-testing-steps-container-steps-bottom-left-button" onClick={handleNextStep}>
                                        Save Current Configuration
                                    </button>

                                    <p className="ab-testing-steps-container-steps-bottom-left-step-number">Part 1 of 3</p>
                                </div>

                            </div>

                            <div className="ab-testing-steps-container-steps-bottom-right">

                                <div className="ab-testing-steps-container-steps-top-right-top-left">
                                    <p className="ab-testing-steps-current-name-title">Category</p>
                                    <p className="ab-testing-steps-current-name">Category</p>
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-right">
                                    <p className="ab-testing-steps-current-name-title">Music</p>
                                    <p className="ab-testing-steps-current-name">Music</p>
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-left">
                                    <p className="ab-testing-steps-current-name-title">Action Button</p>
                                    <p className="ab-testing-steps-current-name">Button</p>
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-right">
                                    <p className="ab-testing-steps-current-name-title">Pronouns</p>
                                    <p className="ab-testing-steps-current-name">Pronouns</p>
                                </div>




                            </div>
                        </div>
                    </div>

                )}

            {
                currentStep == 2 && (
                    <div className="ab-testing-steps-container-steps step2">
                        <input type="text" placeholder="Name your test" className="ab-testing-steps-container-steps-test-name" />
                        <div className="ab-testing-steps-container-steps-top">
                            <div className="ab-testing-steps-container-steps-top-left">
                                <p className="ab-testing-steps-current-picture-title">Current Picture</p>
                                <div className="ab-testing-steps-current-picture"></div>
                            </div>

                            <div className="ab-testing-steps-container-steps-top-right">
                                <div className="ab-testing-steps-container-steps-top-right-top">
                                    <div className="ab-testing-steps-container-steps-top-right-top-left">
                                        <p className="ab-testing-steps-current-name-title">Current Username</p>
                                        <input type="text" className="ab-testing-steps-current-name-edit" placeholder="Username" />
                                    </div>
                                    <div className="ab-testing-steps-container-steps-top-right-top-right">
                                        <p className="ab-testing-steps-current-name-title">Current Name</p>
                                        <input type="text" className="ab-testing-steps-current-name-edit" placeholder="Name" />
                                    </div>
                                </div>


                                <div className="ab-testing-steps-container-steps-top-right-bottom">
                                    <p className="ab-testing-steps-current-bio-title">New Bio</p>
                                    <textarea name="" id="" className="ab-testing-steps-current-bio-edit" placeholder="Bio"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="ab-testing-steps-container-steps-bottom">
                            <div className="ab-testing-steps-container-steps-bottom-left">
                                <p className="ab-testing-steps-container-steps-bottom-left-title">Enter new values.<br /> <span>Leave blank for the values to remain the same.</span></p>
                                <div className="ab-testing-steps-container-steps-bottom-left-button-container">
                                    <button className="ab-testing-steps-container-steps-bottom-left-button" onClick={handleNextStep}>
                                        Save New Configuration
                                    </button>

                                    <p className="ab-testing-steps-container-steps-bottom-left-step-number">Part 2 of 3</p>
                                </div>

                            </div>

                            <div className="ab-testing-steps-container-steps-bottom-right">

                                <div className="ab-testing-steps-container-steps-top-right-top-left">
                                    <p className="ab-testing-steps-current-name-title">Category</p>
                                    <select name="" id="" className="ab-testing-steps-current-Category-edit">
                                        <option value="" selected disabled>Category</option>
                                    </select>
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-right">
                                    <p className="ab-testing-steps-current-name-title">Music</p>
                                    <input type="text" placeholder="Music" className="ab-testing-steps-current-music-edit" />
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-left">
                                    <p className="ab-testing-steps-current-name-title">Action Button</p>
                                    <select name="" id="" className="ab-testing-steps-current-Button-edit">
                                        <option value="" selected disabled>Button</option>
                                    </select>
                                </div>
                                <div className="ab-testing-steps-container-steps-top-right-top-right">
                                    <p className="ab-testing-steps-current-name-title">Pronouns</p>
                                    <input type="text" placeholder="Pronouns" className="ab-testing-steps-current-Pronouns-edit" />

                                </div>




                            </div>
                        </div>
                    </div>

                )}
            {
                currentStep == 3 && (
                    <div className="ab-testing-steps-container-step3">
                        <div>
                            <button className="ab-testing-steps-container-step3-button" onClick={handlePreviousStep}>
                                Lanuch Test
                            </button>
                            <p className="ab-testing-steps-container-step3-step-number">Part 3 of 3</p>
                        </div>


                        <p className="ab-testing-steps-container-step3-title">Check your test</p>
                        <div className="ab-testing-steps-container-step3-container">


                            <div className="ab-testing-steps-container-step3-left">
                                <p className="ab-testing-steps-container-step3-left-title"> A <span>(Old)</span></p>

                                <div className="ab-testing-steps-container-step3-left-Current-Picture-container">
                                    <p className="ab-testing-steps-container-step3-left-Current-Picture-title">Current Picture</p>
                                    <div className="ab-testing-steps-container-step3-left-Current-Picture-value"></div>
                                </div>


                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Current-Username-title">Current Username</p>
                                    <p className="ab-testing-steps-container-step3-left-Current-Username-value">Username</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Current-Name-title">Current Name</p>
                                    <p className="ab-testing-steps-container-step3-left-Current-Name-value">Name</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-Current-Bio-item">
                                    <p className="ab-testing-steps-container-step3-left-Current-Bio-title">Current Bio</p>
                                    <p className="ab-testing-steps-container-step3-left-Current-Bio-value">Bio</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Category-title">Category</p>
                                    <p className="ab-testing-steps-container-step3-left-Category-value">Category</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Music-title">Music</p>
                                    <p className="ab-testing-steps-container-step3-left-Music-value">Music</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Pronouns-title">Pronouns</p>
                                    <p className="ab-testing-steps-container-step3-left-Pronouns-value">Pronouns</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-left-item">
                                    <p className="ab-testing-steps-container-step3-left-Action-Button-title">Action Button</p>
                                    <p className="ab-testing-steps-container-step3-left-Action-Button-value">Button</p>
                                </div>
                            </div>

                            <div className="ab-testing-steps-container-step3-right">
                                <p className="ab-testing-steps-container-step3-left-title"> B <span>(New)</span></p>

                                <div className="ab-testing-steps-container-step3-right-Current-Picture-container">
                                    <p className="ab-testing-steps-container-step3-right-Current-Picture-title">Current Picture</p>
                                    <div className="ab-testing-steps-container-step3-right-Current-Picture-value"></div>
                                </div>


                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Current-Username-title">Current Username</p>
                                    <p className="ab-testing-steps-container-step3-right-Current-Username-value">Username</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Current-Name-title">Current Name</p>
                                    <p className="ab-testing-steps-container-step3-right-Current-Name-value">Name</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-Current-Bio-item">
                                    <p className="ab-testing-steps-container-step3-right-Current-Bio-title">Current Bio</p>
                                    <p className="ab-testing-steps-container-step3-right-Current-Bio-value">Bio</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Category-title">Category</p>
                                    <p className="ab-testing-steps-container-step3-right-Category-value">Category</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Music-title">Music</p>
                                    <p className="ab-testing-steps-container-step3-right-Music-value">Music</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Pronouns-title">Pronouns</p>
                                    <p className="ab-testing-steps-container-step3-right-Pronouns-value">Pronouns</p>
                                </div>

                                <div className="ab-testing-steps-container-step3-right-item">
                                    <p className="ab-testing-steps-container-step3-right-Action-Button-title">Action Button</p>
                                    <p className="ab-testing-steps-container-step3-right-Action-Button-value">Button</p>
                                </div>
                            </div>


                        </div>
                        <button className="ab-testing-steps-container-step3-button" onClick={handlePreviousStep}>
                            Lanuch Test
                        </button>
                    </div>

                )}
        </div>


    );
};

export default ABTesting;

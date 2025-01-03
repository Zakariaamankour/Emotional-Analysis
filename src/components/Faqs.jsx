import React, { useState } from "react"
import './Faqs.css'
const Faqs = () => {

    const [expandedSections, setExpandedSections] = useState({ 0: 1 });
    const [selectedCategory, setSelectedCategory] = useState("General Questions")
    const toggleSection = (index, title) => {
        setExpandedSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));

        // Extract the meaningful part of the title after the number and period
        const cleanTitle = title.replace(/^\d+\.\s*/, ""); // Removes "1. ", "2. ", etc.
        setSelectedCategory(cleanTitle); // Save the cleaned category title
    };

    const categories = [
        {
            title: "1. General Questions",
            items: [
                "1.1 What is Celeste7, and how can it help me?",
                "1.2 Who is Celeste7 designed for?",
                "1.3 How quickly will I see results?",
                "1.4 What makes Celeste7 different from other analytics tools?",
            ],
        },
        {
            title: "2. Trust and Security",
            items: [
                "2.1 Is my data safe with Celeste7?",
                "2.2 Will I need to share my social media passwords?",
                "2.3 What happens to my data if I cancel my subscription?",
            ],
        },
        {
            title: "3. Pricing and Subscriptions",
            items: [
                "3.1 What are the pricing options?",
                "3.2 Can I switch between plans?",
                "3.3 Is there a free trial for paid plans?",
                "3.4 Are there hidden fees?",
            ],
        },
        {
            title: "4. Using Celeste7",
            items: [
                "4.1 How does the Emotional Analysis tool work?",
                "4.2 What is the Competitor Tracker, and why should I use it?",
                "4.3 What's the difference between Horizon and Reflection?",
            ],
        },
        {
            title: "5. Advanced Features",
            items: [
                "5.1 What is the Competitor Playbook?",
                "5.2 How does A/B Testing work in Celeste7?",
                "5.3 What is Derivative, and how can it help?",
            ],
        },
        {
            title: "6. Technical and AI Questions",
            items: [
                "6.1 How accurate is Celeste7’s AI?",
                "6.2 Can Celeste7 predict viral trends?",
            ],
        },
        ,
        {
            title: "7. Support and Learning",
            items: [
                "7.1 What if I get stuck?",
                "7.2 How often is the e-learning content updated?",
                "7.3 Do I need technical skills to use Celeste7?",

            ],
        },
        ,
        {
            title: "8. Scalability and Flexibility",
            items: [
                "8.1 Can Celeste7 grow with my audience?",
                "8.2 Will Celeste7 support team accounts?",
            ],
        },
    ];

    return (
        <div className="Faqs">
            <div className="Faqs-header">
                <div className="Faqs-header-left">
                    <p className="Faqs-header-left-title">FAQ</p>
                    <p className="Faqs-header-left-text">Your questions answered with clarity and precision.</p>

                </div>
                <div className="Faqs-header-right">
                    <button className="Faqs-header-right-button-light">
                        <div>Log in</div>
                    </button>
                    <button className="Faqs-header-right-button-blue">
                        <div>Sign Up</div>
                    </button>
                </div>
            </div>


            <div className="Faqs-main">

                <div className="faq-categories">
                    <h3>Categories</h3>
                    <div className="faq-list">
                        {categories.map((category, index) => (
                            <div key={index} className="faq-section">
                                <div
                                    className="faq-title"
                                    onClick={() => toggleSection(index, category.title)}
                                >
                                    <span>{category.title}</span>
                                    <span>
                                        {expandedSections[index] ? "▲" : "▼"}
                                    </span>
                                </div>
                                {expandedSections[index] && (
                                    <ul className="faq-items">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="Faq-answers">
                    <div className="Faq-answers-item" style={{ display: selectedCategory != "General Questions" && "none" }}>
                        <p className="Faq-answers-item-title">General Questions</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">1. What is Celeste7, and how can it help me?</p>
                            <div className="Faq-answers-item-answer">
                                Celeste7 is an AI-powered social media analytics and strategy platform designed to simplify content creation.
                                We empower creators by translating complex data into actionable insights. Whether you're a beginner or a seasoned pro,
                                Celeste7 helps you uncover the hidden reasons behind viral success, connect with your audience emotionally,
                                and grow strategically.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">2. Who is Celeste7 designed for?</p>
                            <div className="Faq-answers-item-answer">
                                Celeste7 is for content creators, influencers, marketers, and businesses who want to optimize their social media strategies. It’s ideal for anyone who feels stuck, unsure about their next steps, or simply wants to save time by leveraging smart data to achieve better results.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">3. How quickly will I see results?</p>
                            <div className="Faq-answers-item-answer">
                                Your results depend on how you apply the insights. Many users notice improvements within 2–4 weeks by following our recommended strategies. For long-term growth, consistency is key—Celeste7 is a tool designed to grow with you.
                            </div>
                        </div>


                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">4. What makes Celeste7 different from other analytics tools?</p>
                            <div className="Faq-answers-item-answer">
                                Celeste7 goes beyond numbers. Our unique focus on emotional analysis and audience resonance helps you understand why your content works—not just what performs well. With personalised recommendations, emotional insights, and competitor strategies, we simplify the complex.
                            </div>
                        </div>

                    </div>

                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Trust and Security" && "none" }}>
                        <p className="Faq-answers-item-title">Trust and Security</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">5. Is my data safe with Celeste7?</p>
                            <div className="Faq-answers-item-answer">
                                Yes, we prioritise data privacy. All your information is securely stored using AWS encryption. We comply with global privacy regulations and will never sell your data to third parties.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">6. Will I need to share my social media passwords?</p>
                            <div className="Faq-answers-item-answer">
                                No. Celeste7 uses OAuth2.0, a secure method for connecting to your social media accounts without storing your login credentials. Your account remains under your control at all times.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">7. What happens to my data if I cancel my subscription?</p>
                            <div className="Faq-answers-item-answer">
                                You can export your data before cancellation. If you choose to cancel, your data will be retained for 30 days in case you decide to reactivate. After this period, it will be securely deleted.
                            </div>
                        </div>




                    </div>

                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Pricing and Subscriptions" && "none" }}>
                        <p className="Faq-answers-item-title">Pricing and Subscriptions</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">8. What are the pricing options?</p>
                            <div className="Faq-answers-item-answer">
                                Celeste7 offers four subscription tiers: <br />
                                <ol className="answers-number">
                                    <li>Basic Tier (Free): Limited features for exploring Celeste7.</li>
                                    <li>Core Tier (£29/month): Ideal for foundational tools.</li>
                                    <li>Empower Plus (£79/month): Advanced analytics and strategic insights.</li>
                                    <li>Empower Elite (£279/month): Comprehensive access, including dedicated data analysts.</li>
                                </ol>

                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">9. Is there a free trial for paid plans?</p>
                            <div className="Faq-answers-item-answer">
                                Yes, all paid plans include a 14-day free trial, allowing you to explore premium features without commitment.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">10. Can I switch between plans?</p>
                            <div className="Faq-answers-item-answer">
                                Absolutely. You can upgrade, downgrade, or cancel your subscription at any time.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">11. Are there hidden fees?</p>
                            <div className="Faq-answers-item-answer">
                                No. We believe in full transparency. The price you see is exactly what you’ll pay.
                            </div>
                        </div>


                    </div>

                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Using Celeste7" && "none" }}>
                        <p className="Faq-answers-item-title">Using Celeste7</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">12. How does the Emotional Analysis tool work?</p>
                            <div className="Faq-answers-item-answer">
                                Our Emotional Analysis tool uses AI to evaluate the emotional tone of your content. It measures how your audience feels—joy, curiosity, excitement—and provides actionable recommendations to amplify your emotional impact.
                                <ul>
                                    <li>Example: If your audience resonates with “happiness,” we might suggest using brighter visuals or uplifting music in your next post.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">13. What is the Competitor Tracker, and why should I use it?</p>
                            <div className="Faq-answers-item-answer">
                                The Competitor Tracker monitors your competitors’ content performance, identifying trends, emotional tones, and engagement strategies.
                                <ul>
                                    <li>Example: Learn why a competitor’s post went viral and use that insight to refine your strategy.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">14. What’s the difference between Horizon and Reflection?</p>
                            <div className="Faq-answers-item-answer">
                                <ul>
                                    <li>Horizon analyses the after-performance of a single post, helping you understand its impact in depth.</li>
                                    <li>Reflection compares up to three posts across platforms, highlighting patterns and differences for cross-platform optimisation.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">15. How does Trinity help with my first posts?</p>
                            <div className="Faq-answers-item-answer">
                                Trinity analyses your first three posts to assess emotional tone and engagement potential.
                                <ul>
                                    <li>Example: A creator saw a 15% engagement increase after tweaking their third post based on Trinity’s emotional resonance insights.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">16. Can I customise my dashboard?</p>
                            <div className="Faq-answers-item-answer">
                                Yes. Your User Dashboard is fully customisable. Highlight the tools and metrics that matter most to you for a personalised experience.
                            </div>
                        </div>
                    </div>


                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Advanced Features" && "none" }}>
                        <p className="Faq-answers-item-title">Advanced Features</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">17. What is the Competitor Playbook?</p>
                            <div className="Faq-answers-item-answer">
                                The Competitor Playbook provides step-by-step strategies based on your competitors’ most successful tactics.
                                <ul>
                                    <li>Example: If a competitor’s captions drive engagement, you’ll get actionable recommendations to replicate and adapt that success.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">13. What is the Competitor Tracker, and why should I use it?</p>
                            <div className="Faq-answers-item-answer">
                                The Competitor Tracker monitors your competitors’ content performance, identifying trends, emotional tones, and engagement strategies.
                                <ul>
                                    <li>Example: Learn why a competitor’s post went viral and use that insight to refine your strategy.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">18. How does A/B Testing work in Celeste7?</p>
                            <div className="Faq-answers-item-answer">
                                A/B Testing compares two variations of your content—captions, visuals, or post times—to identify what works best.
                                <ul>
                                    <li>Example: Empower Elite users can automate this process, letting AI run tests and deliver optimal suggestions.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">19. What is Derivative, and how can it help?</p>
                            <div className="Faq-answers-item-answer">
                                Derivative measures the rate of growth change over time, providing a detailed, graphical overview of your progress.
                                <ul>
                                    <li>Example: A business identified their fastest growth periods and optimised their posting schedule for similar time frames.</li>
                                </ul>
                            </div>
                        </div>


                    </div>


                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Technical and AI Questions" && "none" }}>
                        <p className="Faq-answers-item-title">Technical and AI Questions</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">20. How accurate is Celeste7’s AI?</p>
                            <div className="Faq-answers-item-answer">
                                Our AI is built using state-of-the-art models, constantly learning and improving. While no AI is perfect, Celeste7 delivers highly reliable insights tailored to your audience.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">21. Can Celeste7 predict viral trends?</p>
                            <div className="Faq-answers-item-answer">
                                While no tool can guarantee virality, Celeste7 identifies emerging trends, emotional triggers, and strategic gaps, significantly increasing your chances of success.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">22. Does Celeste7 work on mobile devices?</p>
                            <div className="Faq-answers-item-answer">
                                Yes! While the full experience is optimised for desktop, most features are accessible on mobile for flexibility and convenience.
                            </div>
                        </div>




                    </div>

                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Support and Learning" && "none" }}>
                        <p className="Faq-answers-item-title">Support and Learning</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">23. What if I get stuck?</p>
                            <div className="Faq-answers-item-answer">
                                Our Help and Support team is available via live chat and email. Empower Elite users receive priority support and direct access to a dedicated data analyst.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">24. How often is the e-learning content updated?</p>
                            <div className="Faq-answers-item-answer">
                                We update e-learning modules monthly with fresh trends, strategies, and case studies to keep you ahead of the curve.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">25. Do I need technical skills to use Celeste7?</p>
                            <div className="Faq-answers-item-answer">
                                Not at all. Celeste7 is designed to be intuitive, even for beginners. We provide guided tutorials and a clear interface to make it easy.
                            </div>
                        </div>




                    </div>

                    <div className="Faq-answers-item" style={{ display: selectedCategory != "Scalability and Flexibility" && "none" }}>
                        <p className="Faq-answers-item-title">Scalability and Flexibility</p>
                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">26. Can Celeste7 grow with my audience?</p>
                            <div className="Faq-answers-item-answer">
                                Our Help and Support team is available via live chat and email. Empower Elite users receive priority support and direct access to a dedicated data analyst.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">27. Will Celeste7 support team accounts?</p>
                            <div className="Faq-answers-item-answer">
                                Yes. Celeste7 is designed to scale with you. Whether you’re a beginner or managing multiple platforms, our tools adapt to meet your needs.
                            </div>
                        </div>

                        <div className="Faq-answers-item-question-container">
                            <p className="Faq-answers-item-question">25. Do I need technical skills to use Celeste7?</p>
                            <div className="Faq-answers-item-answer">
                                Not yet, but we’re developing team accounts for brands and agencies. Stay tuned for updates!
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
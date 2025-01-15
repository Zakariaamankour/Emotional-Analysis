// Import necessary libraries
import React from "react";
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <button className="terms-conditions-header-light-button">
                    <Link to='/dashboard'>Back to Dashboard</Link>
                </button>
                <button className="terms-conditions-header-blue-button">
                    <Link to="/user-settings">User Settings</Link>
                </button>
            </div>
            <h1 className="privacy-policy-title">Privacy Policy</h1>
            <div className="privacy-policy-content">
                <p>Celeste7 Privacy Policy</p>
                <p>
                    At Celeste7, we are committed to safeguarding the privacy and personal data of our
                    users. This Privacy Policy outlines how we collect, use, share, and protect your
                    information when you use our services, which include social media data analysis,
                    content suggestions, and performance insights. By using Celeste7, you agree to the
                    terms of this Privacy Policy.
                </p>

                <div className="privacy-policy-content-item">
                    <p>1. Data Collection and Use</p>
                    <p>We collect various types of information to provide our services effectively. This includes:</p>
                    <ul>
                        <li>
                            Social Media Data: We collect data through integration with third-party platforms (Google, TikTok,
                            Instagram, Facebook, YouTube, LinkedIn, X, etc.). The data collected may include, but is not limited to, video
                            metrics, engagement data (likes, shares, comments), profile information, captions, hashtags, and user content.
                        </li>
                        <li>
                            User-Generated Content: You may submit content (e.g., videos, images, captions) for analysis.
                            This content is used solely for providing insights and recommendations.
                        </li>
                        <li>
                            Automatically Collected Information: We collect technical data about how you interact with
                            our platform, including IP addresses, browser type, and usage data.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>2. Data Collection through OAuth 2.0 Authentication</p>
                    <ul>
                        <li>
                            OAuth 2.0 Authorization: We use the OAuth 2.0 protocol to securely request access to your
                            social media accounts, allowing you to authorize Celeste7 to gather data such as post metrics, engagement
                            analytics, and profile information. This access is strictly used to provide insights and recommendations.
                        </li>
                        <li>
                            Limited Scope Access: We request only the permissions necessary to enhance your user
                            experience, and you may manage these permissions within your social media account settings at any time.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>3. User Consent and Permissions</p>
                    <ul>
                        <li>
                            Explicit Consent: By connecting your social media accounts to Celeste7, you provide explicit
                            consent for us to collect and use your data as described in this policy.
                        </li>
                        <li>
                            Permissions: We request permissions specific to each social media platform to access data
                            that enhances your experience. You have the right to revoke these permissions at any time by adjusting your
                            account settings.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>4. Platform-Specific Data Handling</p>
                    <ul>
                        <li>
                            Google: We collect user data such as YouTube video metrics and Google API data to provide
                            insights. We comply with Google&apos;s data privacy policies and API rate limits, ensuring user data is secure.
                        </li>
                        <li>
                            TikTok: We access TikTok metrics, including views, likes, and captions, only with user consent.
                            We follow TikTok&apos;s API guidelines and rate limits to ensure compliance.
                        </li>
                        <li>
                            Instagram & Facebook: Using Instagram Graph API and Facebook Graph API, we collect engagement
                            data, captions, hashtags, and media URLs. We respect Instagram and Facebook&apos;s platform policies and ensure data
                            is processed securely.
                        </li>
                        <li>
                            YouTube: We access video and channel metrics via YouTube Data API, complying with YouTube&apos;s
                            Terms of Service and ensuring transparency in data use.
                        </li>
                        <li>
                            LinkedIn & X (Twitter): We collect engagement data, follower insights, and profile information
                            from LinkedIn and X with user authorization. We comply with each platform&apos;s privacy policies and data usage
                            restrictions.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>5. Data Sharing</p>
                    <ul>
                        <li>
                            Third-Party Integrations: We do not share your data with unauthorized third parties. Data may
                            be shared with trusted partners solely for the purpose of improving our service, and only when necessary.
                        </li>
                        <li>
                            Legal Requirements: We may disclose your information if required by law or to comply with
                            legal processes, protect user safety, or enforce our rights.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>6. Data Retention and Deletion</p>
                    <ul>
                        <li>
                            Retention Period: We retain user data for as long as necessary to provide our services or as
                            required by law. Social media data is retained for a maximum period of six months unless otherwise specified.
                        </li>
                        <li>
                            Data Deletion: Users may request the deletion of their data at any time by contacting
                            support@celeste7.com. Upon request, we will delete user data from our servers and notify integrated third
                            parties, where applicable.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>7. Security Measures</p>
                    <ul>
                        <li>
                            Encryption: All user data is encrypted both in transit and at rest.
                        </li>
                        <li>
                            Access Control: Access to user data is restricted to authorized personnel only, and we use
                            multi-factor authentication to ensure data security.
                        </li>
                        <li>
                            Regular Audits: We perform regular security audits and vulnerability assessments to maintain
                            data integrity.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>8. User Privacy and Data Confidentiality</p>
                    <ul>
                        <li>
                            Data Minimization: Celeste7 adheres to the principle of data minimization, collecting only the
                            information necessary for service functionality and user insights.
                        </li>
                        <li>
                            Privacy by Design: We embed privacy into our system architecture to protect user data
                            throughout all interactions and data handling processes.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>9. User Rights</p>
                    <ul>
                        <li>
                            Access and Control: Users have the right to access, modify, or delete their data at any time.
                            You can manage your data permissions by adjusting your social media account settings linked to Celeste7.
                        </li>
                        <li>
                            Revoking Permissions: You can revoke our access to your data by disconnecting your social
                            media accounts from Celeste7 or contacting support.
                        </li>
                        <li>
                            Data Portability: You may request a copy of your data in a commonly used electronic format.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>10. Compliance with Platform Requirements</p>
                    <ul>
                        <li>
                            Google: We comply with Google&apos;s API use and privacy policies, including limits on data
                            extraction and retention. User consent is required for data collection.
                        </li>
                        <li>
                            TikTok: We adhere to TikTok&apos;s data handling requirements, including user consent for data
                            access, compliance with rate limits, and avoiding unauthorized use of data.
                        </li>
                        <li>
                            Instagram & Facebook: We ensure compliance with Facebook&apos;s and Instagram&apos;s platform policies,
                            respecting data use restrictions, retention requirements, and user privacy rights.
                        </li>
                        <li>
                            YouTube: We follow YouTube&apos;s API Services Terms of Service, including transparency in data use
                            and allowing users to revoke access.
                        </li>
                        <li>
                            LinkedIn & X (Twitter): We comply with the privacy policies and data usage requirements of
                            LinkedIn and X, respecting user rights to manage permissions and request data deletion.
                        </li>
                        <li>
                            AWS (Amazon Web Services): User data is securely stored using AWS services. AWS provides
                            encryption, secure access controls, and compliance with regional data protection regulations to protect your data.
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-content-item">
                    <p>11. International Data Transfers</p>
                    <p>
                        Cross-Border Data Processing: Celeste7 may process and store data in locations outside your
                        country of residence. We rely on legal mechanisms such as data protection agreements to ensure your data receives
                        adequate protection during international transfers.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>12. Cookies and Tracking Technologies</p>
                    <p>
                        Celeste7 uses cookies and similar technologies to enhance user experience, analyze site traffic,
                        and improve our services. Users can manage their cookie preferences via browser settings.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>13. Third-Party Links</p>
                    <p>
                        Our service may contain links to third-party websites, plugins, or services. Celeste7 is not
                        responsible for the privacy practices of these third parties, and we encourage you to read their privacy policies.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>14. Children&apos;s Privacy</p>
                    <p>
                        Our services are not intended for individuals under the age of 13. We do not knowingly collect
                        personal information from children. If we become aware that we have collected data from a child under 13, we will
                        delete it promptly.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>15. Changes to This Privacy Policy</p>
                    <p>
                        We may update this Privacy Policy periodically to reflect changes in our practices or regulatory
                        requirements. Users will be notified of any significant changes, and continued use of our services constitutes
                        acceptance of the updated policy.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>16. Contact Information</p>
                    <p>
                        If you have any questions regarding this Privacy Policy or wish to exercise your rights, please
                        contact us at admin@celeste7.ai.
                    </p>
                </div>

                <div className="privacy-policy-content-item">
                    <p>17. Governing Law</p>
                    <p>
                        This Privacy Policy is governed by the laws of the United Kingdom, without regard to conflict of
                        law principles.
                    </p>
                </div>

                <p>
                    By using Celeste7, you agree to the collection and use of your information in accordance with this
                    Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

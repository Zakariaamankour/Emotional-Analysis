// Import necessary libraries
import React from "react";
import "./TermsConditions.css";
import { Link } from "react-router-dom";

const TermsConditions = () => {
    return (
        <div className="terms-conditions-container">
            <div className="terms-conditions-header">
                <button className="terms-conditions-header-light-button">
                    <Link to='/dashboard'>Back to Dashboard</Link>
                </button>
                <button className="terms-conditions-header-blue-button">
                    <Link to="/user-settings">User Settings</Link>
                </button>
            </div>
            <h1 className="terms-conditions-title">Terms & Conditions of Service</h1>
            <div className="terms-conditions-content">
                <p>Celeste7 Terms and Conditions</p>
                <p>
                    Welcome to Celeste7. These terms and conditions outline the rules and regulations for the use of our services,
                    which include analyzing social media content, providing insights, and offering data-driven suggestions to enhance user
                    engagement across various platforms.
                </p>

                <div className="terms-conditions-content-item">
                    <p>1. Acceptance of Terms</p>
                    <p>By accessing or using Celeste7, you agree to be bound by these terms and conditions, which may be updated periodically without notice. Please review them regularly. If you disagree with any part of the terms, you must discontinue the use of our services.</p>

                </div>

                <div className="terms-conditions-content-item">
                    <p>2. Eligibility</p>
                    <p>To use Celeste7, you must be at least 13 years of age or older. If you are under 18, you must have permission from a parent or guardian.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>3. User Data & Privacy</p>
                    <p>Celeste7 collects and processes data for analyzing social media performance. By using our service, you agree to grant us access to the information necessary for this purpose, including API data from platforms such as Google, TikTok, Instagram, Facebook, YouTube, LinkedIn, and X. User data is handled in compliance with all relevant privacy laws, including GDPR. Refer to our Privacy Policy for more details on data handling.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>4. OAuth 2.0 Authentication & Consent</p>
                    <ul>
                        <li>
                            OAuth 2.0 Authorization: We use the OAuth 2.0 protocol to request access to your social media accounts securely. By granting us access, you authorize Celeste7 to retrieve data from your social media accounts, including post metrics and engagement data.
                        </li>
                        <li>
                            Consent: You explicitly consent to allow Celeste7 to collect data through authorized access. You have the right to revoke these permissions at any time by adjusting your account settings.
                        </li>

                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>5. API Access & Third-Party Services</p>
                    <p>Our services utilize third-party APIs to gather data, including but not limited to TikTok API, Instagram Graph API, YouTube Data API, Facebook Graph API, LinkedIn API, and Google APIs. By using Celeste7, you authorize us to access and utilize these APIs to collect data necessary for providing our services. You understand that these third-party services have their own terms and conditions, which you must also comply with.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>6. User Consent & Data Handling</p>
                    <ul>
                        <li>
                            Data Usage: The collected data will be used strictly for analytics, insights, and recommendations to improve your content performance. We do not share your data with unauthorized third parties.
                        </li>
                        <li>
                            Data Retention: User data will be retained only as long as necessary to provide our services or as required by law. Users have the right to request deletion of their data.
                        </li>
                        <li>
                            Privacy Policy: Please refer to our Privacy Policy for detailed information on how we handle, store, and protect your data.
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>7. Platform-Specific Compliance</p>
                    <ul>
                        <li>
                            Google: We comply with Google's data privacy policies and API use limits. User data will only be accessed with consent, and we ensure data security in accordance with Google's requirements.
                        </li>
                        <li>
                            TikTok: We adhere to TikTok’s API rate limits and guidelines, respecting user privacy, and avoiding automated spam behavior. Users must authorize data access, and permissions can be managed at any time.
                        </li>
                        <li>
                            Instagram & Facebook: We comply with Facebook's Platform Terms, including data use limitations. Users grant us permission to access specific data through Instagram Graph API, and we respect content ownership and user privacy rights.
                        </li>
                        <li>
                            YouTube: We comply with YouTube API Services Terms of Service, including limits on data extraction and retention. We provide transparency regarding data use and offer users control over their data.
                        </li>
                        <li>
                            LinkedIn & X (Twitter): We ensure compliance with LinkedIn and X data policies, including non-commercial use and fair user practices. Users must provide consent for data access, and data is handled securely.
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>8. User-Generated Content</p>
                    <p>
                        You may submit data, content, and materials ("User Content") while using Celeste7. You retain all ownership rights in your User Content. By providing User Content to Celeste7, you grant us a non-exclusive, worldwide, royalty-free license to use, store, modify, and display the content solely for the purposes of providing our services.
                    </p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>9. Usage Restrictions</p>
                    <ul>
                        <li>
                            You must not use our service to post, share, or analyze illegal, defamatory, or infringing content.
                        </li>
                        <li>
                            You agree not to misuse our APIs or automate activities that violate social media platform rules.
                        </li>
                        <li>
                            Users must adhere to the terms and conditions of each platform being analyzed (TikTok, Instagram, Facebook, etc.).
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>10. Intellectual Property</p>
                    <p>All intellectual property rights related to Celeste7, including but not limited to trademarks, content, code, and graphics, remain the property of Celeste7. You are granted a limited license to access the service for personal use, but you must not attempt to copy, modify, or resell any part of the service.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>11. Data Security Measures</p>
                    <ul>
                        <li>
                            Encryption: We use industry-standard encryption to protect user data both in transit and at rest.
                        </li>
                        <li>
                            Access Control: Access to user data is restricted to authorized personnel only, with multi-factor authentication required for access.
                        </li>
                        <li>
                            Regular Audits: We perform regular security audits to ensure the continued protection of user data.
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>12. Limitation of Liability</p>
                    <p>
                        Celeste7 is not responsible for any direct, indirect, incidental, consequential, or special damages resulting from the use or inability to use the service, including issues arising from third-party platform changes, API limitations, or data inaccuracies. The service is provided on an "as is" basis, and we do not guarantee the accuracy or availability of data from third-party platforms.
                    </p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>13. Service Modifications</p>
                    <p>
                        We may modify, suspend, or discontinue Celeste7 or any part of the service without prior notice. We will not be liable for any consequences resulting from such changes.
                    </p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>14. Account Termination</p>
                    <p>
                        We reserve the right to terminate or suspend your access to Celeste7 if you violate any of these terms. You may also terminate your account at any time.
                    </p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>15. User Rights</p>
                    <ul>
                        <li>
                            Data Access: Users have the right to access their data and request copies in a structured, commonly used electronic format.
                        </li>
                        <li>
                            Data Deletion: Users can request the deletion of their data by contacting our support team.
                        </li>
                        <li>
                            Revoking Access: Users may revoke our access to their social media accounts at any time through their account settings.
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>16. Compliance with Platform-Specific Guidelines</p>
                    <p>
                        Celeste7 is committed to fulfilling the requirements and policies of the platforms it integrates with, including but not limited to:
                    </p>
                    <ul>
                        <li>
                            Celeste7 is committed to fulfilling the requirements and policies of the platforms it integrates with, including but not limited to:
                        </li>
                        <li>
                            TikTok: Adhering to TikTok’s API rate limits and guidelines, respecting user privacy, and avoiding automated spam behavior.
                        </li>
                        <li>
                            Instagram & Facebook: Following Facebook's Platform Terms, including data use limitations, and respecting content ownership and user privacy rights.
                        </li>
                        <li>
                            YouTube: Complying with YouTube API Services Terms of Service, including limits on data extraction and retention.
                        </li>
                        <li>
                            LinkedIn & X (Twitter): Ensuring compliance with each platform's respective data policies, including non-commercial use and fair user practices.
                        </li>
                    </ul>
                </div>

                <div className="terms-conditions-content-item">
                    <p>17. International Data Transfers</p>
                    <ul>
                        <li>
                            Cross-Border Data Processing: Celeste7 may process and store data in locations outside your country of residence. We rely on legal mechanisms, such as data protection agreements, to ensure your data receives an adequate level of protection when transferred internationally.
                        </li>
                    </ul>
                </div>



                <div className="terms-conditions-content-item">
                    <p>18. Changes to Terms</p>
                    <p>Celeste7 reserves the right to amend these terms at any time, with updates effective immediately upon posting. Your continued use of the service constitutes acceptance of the revised terms.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>19. Governing Law</p>
                    <p>These terms are governed by and construed in accordance with the laws of the United Kingdom, without regard to conflict of law provisions.</p>
                </div>

                <div className="terms-conditions-content-item">
                    <p>20. Contact Information</p>
                    <p>If you have any questions about these terms and conditions, please contact us at support@celeste7.com.</p>
                </div>


            </div>
        </div>
    );
};

export default TermsConditions;

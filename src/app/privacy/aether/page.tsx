"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AetherPrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="font-bold text-2xl tracking-tight text-gray-900">
            WUSLA
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-teal-accent text-white hover:bg-opacity-90 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Privacy Policy for Aether
              </h1>
              <p className="text-gray-400 text-lg">
                Last Updated: October 14, 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 text-gray-300 space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Aether (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring transparency about how we handle your information. This Privacy Policy explains our practices regarding data collection, use, and protection when you use the Aether mobile application (&quot;App&quot;).
                </p>
                <div className="bg-gray-800 p-4 rounded-lg space-y-1">
                  <p><strong className="text-white">Developer:</strong> WUSLA</p>
                  <p><strong className="text-white">Location:</strong> Kerala, India</p>
                  <p><strong className="text-white">Contact Email:</strong> <span className="text-teal-accent">[Your Support Email - Replace with actual email]</span></p>
                </div>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>

                <h3 className="text-2xl font-semibold text-white mb-3">1.1 Data Stored Locally on Your Device</h3>
                <p className="leading-relaxed mb-4">
                  Aether is designed with privacy as a core principle. <strong className="text-white">All your data is stored locally on your device</strong> using SQLite database and does not leave your device unless explicitly stated. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Notes:</strong> All note content, titles, categories, and timestamps</li>
                  <li><strong className="text-white">Tasks:</strong> Task descriptions, priorities, due dates, completion status</li>
                  <li><strong className="text-white">Diary Entries:</strong> Personal diary content and mood data</li>
                  <li><strong className="text-white">Calendar Events:</strong> Event details, dates, and reminders</li>
                  <li><strong className="text-white">User Preferences:</strong> App settings, theme preferences, haptic feedback settings</li>
                  <li><strong className="text-white">Usage Statistics:</strong> Local analytics for app performance (not transmitted)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">1.2 Data We DO NOT Collect</h3>
                <p className="leading-relaxed mb-4">
                  We want to be clear about what we <strong className="text-white">do not</strong> collect:
                </p>
                <ul className="space-y-2">
                  <li>❌ We do NOT collect personal identification information (name, email, phone number)</li>
                  <li>❌ We do NOT track your location</li>
                  <li>❌ We do NOT access your contacts, photos, or other personal files</li>
                  <li>❌ We do NOT collect device identifiers for tracking purposes</li>
                  <li>❌ We do NOT use cookies or tracking technologies</li>
                  <li>❌ We do NOT collect browsing history or app usage data from other apps</li>
                  <li>❌ We do NOT share any data with third parties</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">1.3 Device Permissions</h3>
                <p className="leading-relaxed mb-4">
                  The App requests the following permissions for functionality:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">VIBRATE Permission:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Purpose: To provide haptic feedback for enhanced user experience</li>
                      <li>Usage: Triggered when you interact with buttons and complete tasks</li>
                      <li>Data Collection: None</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">NOTIFICATIONS Permission:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Purpose: To send reminders for tasks and events you create</li>
                      <li>Usage: Local notifications only, scheduled on your device</li>
                      <li>Data Collection: None</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">STORAGE Permission (Implicit):</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Purpose: To store your notes, tasks, and diary entries locally</li>
                      <li>Usage: SQLite database stored on your device</li>
                      <li>Data Collection: All data remains on your device</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  Since all data is stored locally on your device, we use your information solely for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong className="text-white">App Functionality:</strong> Displaying your notes, tasks, diary entries, and calendar events</li>
                  <li><strong className="text-white">User Experience:</strong> Remembering your preferences and settings</li>
                  <li><strong className="text-white">Local AI Features:</strong> Processing your content locally or through third-party AI services (see Section 4)</li>
                  <li><strong className="text-white">Performance:</strong> Ensuring the app runs smoothly on your device</li>
                </ul>
                <p className="leading-relaxed mb-2">
                  We <strong className="text-white">DO NOT</strong>:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>- Sell your data to anyone</li>
                  <li>- Share your data with advertisers</li>
                  <li>- Use your data for marketing purposes</li>
                  <li>- Transmit your data to our servers (we don&apos;t have any!)</li>
                </ul>
              </section>

              {/* Data Storage and Security */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">3. Data Storage and Security</h2>

                <h3 className="text-2xl font-semibold text-white mb-3">3.1 Local Storage</h3>
                <p className="leading-relaxed mb-4">
                  All your data is stored locally on your device using:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">SQLite Database:</strong> Encrypted storage for notes, tasks, and diary entries</li>
                  <li><strong className="text-white">Async Storage:</strong> Secure local storage for app settings and preferences</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">3.2 Security Measures</h3>
                <p className="leading-relaxed mb-4">
                  We implement the following security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Local Encryption:</strong> Data is stored securely using device-level encryption</li>
                  <li><strong className="text-white">No Cloud Storage:</strong> Your data never leaves your device (no remote servers)</li>
                  <li><strong className="text-white">No Account System:</strong> No login, no passwords, no authentication data to protect</li>
                  <li><strong className="text-white">Input Validation:</strong> Protection against malicious input and SQL injection</li>
                  <li><strong className="text-white">Secure Code Practices:</strong> Regular security audits and updates</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">3.3 Data Backup</h3>
                <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-yellow-500 mb-2">Important:</p>
                  <p className="leading-relaxed">Since data is stored locally:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>If you uninstall the app, <strong className="text-white">all data will be deleted</strong></li>
                    <li>If you lose or reset your device, <strong className="text-white">all data will be lost</strong></li>
                    <li>We recommend using device backup features (Android Backup, etc.)</li>
                    <li>Cloud sync feature (coming soon) will be optional and opt-in</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">4. Third-Party Services</h2>

                <h3 className="text-2xl font-semibold text-white mb-3">4.1 AI Features (Optional)</h3>
                <p className="leading-relaxed mb-4">
                  The App includes <strong className="text-white">optional AI features</strong> for content improvement. When you use AI features:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-white mb-2">Hugging Face API:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Purpose: AI-powered title generation, content improvement</li>
                    <li>Data Sent: Only the specific text you choose to process</li>
                    <li>Privacy: Sent to Hugging Face servers for processing</li>
                    <li>Opt-Out: Simply don&apos;t use AI features; they are entirely optional</li>
                    <li>More Info: <a href="https://huggingface.co/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-accent hover:underline">Hugging Face Privacy Policy</a></li>
                  </ul>
                </div>
                <p className="leading-relaxed mb-2">
                  <strong className="text-white">Important Notes:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>AI features require internet connection</li>
                  <li>You choose when to use AI features (not automatic)</li>
                  <li>Only the content you explicitly process is sent</li>
                  <li>No personal identification data is transmitted</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">4.2 Web Search Features (Optional)</h3>
                <p className="leading-relaxed mb-4">
                  When you use web search within the app:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">DuckDuckGo API:</strong> For web search functionality</li>
                  <li><strong className="text-white">Data Sent:</strong> Only your search queries</li>
                  <li><strong className="text-white">Privacy:</strong> DuckDuckGo does not track users</li>
                  <li><strong className="text-white">Opt-Out:</strong> Don&apos;t use the search feature</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">4.3 Analytics and Crash Reporting</h3>
                <p className="leading-relaxed mb-4">
                  <strong className="text-white">Current Status:</strong> We do <strong className="text-white">NOT</strong> use any analytics or crash reporting services.
                </p>
                <p className="leading-relaxed mb-2">
                  <strong className="text-white">Future Plans:</strong> If we add analytics in the future:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We will update this policy</li>
                  <li>It will be opt-in (you choose)</li>
                  <li>We will only collect anonymous usage data</li>
                  <li>No personal information will be collected</li>
                </ul>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">5. Children&apos;s Privacy</h2>
                <p className="leading-relaxed mb-4">
                  Aether does not knowingly collect personal information from children under 13 years of age. Since all data is stored locally and we don&apos;t collect user information, the app is safe for all ages. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We recommend parental supervision for children under 13</li>
                  <li>Parents should monitor diary entries and notes if shared device</li>
                  <li>No account creation means no age verification is needed</li>
                </ul>
              </section>

              {/* Your Data Rights */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">6. Your Data Rights</h2>

                <h3 className="text-2xl font-semibold text-white mb-3">6.1 Access Your Data</h3>
                <p className="leading-relaxed mb-4">
                  You have complete access to all your data within the app:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View all notes, tasks, diary entries anytime</li>
                  <li>Export functionality (coming soon)</li>
                  <li>Search all your content</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">6.2 Delete Your Data</h3>
                <p className="leading-relaxed mb-4">
                  You have full control to delete your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delete individual notes, tasks, or diary entries</li>
                  <li>Use &quot;Clear All Data&quot; in settings to delete everything</li>
                  <li>Uninstall the app to remove all data permanently</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">6.3 Data Portability</h3>
                <p className="leading-relaxed mb-4">
                  Currently:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All data is stored in standard SQLite format</li>
                  <li>Export feature coming in future update</li>
                  <li>Data remains accessible on your device</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">7. Data Retention</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Active Data:</strong> Retained as long as you keep it in the app</li>
                  <li><strong className="text-white">Deleted Items:</strong> Moved to trash, automatically deleted after 30 days</li>
                  <li><strong className="text-white">Uninstall:</strong> All data permanently deleted when you uninstall</li>
                  <li><strong className="text-white">No Remote Storage:</strong> No data retained on any servers</li>
                </ul>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">8. International Data Transfers</h2>
                <p className="leading-relaxed mb-4">
                  <strong className="text-white">Not Applicable:</strong> Since all data is stored locally on your device, there are no international data transfers. Your data never leaves your device except when:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You explicitly use optional AI features (see Section 4)</li>
                  <li>You choose to use web search features (see Section 4)</li>
                </ul>
              </section>

              {/* Changes to This Privacy Policy */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. When we do:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>We will update the &quot;Last Updated&quot; date at the top</li>
                  <li>Significant changes will be communicated via app notification</li>
                  <li>Continued use of the app constitutes acceptance of changes</li>
                  <li>Previous versions available upon request</li>
                </ul>
                <p className="leading-relaxed mb-2">
                  <strong className="text-white">How to stay informed:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Check this policy periodically</li>
                  <li>App updates will note privacy changes</li>
                  <li>Contact us with questions anytime</li>
                </ul>
              </section>

              {/* Legal Compliance */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">10. Legal Compliance</h2>

                <h3 className="text-2xl font-semibold text-white mb-3">10.1 GDPR Compliance (European Users)</h3>
                <p className="leading-relaxed mb-4">
                  Under GDPR, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong className="text-white">Right to Access:</strong> View all your data in the app</li>
                  <li><strong className="text-white">Right to Deletion:</strong> Delete your data anytime</li>
                  <li><strong className="text-white">Right to Portability:</strong> Export your data (coming soon)</li>
                  <li><strong className="text-white">Right to Object:</strong> Don&apos;t use optional features</li>
                </ul>
                <p className="leading-relaxed">
                  Since we don&apos;t collect personal data, most GDPR requirements are automatically met.
                </p>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">10.2 CCPA Compliance (California Users)</h3>
                <p className="leading-relaxed mb-4">
                  Under CCPA:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do NOT sell your personal information</li>
                  <li>We do NOT share your data with third parties for monetary benefit</li>
                  <li>You can request deletion of your data (delete within app)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">10.3 Other Jurisdictions</h3>
                <p className="leading-relaxed">
                  We comply with applicable privacy laws in all jurisdictions where Aether is available.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or your data:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <p><strong className="text-white">Email:</strong> <span className="text-teal-accent">[Your Support Email]</span></p>
                  <p><strong className="text-white">Developer:</strong> WUSLA</p>
                  <p><strong className="text-white">Location:</strong> Kerala, India</p>
                  <p><strong className="text-white">Response Time:</strong> Within 48-72 hours</p>
                </div>
                <p className="leading-relaxed mb-2">
                  <strong className="text-white">For:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Privacy questions</li>
                  <li>Data deletion requests</li>
                  <li>Feature requests</li>
                  <li>Security concerns</li>
                  <li>General inquiries</li>
                </ul>
              </section>

              {/* App Permissions Summary */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">12. App Permissions Summary</h2>
                <p className="leading-relaxed mb-4">
                  For transparency, here&apos;s a complete summary of all permissions:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 p-3 text-left text-white">Permission</th>
                        <th className="border border-gray-700 p-3 text-left text-white">Purpose</th>
                        <th className="border border-gray-700 p-3 text-left text-white">Data Collected</th>
                        <th className="border border-gray-700 p-3 text-left text-white">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 p-3">VIBRATE</td>
                        <td className="border border-gray-700 p-3">Haptic feedback</td>
                        <td className="border border-gray-700 p-3">None</td>
                        <td className="border border-gray-700 p-3">Optional*</td>
                      </tr>
                      <tr className="bg-gray-800/50">
                        <td className="border border-gray-700 p-3">NOTIFICATIONS</td>
                        <td className="border border-gray-700 p-3">Task reminders</td>
                        <td className="border border-gray-700 p-3">None</td>
                        <td className="border border-gray-700 p-3">Optional*</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 p-3">STORAGE (Implicit)</td>
                        <td className="border border-gray-700 p-3">Save your data locally</td>
                        <td className="border border-gray-700 p-3">All app data (local only)</td>
                        <td className="border border-gray-700 p-3">Required</td>
                      </tr>
                      <tr className="bg-gray-800/50">
                        <td className="border border-gray-700 p-3">INTERNET</td>
                        <td className="border border-gray-700 p-3">AI features, web search</td>
                        <td className="border border-gray-700 p-3">Only when explicitly used</td>
                        <td className="border border-gray-700 p-3">Optional*</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  *Optional means the app works without these features if you choose not to use them.
                </p>
              </section>

              {/* Security Incident Response */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">13. Security Incident Response</h2>
                <p className="leading-relaxed mb-4">
                  In the unlikely event of a security issue:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>We will investigate immediately</li>
                  <li>Affected users will be notified within 72 hours</li>
                  <li>Remediation steps will be taken</li>
                  <li>Transparent communication about the issue</li>
                </ol>
                <p className="leading-relaxed">
                  <strong className="text-white">To report a security issue:</strong> <span className="text-teal-accent">[Your Security Email]</span>
                </p>
              </section>

              {/* Open Source and Transparency */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">14. Open Source and Transparency</h2>
                <p className="leading-relaxed mb-4">
                  Aether is committed to transparency:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Code follows security best practices</li>
                  <li>Regular security audits</li>
                  <li>Community feedback welcomed</li>
                  <li>Transparent about all data practices</li>
                </ul>
              </section>

              {/* Your Consent */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">15. Your Consent</h2>
                <p className="leading-relaxed mb-4">
                  By using Aether, you consent to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>This Privacy Policy</li>
                  <li>Local storage of your data on your device</li>
                  <li>Optional use of third-party AI services when you choose</li>
                  <li>Local notifications for reminders</li>
                </ul>
                <p className="leading-relaxed mb-2">
                  You can withdraw consent by:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Uninstalling the app</li>
                  <li>Deleting your data in settings</li>
                  <li>Disabling specific permissions in device settings</li>
                </ul>
              </section>

              {/* Summary (TL;DR) */}
              <section className="bg-teal-accent/10 p-6 rounded-lg border border-teal-accent/30">
                <h2 className="text-3xl font-bold text-white mb-4">Summary (TL;DR)</h2>
                <ul className="space-y-2">
                  <li>✅ <strong className="text-white">All your data stays on your device</strong></li>
                  <li>✅ <strong className="text-white">We don&apos;t collect personal information</strong></li>
                  <li>✅ <strong className="text-white">No tracking or analytics</strong></li>
                  <li>✅ <strong className="text-white">No data sharing with third parties</strong></li>
                  <li>✅ <strong className="text-white">You have complete control of your data</strong></li>
                  <li>✅ <strong className="text-white">Optional AI features are clearly disclosed</strong></li>
                  <li>✅ <strong className="text-white">You can delete everything anytime</strong></li>
                  <li>✅ <strong className="text-white">No account creation or login required</strong></li>
                </ul>
                <p className="text-white font-semibold mt-4">
                  Bottom Line: Your privacy is our priority. We built Aether to be a safe, private space for your thoughts and tasks.
                </p>
              </section>

              {/* Footer Info */}
              <section className="text-center border-t border-gray-800 pt-6">
                <p className="text-gray-500 mb-2"><strong className="text-white">Effective Date:</strong> October 14, 2025</p>
                <p className="text-gray-500 mb-2"><strong className="text-white">Version:</strong> 1.0</p>
                <p className="text-gray-500 mb-4"><strong className="text-white">Last Reviewed:</strong> October 14, 2025</p>
                <p className="text-gray-600">© 2025 WUSLA. All rights reserved.</p>
              </section>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

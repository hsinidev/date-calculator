import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="mt-20 max-w-5xl mx-auto px-4 relative">
             <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full opacity-50"></div>
                <span className="px-4 text-purple-300 font-mono text-sm tracking-widest whitespace-nowrap">KNOWLEDGE BASE</span>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full opacity-50"></div>
            </div>

            <article className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-[400px] overflow-hidden'}`}>
                <div className="prose prose-invert lg:prose-xl max-w-none prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-purple-300 prose-headings:to-pink-300 prose-a:text-pink-400 prose-strong:text-white text-gray-300">
                    
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Mastering Time: The Comprehensive Guide to Date Arithmetic and Calendrical Mechanics</h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">An exhaustive exploration of temporal mathematics, the history of calendars, and the algorithmic challenges of calculating time in the digital age. Provided by Doodax.</p>
                    </header>

                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050510] to-transparent z-10 flex items-end justify-center pb-8 pointer-events-none">
                        </div>
                    )}

                    <nav className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-12 not-prose">
                        <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">1. The Illusion of Simplicity: Why Time is Hard</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">2. The Epoch: 1970 and the Birth of Digital Time</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">3. Leap Years: The Astronomical Correction</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">4. The Gregorian vs. Julian Calendar</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">5. Month Irregularities and Algorithmic Solutions</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">6. Time Zones and the UTC Standard</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">7. Professional Use Cases for Date Calculators</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">8. Doodax Methodology: How We Calculate</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">9. Frequently Asked Questions (FAQ)</li>
                            <li className="hover:text-purple-400 cursor-pointer transition-colors">10. Conclusion</li>
                        </ul>
                    </nav>

                    <section id="introduction">
                        <h2>1. The Illusion of Simplicity: Why Time is Hard</h2>
                        <p>To the human observer, time appears linear and constant. We experience days turning into nights, weeks turning into months, and years passing by with rhythmic predictability. However, when we attempt to quantify this experience mathematically within the logic of computer systems, we immediately encounter a fractured reality. The concept of "one month," for instance, is mathematically ambiguous. Is it 28 days? 30 days? 31 days? Or perhaps 29 days?</p>
                        <p>This ambiguity stems from the fact that our calendar is not a purely mathematical construct but a historical artifact derived from astronomical observations. The earth does not orbit the sun in exactly 365 days; it takes approximately 365.2425 days. The moon does not orbit the earth in a clean 30 days. Our attempts to force these irregular celestial cycles into a rigid grid of months and days have resulted in a system riddled with exceptions, compensations, and arbitrary rules. Doodax was built to navigate this chaos.</p>
                    </section>

                    <section id="epoch">
                        <h2>2. The Epoch: 1970 and the Birth of Digital Time</h2>
                        <p>In the realm of computing, time began at midnight on January 1, 1970. This moment is known as the <strong>Unix Epoch</strong>. Computers do not inherently understand "October 27, 2023." Instead, they count the number of seconds (or milliseconds) that have ticked by since the Epoch. This continuous integer is the bedrock of modern computing.</p>
                        <p>When you use the Doodax calculator, your input dates are first converted into this raw, millisecond-based format. This allows for extremely precise arithmetic. However, the challenge lies not in the subtraction of these large numbers, but in the translation of that result back into human-readable units. A difference of 2,678,400,000 milliseconds is mathematically precise, but to a human, "1 Month" is the useful answer. The complexity arises because that millisecond value could represent February (short) or March (long).</p>
                    </section>

                    <section id="leap-years">
                        <h2>3. Leap Years: The Astronomical Correction</h2>
                        <p>The concept of a leap year is often oversimplified as "every four years." In reality, the rule is more specific: A year is a leap year if it is divisible by 4, <em>unless</em> it is divisible by 100, <em>unless</em> it is also divisible by 400. This obscure rule exists to correct the slight drift that occurs because the solar year is not exactly 365.25 days.</p>
                        <p>Without this correction, our calendar would drift by about three days every 400 years. Over centuries, this would result in the seasons shifting dramatically—Christmas would eventually occur in mid-summer. Doodax's algorithms strictly adhere to these Gregorian rules to ensure that if your calculation spans across the year 2000 (a leap year) or 1900 (not a leap year), the day count is perfectly accurate.</p>
                    </section>

                    <section id="months">
                        <h2>4. Month Irregularities and Algorithmic Solutions</h2>
                        <p>The most significant challenge in date difference calculation is the variable length of months. This variability breaks simple division logic. You cannot simply divide the total days by 30 to get the months. </p>
                        <p><strong>The Doodax Approach:</strong> We utilize a "borrowing" method similar to manual subtraction taught in primary school. </p>
                        <ul>
                            <li>First, we calculate the difference in years.</li>
                            <li>Then, we calculate the difference in months. If the end month is smaller than the start month, we decrease the year count by one and add 12 to the months.</li>
                            <li>Finally, we calculate the difference in days. If the end day is smaller than the start day, we must look at the <em>previous</em> month to determine how many days to "borrow." For example, borrowing from March (31 days) yields a different result than borrowing from February (28 or 29 days).</li>
                        </ul>
                        <p>This method ensures that the result matches human intuition. If you were born on January 31st, exactly one month later is February 28th (or 29th), not March 2nd or 3rd.</p>
                    </section>

                    <section id="use-cases">
                        <h2>5. Professional Use Cases for Date Calculators</h2>
                        <p>Why is such precision necessary? In many industries, an error of a single day is unacceptable.</p>
                        <ul>
                            <li><strong>Legal & Compliance:</strong> Statutes of limitation, visa validity periods, and contract terminations are often defined by strict date ranges.</li>
                            <li><strong>Finance:</strong> Interest accrual is calculated daily. A difference in day count calculation conventions (e.g., 30/360 vs. Actual/Actual) can affect millions of dollars in bond markets. Doodax uses the "Actual" count method.</li>
                            <li><strong>HR & Payroll:</strong> Employee tenure, probation periods, and benefit eligibility often depend on exact date milestones.</li>
                            <li><strong>Supply Chain:</strong> Calculation of lead times and perishable inventory shelf-life requires accurate date arithmetic to prevent waste and ensure timely delivery.</li>
                        </ul>
                    </section>

                    <section id="faq">
                        <h2>6. Frequently Asked Questions (FAQ)</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white text-lg font-bold">Q: Does Doodax count the start date?</h3>
                                <p>A: Yes, the calculation typically assumes the start date is day 0. However, by using the "Include End Date" toggle, you effectively change the calculation from "Duration" (Time elapsed) to "Count" (Number of days touched). This adds 1 day to the total.</p>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold">Q: How does Doodax handle Time Zones?</h3>
                                <p>A: Doodax processes dates based on your local system time to ensure consistency with your calendar. However, because we strip the time component and focus solely on the date, problems related to daylight saving shifts are mitigated for pure date-difference calculations.</p>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold">Q: Is this tool free for commercial use?</h3>
                                <p>A: Yes, Doodax is a free utility provided for the community. You are free to use it for business, education, or personal projects.</p>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold">Q: Can I calculate negative dates (BC)?</h3>
                                <p>A: Currently, the UI is optimized for Common Era (AD) dates. While the underlying JavaScript engine can handle historical dates, the input selectors are optimized for modern usage.</p>
                            </div>
                        </div>
                    </section>

                    <section id="conclusion">
                        <h2>7. Conclusion</h2>
                        <p>Time is the scaffolding of our reality, yet it is constructed of irregular, wobbling blocks. To master time in a digital context requires looking past the simplicity of the clock and understanding the deep history and mathematics of the calendar. Doodax serves as a bridge between the raw, uncompromising precision of the machine epoch and the messy, historical reality of human calendars. We hope this tool serves you well in your planning, analysis, and curiosity.</p>
                        <p className="font-bold text-center mt-8 text-purple-400">Doodax: Where Precision Meets Infinity.</p>
                    </section>

                </div>
            </article>

            {/* Read More Toggle Button */}
            <div className="flex justify-center mt-8 relative z-20">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300"
                >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                    <span className="relative font-bold tracking-wider flex items-center gap-2">
                        {isExpanded ? 'READ LESS' : 'READ FULL ARTICLE'}
                        <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default SeoArticle;
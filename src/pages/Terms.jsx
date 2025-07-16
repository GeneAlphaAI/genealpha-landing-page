import ReactMarkdown from "react-markdown";

const terms = `
## 1. Acceptance of These Terms

By accessing or using any part of the GeneAlpha ecosystem—including our website at [https://genealpha.ai](https://genealpha.ai) (the “Site”), smart-contract protocols, prediction dashboards, mobile or desktop applications, APIs, and any associated tokens or digital assets (collectively, the “Services”)—you confirm that you have read, understood, and agree to be bound by these Terms of Service (“Terms”) and our Privacy Notice. If you do not agree, you must not use the Services.

## 2. Eligibility

You must be at least 18 years old and legally capable of forming a binding contract in your jurisdiction. You represent that your access to the Services is lawful where you are located and that you are not on any sanctions or restricted-party list.

## 3. Account & Wallets

GeneAlpha is a non-custodial platform. You interact through a self-hosted blockchain wallet or other credentials you control. You are solely responsible for safeguarding private keys, seed phrases, or other authentication methods. Loss of keys will result in permanent loss of access to your assets; GeneAlpha cannot retrieve or reset them.

## 4. The $GA Token

The $GA token is a utility token intended to power transactions (e.g., staking for model-training credits, subscription tiers, governance voting, or access to premium analytics). $GA is not a security or investment product. Holding or transacting $GA does not confer ownership of GeneAlpha, profit participation, dividends, or any guarantee of value appreciation. Token prices are volatile and you may lose all value.

## 5. Use of Predictions & Content

GeneAlpha aggregates on-chain data and applies machine-learning models to generate insights. All predictions, scores, and analytics are informational only. They are not financial, investment, trading, legal, or tax advice and should not be relied on as such. You remain solely responsible for all decisions made in reliance on information obtained from the Services.

## 6. User-Generated Content

You may submit data, text, code, feedback, or other materials (“User Content”). You grant GeneAlpha a worldwide, royalty-free, sublicensable license to use, reproduce, modify, and display such User Content solely to operate and improve the Services. You represent that you own or have the right to submit the User Content and that it does not infringe any third-party rights.

## 7. Intellectual Property

All GeneAlpha software, models, branding, graphics, and content (excluding User Content) are the exclusive property of GeneAlpha Ltd. or its licensors and are protected by copyright, trademark, and other laws. You receive a limited, revocable, non-exclusive, non-transferable license to access and use the Services in accordance with these Terms.

## 8. Prohibited Conduct

You agree not to:

1. Use the Services for any unlawful purpose, including money-laundering, financing terrorism, or market manipulation.
2. Circumvent, interfere with, or disable security-related features.
3. Reverse-engineer, decompile, or attempt to extract source code or datasets except as permitted by applicable open-source licenses.
4. Upload viruses, worms, or malicious code.
5. Use automated scripts to scrape or mine data beyond public API rate limits.
6. Violate any applicable export-control or sanctions laws.


## 9. Fees & Gas Costs

Smart-contract interactions may incur gas fees or protocol fees displayed at the time of transaction. You are responsible for all on-chain costs, and fees are non-refundable once a transaction is broadcast.

## 10. Third-Party Services & Links

Links to third-party sites or smart contracts are provided for convenience. GeneAlpha has no control over—and assumes no responsibility for—third-party content, services, or smart-contract risks. Your interactions with third parties are solely between you and the relevant provider.

## 11. Disclaimers

The Services are provided “as is” and “as available” without warranties of any kind, express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement. GeneAlpha does not warrant that (a) the Services will be uninterrupted, secure, or error-free; (b) any predictions will be accurate or profitable; or (c) smart-contract code will be free from vulnerabilities.

## 12. Limitation of Liability

To the maximum extent permitted by law, GeneAlpha, its affiliates, directors, employees, and suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or goodwill, arising from or related to your use of the Services—even if advised of the possibility of such damages. GeneAlpha’s total aggregate liability to you for any claim shall not exceed the greater of (a) USD 100 or (b) the amount you paid to GeneAlpha in the past twelve (12) months.

## 13. Indemnification

You agree to defend, indemnify, and hold harmless GeneAlpha and its affiliates from any claims or demands, including reasonable legal fees, arising out of (i) your use or misuse of the Services, (ii) violation of these Terms, or (iii) infringement of any third-party rights.

## 14. Termination

GeneAlpha may suspend or terminate your access to the Services at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users or GeneAlpha. Upon termination, all licenses granted to you cease immediately, but Sections 6-18 survive.

## 15. Governing Law & Dispute Resolution

These Terms, and any dispute or claim arising out of or in connection with them or the Services, are governed by generally accepted principles of international commercial law. Where those principles are silent, the arbitral tribunal (defined below) may apply supplemental legal standards it considers appropriate to achieve a fair and commercially reasonable outcome, without regard to any single nation’s conflict-of-laws rules.  
Any dispute that the parties cannot resolve informally will be finally settled by binding arbitration under the UNCITRAL Arbitration Rules, as in force on the date the claim is submitted. The tribunal will consist of one arbitrator appointed in accordance with those Rules.
 
• Seat and venue: The seat of arbitration is deemed to be “virtual/online,” permitting hearings and filings to be conducted entirely by secure teleconference or videoconference.  
• Language: English.  
• Enforcement: The arbitral award is final and may be entered and enforced in any court of competent jurisdiction worldwide.  
• Class-action waiver: You and GeneAlpha waive any right to participate in class, collective, or representative proceedings.  

By using the Services, you acknowledge that this clause is intended to provide a neutral, globally applicable framework for resolving disputes efficiently, regardless of where you or GeneAlpha may be located.

## 16. Changes to These Terms

We may revise these Terms from time to time. Material changes will be posted on the Site or otherwise communicated to you. Your continued use of the Services after the “Last updated” date constitutes acceptance of the revised Terms.

## 17. Severability

If any provision of these Terms is held unlawful or unenforceable, that provision will be severed and the remaining provisions will remain in full force.

## 18. Entire Agreement

These Terms, together with any additional policies referenced herein, constitute the entire agreement between you and GeneAlpha regarding the Services and supersede all prior agreements, whether written or oral.

## 19. Contact

GeneAlpha AI  
Site: [genealpha.ai](https://genealpha.ai)  
Email: hello@genealpha.ai  

By using GeneAlpha, the Site, or any related Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.

`;

const Terms = () => (
  <div className="w-full flex justify-center px-4 xl:px-0">
    <div className="max-w-4xl">
      <h1 className="text-lg my-2 font-bold text-dull-white mt-8">
        Terms of Services
      </h1>
      <span className="text-sm text-[#BABABD]">Date updated: 23/06/2025</span>
      <p className="text-[14px] text-[#BABABD] mb-4 mt-10">
        These Terms of Service apply whenever you interact with GeneAlpha in any
        way—whether you are merely browsing genealpha.ai, connecting a
        self-hosted wallet to execute on-chain actions, using our dashboards or
        APIs, or transacting with the $GA utility token—because each of these
        activities constitutes “use of the Services.” By proceeding, you affirm
        that you meet our eligibility requirements (18 +, legally permitted to
        engage with crypto, and not on a sanctions list), accept that GeneAlpha
        is non-custodial and cannot recover lost keys, and agree that all data,
        predictions, and tools are provided solely for informational purposes.
        In short, if you access, view, or build on any part of the GeneAlpha
        ecosystem, you are bound by these Terms and the obligations,
        limitations, and dispute-resolution rules they set out.
      </p>
      <ReactMarkdown
        components={{
          h2: ({ children, ...props }) => (
            <h2
              className="text-[24px] my-2 pb-3 font-bold text-dull-white mt-4"
              {...props}
            >
              {children}
            </h2>
          ),
          p: ({ children, ...props }) => (
            <p className="text-[14px] text-[#BABABD] mb-4" {...props}>
              {children}
            </p>
          ),
          li: ({ node, children, ordered, ...props }) => (
            <li className="ml-1 list-decimal text-sm text-[#BABABD]" {...props}>
              {children}
            </li>
          ),

          ol: ({ node, children, ...props }) => (
            <ol className="list-decimal ml-6" {...props}>
              {children}
            </ol>
          ),
          a: ({ children, ...props }) => (
            <a className="text-[#BABABD] underline" {...props}>
              {children}
            </a>
          ),
        }}
      >
        {terms}
      </ReactMarkdown>
    </div>
  </div>
);

export default Terms;

import ReactMarkdown from "react-markdown";

const privacy = `
## 1. What We Collect

1. Wallet address & on-chain activity – Public information you broadcast on the Network.  
2. Support email (optional) – Stored off-chain to answer tickets; deleted twelve months after resolution.  
3. Minimal server logs – Truncated IP, time-stamp, user-agent kept for up to thirty days to combat abuse.  
4. Local storage / cookies – A session token and UI settings stored in your browser; you may clear them anytime.  


We never ask for private keys, seed phrases, payment cards, or photo IDs.


## 2. How We Use Data

1. Verify wallet signatures and let you call smart contracts (contract performance).  
2. Detect spam, DDoS, or other abuse (legitimate interests).  
3. Respond to your voluntary support enquiries (legitimate interests or consent).

## 3. Sharing

We do not sell or broker data. Information is shared only with infrastructure providers bound by confidentiality, with regulators when legally compelled, or with a successor entity if GeneAlpha merges or transfers assets. Your wallet address and transactions remain permanently public on-chain and visible to anyone.

## 4. International Transfers

Support emails and logs may be processed in the EU or US. Standard Contractual Clauses or equivalent safeguards apply when legally required.

## 5. Retention

On-chain data is permanent by design. Logs are auto-purged after thirty days. Support emails persist for ticket lifetime plus twelve months.

## 6. Your Rights

For off-chain data, you may request access, correction, deletion, or objection under GDPR, CPRA, or similar laws. Email [support@genealpha.ai](mailto:support@genealpha.ai); we will respond within thirty days. On-chain data cannot be altered by GeneAlpha.

## 7. Security

Traffic is encrypted with TLS. We enforce strict content-security policies, least-privilege cloud access, and regular smart-contract audits. Wallet security remains your responsibility.

## 8. Children

GeneAlpha targets adults. We do not knowingly collect data from anyone under 13. Contact us if a child has submitted off-chain data so we can delete it.

## 9. Changes

Material updates will be announced on the Site. Continued use after an update’s effective date constitutes acceptance.

## 10. Contact

GeneAlpha AI  
Site: [genealpha.ai](https://genealpha.ai)  
Email: [hello@genealpha.ai](mailto:hello@genealpha.ai)

By using GeneAlpha, the Site, or any related Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.


`;

const Privacy = () => (
  <div className="w-full flex justify-center px-4 xl:px-0">
    <div className="max-w-4xl">
      <h1 className="text-lg my-2 font-bold text-dull-white mt-8">
        Privacy Policy
      </h1>
      <span className="text-sm text-[#BABABD]">Date updated: 23/06/2025</span>
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
        {privacy}
      </ReactMarkdown>
    </div>
  </div>
);

export default Privacy;

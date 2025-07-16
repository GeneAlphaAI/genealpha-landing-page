import ReactMarkdown from "react-markdown";
const cookies = `
## 1. What Are Cookies?

Cookies are small text files placed on your device to remember preferences or authenticate sessions.

## 2. Cookies We Use

1. Essential cookies - Maintain session state, keep you logged in, and secure the Site.
2. Preference cookies - Store UI choices such as theme or gas-fee slider position. 
3. GeneAlpha does not use third-party advertising or cross-site tracking cookies.

## 3. Managing Cookies

Most browsers let you block or delete cookies. Blocking essential cookies may break some Site functionality.  
You can also clear local storage via your browser settings.

## 4. The $GA Token

The $GA token is a utility token intended to power transactions (e.g., staking for model-training credits, subscription tiers, governance voting, or access to premium analytics). $GA is not a security or investment product. Holding or transacting $GA does not confer ownership of GeneAlpha, profit participation, dividends, or any guarantee of value appreciation. Token prices are volatile and you may lose all value.

## 5. Changes

Material updates will be announced on the Site. Continued use after an update's effective date constitutes acceptance.

## 6. Contact

GeneAlpha AI  
Site: [genealpha.ai](https://genealpha.ai)  
Email: [hello@genealpha.ai](mailto:hello@genealpha.ai)


By using GeneAlpha, the Site, or any related Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.

    `;

const Cookies = () => (
  <div className="w-full flex justify-center px-4 xl:px-0">
    <div className="max-w-4xl">
      <h1 className="text-lg my-2 font-bold text-dull-white mt-8">
        Cookie Policy
      </h1>
      <span className="text-sm text-[#BABABD]">Date updated: 16/07/2025</span>
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
        {cookies}
      </ReactMarkdown>
    </div>
  </div>
);

export default Cookies;

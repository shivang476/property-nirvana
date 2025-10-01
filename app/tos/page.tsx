import { CtaCards } from "@/components/cta-cards";
import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";

export default function TermsPrivacyCookies() {
  return (
    <div>
      <HeadingFrame heading="Terms, Privacy & Cookies Policy" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>
            Property Nirvana – Terms, Privacy & Cookies Policy
          </FootNote.Title>
          <FootNote.Content>
            Effective Date: [Insert Date] Welcome to propertynirvana.com
            (“Website”). By accessing or using this Website, you agree to the
            following Terms and Conditions, Privacy Policy, and Cookies Policy.
            Please read them carefully.
          </FootNote.Content>
        </FootNote>

        <div className="grid mt-14 gap-8">
          <GuideEntry
            title="1. About Us"
            points={[
              "propertynirvana.com is operated by Property Nirvana Estate Agency (“we”, “us”, “our”).",
              "The Website provides information about our estate agency services, including property sales, lettings, and related services.",
            ]}
          />

          <GuideEntry
            title="2. Terms and Conditions"
            points={[
              "Use the Website only for lawful purposes.",
              "Do not introduce viruses, malicious code, or attempt to gain unauthorised access.",
              "Information on the Website is for general guidance only and does not constitute legal or professional advice.",
            ]}
          />

          <GuideEntry
            title="2.2 Contact Form & Personal Information"
            points={[
              "We may collect: Name, Phone Number, Email Address, Postal Address, Message.",
              "By submitting, you warrant the info is accurate, consent to us using it to respond, and acknowledge data will be processed as explained.",
            ]}
          />

          <GuideEntry
            title="2.3 Intellectual Property"
            points={[
              "All content (text, graphics, images, logos) is owned by or licensed to us.",
              "You may not copy, distribute, or reproduce it without permission.",
            ]}
          />

          <GuideEntry
            title="2.4 Liability"
            points={[
              "We aim to keep content accurate but make no warranties.",
              "We are not liable for any loss, damage, or expense from Website use.",
            ]}
          />

          <GuideEntry
            title="2.5 External Links"
            points={[
              "We may link to third-party websites.",
              "These are for convenience only; we accept no responsibility for their content.",
            ]}
          />

          <GuideEntry
            title="2.6 Governing Law"
            points={[
              "These Terms are governed by the laws of England and Wales.",
              "Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.",
            ]}
          />

          <GuideEntry
            title="3. Privacy Policy"
            points={[
              "We collect contact details you provide (name, phone, email, address, message).",
              "We collect technical data such as IP address, browser type, and browsing behaviour.",
              "We use your data to respond to enquiries, provide services, improve Website, and comply with law.",
              "We will not use your info for marketing without explicit consent.",
            ]}
          />

          <GuideEntry
            title="3.3 Legal Basis"
            points={[
              "Consent – when you submit an enquiry.",
              "Contract – if we provide services.",
              "Legal Obligation – to comply with law.",
              "Legitimate Interests – business operations & Website security.",
            ]}
          />

          <GuideEntry
            title="3.4 Data Sharing"
            points={[
              "We do not sell your data.",
              "We may share with service providers or legal authorities where required.",
            ]}
          />

          <GuideEntry
            title="3.5 Retention"
            points={[
              "We keep your data only as long as necessary or required by law.",
            ]}
          />

          <GuideEntry
            title="3.6 Your Rights"
            points={[
              "Access your data.",
              "Correct inaccuracies.",
              "Request deletion (right to be forgotten).",
              "Restrict or object to processing.",
              "Request data portability.",
              "Withdraw consent.",
            ]}
          />

          <GuideEntry
            title="4. Cookies Policy"
            points={[
              "Cookies are small text files stored on your device.",
              "Types we use: Essential, Analytical/Performance, Functionality, Advertising.",
              "We may use Google Analytics which sets its own cookies.",
              "You can block/delete cookies in your browser, but features may not work.",
              "By accepting cookies on first visit, you consent to their use.",
            ]}
          />

          <GuideEntry
            title="5. Contact Us"
            points={[
              "Property Nirvana Estate Agency",
              "Email: [Insert Email]",
              "Phone: [Insert Phone Number]",
              "Address: [Insert Registered Office Address]",
            ]}
          />

          <GuideEntry
            title="6. Complaints"
            points={[
              "If unhappy with how we handle your data, complain to the Information Commissioner’s Office (ICO) at www.ico.org.uk.",
            ]}
          />
        </div>

        <FootNote className="mt-14">
          <FootNote.Title>Questions or Concerns?</FootNote.Title>
          <FootNote.Content>
            If you need further clarification about our Terms, Privacy, or
            Cookies Policy, feel free to contact us directly. Our team is here
            to help.
          </FootNote.Content>
        </FootNote>
      </MaxWidthWrapper>
    </div>
  );
}

import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";

export default function BrandStory() {
  return (
    <div>
      <HeadingFrame heading="Our Brand" />
      <MaxWidthWrapper className="px-4">
        {/* Vision */}
        <FootNote className="mt-10">
          <FootNote.Title>Our Vision</FootNote.Title>
          <FootNote.Content>
            Here at Property Nirvana, our vision is to transform the way people
            experience property. Too often, buying, selling or letting is seen
            as stressful, complicated and transactional. We believe it should be
            the complete opposite — a journey where clarity, confidence and care
            guide every step. By combining industry expertise with a deeply
            personal approach, we strive to create a service that not only
            achieves results but also builds trust, reassurance and lasting
            relationships. For us, property isn’t just about bricks and mortar —
            it’s about people, opportunities and creating a sense of security
            and pride for every client we serve.
          </FootNote.Content>
        </FootNote>

        {/* Goal */}
        <FootNote className="mt-14">
          <FootNote.Title>Our Goal</FootNote.Title>
          <FootNote.Content>
            Our goal is to set the benchmark for what exceptional property
            management truly looks like. We aim to protect and grow our clients’
            investments with the highest level of professionalism, while
            delivering a service rooted in honesty, attention to detail and
            genuine care. Whether it’s guiding a first-time landlord, supporting
            a seasoned investor, or helping someone find their next home, we are
            committed to making the process as simple and rewarding as possible.
            Every valuation, negotiation and handover is handled with dedication
            and precision, because we know that even the smallest details make
            the biggest difference. Ultimately, our goal is to create peace of
            mind and lasting value for every client who entrusts us with their
            property.
          </FootNote.Content>
        </FootNote>

        {/* Founder’s Story */}
        <div className="grid mt-14 gap-8">
          <GuideEntry title="Our Founder’s Story">
            After working in lettings for a number of years, I saw first-hand
            the horrors of how some agencies treated people’s investments and
            livelihoods — including my own parents’. I witnessed rents being
            delayed or manipulated, deposits not being taken or protected,
            landlords left in the dark, and tenants ignored when urgent repairs
            were needed. Some properties fell into disrepair, with safety checks
            skipped and compliance overlooked — all while clients were kept out
            of the loop. Seeing my parents being mistreated made it personal.
            That experience was the turning point — I knew there had to be a
            better way built on trust, transparency and genuine care. That’s why
            I started Property Nirvana: to create a service where landlords,
            tenants, buyers and sellers could feel confident their property and
            investment were in safe hands. Every decision we make comes back to
            that mission. For me, property isn’t just business — it’s people’s
            lives, and it deserves to be handled personally and made the
            priority.
            <br />
          </GuideEntry>
        </div>

        <FootNote className="mt-14">
          <FootNote.Title>Our Promise</FootNote.Title>
          <FootNote.Content>
            At Property Nirvana, we’re more than an estate agency. We’re your
            trusted partner in one of life’s most important journeys — helping
            you buy, sell, or let with confidence, clarity and care.
          </FootNote.Content>
        </FootNote>
      </MaxWidthWrapper>
    </div>
  );
}

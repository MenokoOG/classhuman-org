function H2({ children }) {
  return (
    <h2 className="mt-16 text-2xl font-extrabold tracking-tight">{children}</h2>
  );
}

function P({ children }) {
  return <p className="mt-6 leading-relaxed text-on-surface/90">{children}</p>;
}

export default function Story() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage">OUR STORY</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">In memory of Tonya.</h1>
      <p className="mt-2 text-lg text-muted">LAHA: Love All Humans Always</p>

      <figure className="mt-12">
        <img
          src="/images/tonya.jpg"
          alt="Tonya"
          className="mx-auto w-full max-w-sm rounded-lg"
        />
        <figcaption className="mt-3 text-center font-mono text-xs text-muted">
          Tonya — our foundation.
        </figcaption>
      </figure>

      <div className="mt-16 text-lg">
        <P>
          There's a version of this story that starts with a business plan. This isn't
          that story. This one starts at a rest stop in Missouri, with our last few
          dollars, a stuck vending machine, and a stranger walking out with two
          sandwiches.
        </P>

        <H2>The Year Everything Fell</H2>
        <P>
          In the span of a few months, I lost the two people who anchored my life. My
          mentor, my father, passed in April. My wife and best friend, Tonya, passed from
          cancer in July — July 27th, 2021. Two people, two months apart, and the ground
          just wasn't there anymore.
        </P>
        <P>
          Tonya was our foundation. Not in the abstract way people say that about someone
          they loved — she was the actual load-bearing wall. Years earlier, she'd insisted
          our daughter Nicale learn to defend herself, and made sure of it. Not long
          before Tonya passed, she got to watch Nicale test for her second-degree black
          belt in Taekwondo. That memory — Tonya watching her daughter earn it, right
          before the end — is one we still hold onto on the hardest nights.
        </P>
        <P>
          When Tonya was gone, Nicale and I didn't have a home to grieve in. We had a car,
          then a hotel room when we could afford one, then no room at all.
        </P>

        <H2>The Rest Stop</H2>
        <P>
          We were deep in it — the kind of grief that makes you angry at the universe for
          still turning. We pulled into a rest stop with almost nothing left. Went in for
          a sandwich. The vending machine took our money and gave us nothing back.
        </P>
        <P>Then a man walked past us with two sandwiches from the same machine.</P>
        <P>
          It sounds small. It wasn't. It felt like proof that the universe had already
          taken everything and was still finding ways to take a little more. We sat with
          that for a minute — really sat with it — and made a decision instead of a
          complaint: if we couldn't go any further down, we'd build something instead.
        </P>
        <P>
          That's the night LAHA was born. <strong>Love All Humans Always.</strong>
        </P>
        <P>
          We won't pretend that's easy. Some days, grief makes you want the opposite — to
          hate all humans always. We say that too, out loud, to each other, because it's
          honest. But we chose LAHA anyway, on the worst day we had, and we've kept
          choosing it since.
        </P>

        <H2>Built in a Hotel Room</H2>
        <P>
          classHuman AI didn't start in an office. It started in 2023, in a hotel room,
          while we were homeless. I'd taken a Python course on the road — finished it in
          2022 — and that's the thread we pulled. Within a single weekend, we took some
          code, added color and design to it, and put it on products through a
          print-on-demand Shopify store.
        </P>
        <P>It sold. Enough to buy a $23 notebook. That notebook fed us.</P>
        <P>
          That's the whole origin story of classHuman: not funding, not a pitch deck — a
          father and daughter with nothing, still grieving, still building, because
          building was the only thing left that felt like moving forward instead of
          drowning.
        </P>

        <H2>The Road Continued</H2>
        <P>
          We stayed homeless, couch to couch, through some very hard stretches — including
          a period from September 2023 to May 2024 that tested everything we had left. In
          July 2024, we finally got a place of our own again. Not fully recovered. Just
          standing.
        </P>

        <H2>Two Builders, One Discipline</H2>
        <P>
          I'd started learning Python in 2021, right as everything else was falling apart.
          By the time we were on the road in 2022, AI wasn't a new interest — it was
          already a tool we knew how to use, and it helped carry us through. That
          familiarity is why we went deeper instead of walking away: certifications in AI
          and data analytics, and now working toward the IBM AI Engineer track, because
          understanding the machinery matters if you're going to build something people
          can trust.
        </P>
        <P>
          Nicale went deeper in her own direction. She's been studying and authoring her
          own governance framework — the rules, the ethics, the guardrails a system needs
          before it's handed real authority over real decisions. That's not a side
          project. It's the backbone of how classHuman thinks about agentic AI: powerful
          systems need governance built in from day one, not bolted on after something
          goes wrong.
        </P>
        <P>
          Between the two of us, classHuman draws from places that don't usually sit in
          the same room. My military background taught me operational discipline under
          uncertainty — how to make a call when the data is incomplete and the stakes are
          real. Law enforcement taught me how process and evidence protect people. Years
          of writing software taught me how systems actually behave versus how they're
          supposed to. And my father — a COBOL programmer going back to the 1960s — taught
          me, without ever using the phrase, that data integrity is the whole game. If you
          can't trust the source, nothing built on top of it is trustworthy either.
        </P>
        <P>
          That's what's going into classHuman: discipline, governance, and a source of
          truth you can actually stand on.
        </P>

        <H2>Why classHuman, Why Now</H2>
        <P>
          classHuman AI exists because two people who lost almost everything still
          believed building mattered more than giving up. It's not a story we're using to
          sell something. It's the reason the thing exists at all.
        </P>
        <P>
          We believe in human-AI collaboration where humans keep the final authority —
          because we know, firsthand, what it costs to lose the people who anchor you, and
          we know that no system, no product, no amount of code replaces that. It supports
          it. It should serve people, not the other way around.
        </P>
        <P>
          <strong>classHuman AI — driven by LAHA (Love All Humans Always).</strong>
          <br />
          Built by my team. In memory of Tonya. Still standing.
        </P>
      </div>
    </main>
  );
}

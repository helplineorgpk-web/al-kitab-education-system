import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  adoptedSchools,
  allSchools,
  defaultAnnualEvents,
  defaultTopResults,
  ownSchools,
} from "@/data/schools";

interface SchoolPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allSchools.map((school) => ({ slug: school.slug }));
}

export default async function SchoolDetailPage({ params }: SchoolPageProps) {
  const { slug } = await params;
  const school = allSchools.find((item) => item.slug === slug);

  if (!school) {
    notFound();
  }

  const placeholderCount = Math.max(6, school.imageSlots);
  const placeholders = Array.from({ length: placeholderCount }, (_, index) => index + 1);
  const isOwnSchool = school.category === "Own School";

  const supportModel = isOwnSchool
    ? "Directly operated by Al-Kitab Education System under Helpline Welfare Trust with a mission of accessible, dignified, and high-quality education for every child."
    : "Adopted and supported by Helpline Welfare Trust through public-school strengthening, classroom revival, operational support, and community mobilization.";

  const focusAreas = isOwnSchool
    ? [
        {
          title: "Free Quality Education",
          desc: "Underprivileged children get access to structured learning without financial pressure on their families.",
        },
        {
          title: "Character & Values",
          desc: "Strong emphasis on moral development, discipline, respect, and responsibility alongside academics.",
        },
        {
          title: "Safe Learning Spaces",
          desc: "Classrooms, sanitation, and student safety are prioritized to ensure a positive environment.",
        },
        {
          title: "Long-Term Growth",
          desc: "Students are supported through grade progression, not just enrollment - aiming for real life impact.",
        },
        {
          title: "Trained Teachers",
          desc: "Qualified educators deliver lessons with warmth, structure, and consistent learning standards.",
        },
        {
          title: "Family & Community",
          desc: "Parents and communities are kept engaged so education becomes a shared responsibility.",
        },
      ]
    : [
        {
          title: "School Revival",
          desc: "Reactivating struggling or closed government schools so children can return to learning.",
        },
        {
          title: "Teacher Continuity",
          desc: "Stable staffing support ensures regular classes and uninterrupted academic delivery.",
        },
        {
          title: "Learning Materials",
          desc: "Books, stationery, and classroom resources are provided to support every student.",
        },
        {
          title: "Infrastructure Support",
          desc: "Repairs, sanitation, and classroom usability are improved for safe daily attendance.",
        },
        {
          title: "Re-Enrollment Drives",
          desc: "Out-of-school children are brought back through community engagement and trust building.",
        },
        {
          title: "Quality Improvement",
          desc: "Monitoring, mentorship, and performance focus help raise academic outcomes over time.",
        },
      ];

  const fallbackStats = isOwnSchool
    ? [
        { value: "Free", label: "Education Access" },
        { value: "Active", label: "Daily Operations" },
        { value: "Trained", label: "Teaching Staff" },
        { value: "Helpline", label: "Welfare Trust" },
      ]
    : [
        { value: "Adopted", label: "By Helpline" },
        { value: "Active", label: "Operations" },
        { value: "Free", label: "Education Support" },
        { value: "Public", label: "School Revival" },
      ];
  const impactStats = school.stats && school.stats.length > 0 ? school.stats : fallbackStats;

  const programs = isOwnSchool
    ? [
        "Daily structured classes with trained teachers",
        "Free uniforms, textbooks, and stationery support",
        "Character building and moral development sessions",
        "Healthy learning environment and student care",
        "Parent engagement and community awareness",
        "Special academic support for struggling students",
      ]
    : [
        "Restored classroom operations and teacher coverage",
        "Provision of essential learning materials",
        "Improved sanitation and basic facility upgrades",
        "Re-enrollment drives in surrounding communities",
        "Attendance monitoring and student retention focus",
        "Foundational literacy and numeracy emphasis",
      ];

  const journey = [
    {
      title: school.historyTitle ?? "Beginning of the Journey",
      text:
        school.historyText ??
        "The school was established to address the educational gap in its community and create access where none existed before.",
      tag: "Background",
    },
    {
      title: school.upgradeTitle ?? "Current Work and Strengthening",
      text:
        school.upgradeText ??
        "Ongoing support ensures that classrooms remain active, teachers stay supported, and students continue learning with confidence.",
      tag: "Current",
    },
    {
      title: school.futureTitle ?? "Future Direction",
      text:
        school.futureText ??
        "The future plan is to expand educational access, improve learning outcomes, and create lasting change in the community.",
      tag: "Future",
    },
  ];

  const relatedPool = isOwnSchool ? ownSchools : adoptedSchools;
  const relatedSchools = relatedPool.filter((item) => item.slug !== school.slug).slice(0, 3);

  const topResults = school.topResults && school.topResults.length > 0 ? school.topResults : defaultTopResults;
  const annualEvents =
    school.annualEvents && school.annualEvents.length > 0 ? school.annualEvents : defaultAnnualEvents;
  const tenthResults = topResults.filter((result) => result.className === "10th");
  const ninthResults = topResults.filter((result) => result.className === "9th");

  return (
    <div className="bg-white pt-2 md:pt-4">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 px-4 pt-16 pb-32 text-white md:pt-20 md:pb-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-300 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-teal-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-teal-100">
            <Link href="/education" className="hover:text-white">
              Education
            </Link>
            <span>/</span>
            <span>{school.category}</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{school.name}</h1>
          <p className="mt-3 max-w-3xl text-lg text-teal-100 md:text-xl">{school.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              {school.category}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              {school.location}
            </span>
            {school.level && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                {school.level}
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/90 px-4 py-2 text-sm font-semibold text-teal-900">
              Helpline Welfare Trust
            </span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="-mt-12 relative z-10 px-4 md:-mt-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-2xl">
          <div className="grid divide-y divide-teal-100 md:grid-cols-4 md:divide-x md:divide-y-0">
            {impactStats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <div className="text-3xl font-bold text-teal-700 md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              About this School
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">School Overview</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">{school.description}</p>
            <p className="mt-4 leading-relaxed text-gray-600">{supportModel}</p>
            <div className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
              <p className="text-gray-700 italic">
                Every child deserves dignified access to education. Through Al-Kitab Education System and Helpline Welfare Trust,
                this school continues to be a place of hope, learning, and lasting change for {school.location}.
              </p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <h3 className="font-semibold text-teal-900">School Information</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
                  <span className="text-gray-500">Network</span>
                  <span className="font-medium text-teal-900">Al-Kitab Education System</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
                  <span className="text-gray-500">Trust</span>
                  <span className="font-medium text-teal-900">Helpline Welfare Trust</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium text-teal-900">{school.category}</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-teal-100 pb-2">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium text-teal-900">{school.location}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium text-teal-900">Active &amp; Operational</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-6 text-white">
              <h3 className="font-semibold">Support This School</h3>
              <p className="mt-3 text-sm text-teal-100">
                Your contribution helps sustain free education, books, teachers, and safe classrooms for every child here.
              </p>
              <Link
                href="/donate"
                className="mt-4 inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-teal-900 hover:bg-amber-300"
              >
                Donate Now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Core Focus
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">What This School Stands For</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Every school in Al-Kitab Education System is built around clear values - quality, dignity, access, and hope.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((focus, idx) => (
              <div
                key={focus.title}
                className="group rounded-2xl border border-teal-100 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-teal-900">{focus.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                Photo Gallery
              </span>
              <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">A Glimpse Inside</h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Real images of {school.name} will appear here. These placeholders are ready for your upload.
              </p>
            </div>
            <div className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-medium text-teal-700">
              {placeholderCount} image slots ready
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-2xl border border-teal-100 bg-white transition hover:shadow-lg"
              >
                <ImagePlaceholder
                  label={`${school.name} - Image ${item}`}
                  aspectRatio="video"
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-500">Image {item}</p>
                  <p className="mt-1 text-sm font-semibold text-teal-900">{school.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="bg-gradient-to-b from-white to-teal-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">From Vision to Reality</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              The story of {school.name} - where it started, where it stands today, and where it is going.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {journey.map((item, idx) => (
              <div
                key={item.tag}
                className="relative rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-900">
                  Step {idx + 1} - {item.tag}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-teal-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Programs &amp; Activities
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">What Happens at This School</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              {isOwnSchool
                ? "As an Al-Kitab Education System campus, this school runs full daily operations centered on quality, dignity, and consistent learning."
                : "As an adopted school under Helpline Welfare Trust, this campus runs structured operations focused on stability, learning recovery, and student support."}
            </p>
            <ul className="mt-6 space-y-3">
              {programs.map((program) => (
                <li key={program} className="flex items-start gap-3 rounded-xl bg-teal-50 p-4">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                  <span className="text-sm leading-relaxed text-gray-700">{program}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold">Why This School Matters</h3>
            <p className="mt-4 leading-relaxed text-teal-100">
              {school.name} is not just a building - it is a promise to the children of {school.location} that their
              future will not be defined by their financial background. Through Al-Kitab Education System under
              Helpline Welfare Trust, every child gets the opportunity to learn, grow, and rise.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Free</p>
                <p className="text-xs uppercase tracking-wide text-teal-100">Education Access</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Daily</p>
                <p className="text-xs uppercase tracking-wide text-teal-100">Active Learning</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Trust</p>
                <p className="text-xs uppercase tracking-wide text-teal-100">Helpline Welfare</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">Hope</p>
                <p className="text-xs uppercase tracking-wide text-teal-100">For Every Child</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / IMPACT */}
      <section className="bg-teal-900 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-6xl font-serif text-amber-300">&ldquo;</div>
          <p className="mt-2 text-2xl font-light leading-relaxed md:text-3xl">
            Education is the most powerful gift we can give to a child. At {school.name}, we are turning that gift into
            a daily reality.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-teal-200">
            Al-Kitab Education System - Helpline Welfare Trust
          </p>
        </div>
      </section>

      {/* HIGHEST RESULTS - 9TH & 10TH */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Academic Excellence
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
              Highest Results - 9th &amp; 10th Standard
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Celebrating the brightest students of {school.name} who set new academic benchmarks for their peers.
            </p>
          </div>

          {/* 10th Standard */}
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-teal-900">Class 10th - Top Performers</h3>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                Matric Toppers
              </span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {tenthResults.map((result, idx) => (
                <div
                  key={`10-${idx}`}
                  className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      label={`${result.name} photo placeholder`}
                      aspectRatio="square"
                      className="w-full"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-teal-900 shadow">
                      {result.position ?? `Top ${idx + 1}`}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                      Class {result.className} {result.year ? `- ${result.year}` : ""}
                    </p>
                    <h4 className="mt-2 text-lg font-bold text-teal-900">{result.name}</h4>
                    <div className="mt-4 flex items-end justify-between rounded-xl bg-teal-50 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Marks Obtained</p>
                        <p className="text-2xl font-bold text-teal-700">{result.marks}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wide text-gray-500">Out of</p>
                        <p className="text-lg font-semibold text-gray-700">{result.totalMarks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9th Standard */}
          <div className="mt-14">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-teal-900">Class 9th - Top Performers</h3>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                Rising Stars
              </span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {ninthResults.map((result, idx) => (
                <div
                  key={`9-${idx}`}
                  className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      label={`${result.name} photo placeholder`}
                      aspectRatio="square"
                      className="w-full"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-teal-900 shadow">
                      {result.position ?? `Top ${idx + 1}`}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                      Class {result.className} {result.year ? `- ${result.year}` : ""}
                    </p>
                    <h4 className="mt-2 text-lg font-bold text-teal-900">{result.name}</h4>
                    <div className="mt-4 flex items-end justify-between rounded-xl bg-teal-50 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Marks Obtained</p>
                        <p className="text-2xl font-bold text-teal-700">{result.marks}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wide text-gray-500">Out of</p>
                        <p className="text-lg font-semibold text-gray-700">{result.totalMarks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-xs italic text-gray-500">
            Replace student names, marks, and photos with your real toppers data anytime.
          </p>
        </div>
      </section>

      {/* ANNUAL EVENTS & ACTIVITIES */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              School Life
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
              Annual Functions &amp; Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              At {school.name}, learning goes far beyond textbooks. Our students enjoy a full year of meaningful and
              memorable activities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {annualEvents.map((event, idx) => (
              <div
                key={event.name}
                className="group overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <ImagePlaceholder
                    label={`${event.name} - image placeholder`}
                    aspectRatio="video"
                    className="w-full"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white shadow">
                    {event.tag ?? `Event ${idx + 1}`}
                  </div>
                  {event.date && (
                    <div className="absolute top-3 right-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-teal-900 shadow">
                      {event.date}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-teal-900 group-hover:text-teal-700">{event.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50 to-amber-50 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-teal-900">Building Memories That Last a Lifetime</h3>
                <p className="mt-3 text-gray-700">
                  From sports galas and PTMs to fun-themed days like Watermelon Day and Mango Day, every event at{" "}
                  {school.name} brings students, teachers, and parents closer - creating a strong, supportive school
                  family.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-teal-700">{annualEvents.length}+</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Yearly Events</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-teal-700">100%</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Student Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SCHOOLS */}
      {relatedSchools.length > 0 && (
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  More Schools
                </span>
                <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
                  Other {isOwnSchool ? "Own Schools" : "Adopted Schools"} in Our Network
                </h2>
              </div>
              <Link
                href="/education"
                className="rounded-full border-2 border-teal-600 px-5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
              >
                View All Schools
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedSchools.map((item) => (
                <Link
                  key={item.slug}
                  href={`/education/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-teal-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <ImagePlaceholder
                    label={`${item.name} preview`}
                    aspectRatio="video"
                    className="w-full"
                  />
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-semibold text-teal-900 group-hover:text-teal-700">{item.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{item.location}</p>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{item.shortDescription}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                      View School →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-amber-400 to-amber-300 p-10 text-teal-900 shadow-xl md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Be Part of {school.name}&apos;s Story</h2>
              <p className="mt-4 leading-relaxed">
                Every donation, every volunteer hour, and every shared message helps us keep the doors of this school
                open for children who need it most. Stand with Helpline Welfare Trust and Al-Kitab Education System.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/donate"
                className="rounded-full bg-teal-900 px-6 py-3 font-semibold text-white hover:bg-teal-800"
              >
                Donate to This School
              </Link>
              <Link
                href="/education"
                className="rounded-full border-2 border-teal-900 px-6 py-3 font-semibold text-teal-900 hover:bg-teal-900 hover:text-white"
              >
                See All Schools
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-teal-900 hover:bg-teal-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

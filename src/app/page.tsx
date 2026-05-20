"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import EventCoverImage from "@/components/EventCoverImage";
import SchoolCoverImage from "@/components/SchoolCoverImage";
import { adoptedSchools, homepageAnnualEvents, ownSchools, schoolStats } from "@/data/schools";

const featuredOwn = ownSchools.slice(0, 3);
const featuredAdopted = adoptedSchools.slice(0, 3);

const heroHighlights = [
  { value: `${schoolStats.own}`, label: "Own Schools" },
  { value: `${schoolStats.adopted}`, label: "Adopted Schools" },
  { value: `${schoolStats.total}`, label: "Total Network" },
  { value: "Free", label: "Education Access" },
];

const focusPillars = [
  {
    title: "Free Quality Education",
    description: "Access to structured, dignified education for every underprivileged child without financial pressure.",
  },
  {
    title: "Character & Moral Building",
    description: "Strong values, discipline, and respect built alongside academic learning at every campus.",
  },
  {
    title: "Safe Learning Spaces",
    description: "Student safety, sanitation, and clean classrooms prioritized as the foundation of learning.",
  },
  {
    title: "Trained Teachers",
    description: "Committed educators delivering consistent quality teaching with care and support.",
  },
  {
    title: "Family & Community",
    description: "Parents and communities engaged so education becomes a shared, lasting commitment.",
  },
  {
    title: "Long-Term Growth",
    description: "Children supported from primary through higher secondary - real, life-changing progression.",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Identify the Need",
    text: "We find communities where education is missing, neglected, or has stopped completely.",
  },
  {
    step: "02",
    title: "Build or Adopt",
    text: "We either build new Al-Kitab campuses or adopt government schools and revive them.",
  },
  {
    step: "03",
    title: "Run with Quality",
    text: "Trained teachers, learning materials, infrastructure support, and consistent operations.",
  },
  {
    step: "04",
    title: "Sustain & Grow",
    text: "Continuous improvement, community engagement, and long-term support for every student.",
  },
];

const testimonials = [
  {
    quote: "Al-Kitab gave my children a real chance. Today they study, dream, and believe in their future.",
    name: "A Parent",
    location: "Rana Town, Lahore",
  },
  {
    quote: "The school came back to life. Our children are learning again, and our community has hope again.",
    name: "Community Member",
    location: "Tando Allah Yar",
  },
  {
    quote: "From a closed building to a real classroom - this is what dedication and trust can do.",
    name: "Local Teacher",
    location: "Tharparkar",
  },
];

const faqs = [
  {
    q: "What is Al-Kitab Education System?",
    a: "Al-Kitab Education System is the educational arm of Helpline Welfare Trust, dedicated to providing free, quality education to underprivileged children in Pakistan.",
  },
  {
    q: "How are schools adopted?",
    a: "We partner with government schools that have weak infrastructure, low attendance, or have been closed. Through structured support, we revive operations and bring children back to classrooms.",
  },
  {
    q: "Are students charged any fee?",
    a: "Most students study completely free. In a few campuses, families who can afford it pay a minimal contribution that supports basic operations.",
  },
  {
    q: "How can I support a school?",
    a: "You can donate, sponsor a child or classroom, contribute to construction projects, or partner with us. Visit the contact page to get in touch.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroBackgroundSlider />
          <div
            className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/25 via-transparent to-black/35"
            aria-hidden
          />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-sm ring-1 ring-white/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
          >
            A project of Helpline Welfare Trust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_8px_32px_rgba(0,0,0,0.65)]"
          >
            Education for Every Child
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/95 sm:text-xl [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_4px_20px_rgba(0,0,0,0.55)]"
          >
            Al-Kitab Education System is reviving education in underprivileged communities of Pakistan with{" "}
            {schoolStats.own} own schools and {schoolStats.adopted} adopted schools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/education"
              className="rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-teal-900 shadow-lg ring-1 ring-black/10 hover:bg-amber-300 transition-colors"
            >
              View Education Projects
            </Link>
            <Link
              href="/education#schools"
              className="rounded-full border-2 border-white bg-white/15 px-8 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-sm hover:bg-white/25 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.75)]"
            >
              Our Schools
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-amber-300 bg-white/15 px-8 py-3 text-base font-semibold text-amber-200 shadow-lg backdrop-blur-sm hover:bg-white/25 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]"
            >
              Support Education
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/25 bg-white/15 px-4 py-5 text-center shadow-lg backdrop-blur-md"
              >
                <div className="text-2xl font-bold text-amber-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
                  {item.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
              Al-Kitab Education System under Helpline Welfare Trust
            </h2>
            <p className="mt-5 leading-relaxed text-gray-700">
              Helpline Welfare Trust is working to revive education in extremely poor and underserved communities of
              Pakistan. We run Al-Kitab Education System and have adopted government schools where education was
              neglected. Today, our schools are alive again - with students, teachers, and hope.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              From Lahore to Sindh, our network of {schoolStats.total} schools is dedicated to giving every child the
              opportunity to learn, grow, and rise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/education"
                className="rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Explore Schools
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-teal-600 px-6 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/img/causes/cause17.jpg"
                alt="Children at an Al-Kitab school"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-teal-100 bg-white p-5 shadow-xl md:block">
              <p className="text-3xl font-bold text-teal-700">{schoolStats.total}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">Schools in Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS PILLARS */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">Our Core Pillars</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Every school in our network is built around six clear principles - quality, dignity, and lasting impact.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.05, 0.25) }}
                className="rounded-2xl border border-teal-100 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-teal-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / HOW IT WORKS */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">Our 4-Step Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From identifying the need to sustaining a thriving school - this is how we bring education back to life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-teal-100 bg-gradient-to-b from-white to-teal-50 p-6"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-teal-900">
                  Step {step.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-teal-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED OWN SCHOOLS */}
      <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                Our Own Schools
              </span>
              <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
                Al-Kitab Education System Campuses
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Operated directly by Al-Kitab Education System - free, quality education for every child.
              </p>
            </div>
            <Link
              href="/education"
              className="rounded-full border-2 border-teal-600 px-5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
            >
              View All {schoolStats.own} Own Schools
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredOwn.map((school) => (
              <Link
                key={school.slug}
                href={`/education/${school.slug}`}
                className="group block overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <SchoolCoverImage school={school} placeholderLabel={`${school.name} preview`} />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                    {school.category}
                  </span>
                  <h3 className="mt-3 font-semibold text-teal-900 group-hover:text-teal-700">{school.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{school.location}</p>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">{school.shortDescription}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                    View School →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ADOPTED SCHOOLS */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                Adopted Schools
              </span>
              <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">
                Bringing Government Schools Back to Life
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Government schools strengthened and supported by Helpline Welfare Trust - children returning to
                classrooms.
              </p>
            </div>
            <Link
              href="/education"
              className="rounded-full border-2 border-teal-600 px-5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
            >
              View All {schoolStats.adopted} Adopted Schools
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredAdopted.map((school) => (
              <Link
                key={school.slug}
                href={`/education/${school.slug}`}
                className="group block overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <SchoolCoverImage school={school} placeholderLabel={`${school.name} preview`} />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                    {school.category}
                  </span>
                  <h3 className="mt-3 font-semibold text-teal-900 group-hover:text-teal-700">{school.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{school.location}</p>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">{school.shortDescription}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                    View School →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT BAR */}
      <section className="bg-teal-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold">Our Education Impact</h2>
          <p className="mx-auto mt-3 max-w-2xl text-teal-100">
            Numbers that show the scale of our shared mission - powered by donors, volunteers, and communities.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-amber-300">{schoolStats.total}+</div>
              <div className="mt-1 text-teal-100">Schools in Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300">{schoolStats.own}</div>
              <div className="mt-1 text-teal-100">Al-Kitab Own Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300">{schoolStats.adopted}</div>
              <div className="mt-1 text-teal-100">Adopted Govt Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300">5,000+</div>
              <div className="mt-1 text-teal-100">Lives Touched</div>
            </div>
          </div>
          <Link
            href="/education"
            className="mt-10 inline-block rounded-full border-2 border-white px-6 py-2 font-semibold hover:bg-white/10 transition-colors"
          >
            See All Schools
          </Link>
        </div>
      </section>

      {/* ANNUAL EVENTS PREVIEW */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              School Life
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">A Year Full of Memories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our schools host vibrant annual events that go beyond textbooks - building friendship, joy, and
              confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homepageAnnualEvents.map((event) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <EventCoverImage name={event.name} image={event.image} />
                  <div className="absolute top-3 left-3 rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white shadow">
                    {event.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-teal-900">{event.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Voices of Hope
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">What Our Communities Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div
                key={item.name + item.location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
              >
                <div className="text-4xl font-serif text-amber-400">&ldquo;</div>
                <p className="mt-2 leading-relaxed text-gray-700">{item.quote}</p>
                <div className="mt-6 border-t border-teal-100 pt-4">
                  <p className="font-semibold text-teal-900">{item.name}</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Get Involved
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">Ways You Can Help</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Together, we can keep classrooms open and futures alive. Choose how you would like to contribute.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-white shadow-md">
              <h3 className="text-xl font-bold">Donate</h3>
              <p className="mt-3 text-teal-100">
                Support free education, books, uniforms, teacher salaries, and safe school facilities.
              </p>
              <Link
                href="/donate"
                className="mt-6 inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-teal-900 hover:bg-amber-300"
              >
                Donate Now
              </Link>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-teal-900">Sponsor a Child</h3>
              <p className="mt-3 text-gray-700">
                Cover the full cost of a child&apos;s education for a year. Your support directly transforms a life.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Start Sponsoring
              </Link>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-teal-900">Volunteer & Partner</h3>
              <p className="mt-3 text-gray-700">
                Join our mission as a teacher, mentor, or organizational partner working toward education for all.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full border-2 border-teal-600 px-5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Common Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold text-teal-900 md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-teal-900">{faq.q}</h3>
                    <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-700 group-open:bg-amber-100 group-open:text-amber-700">
                      {`+`}
                    </span>
                  </div>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 pt-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-amber-400 to-amber-300 p-10 text-teal-900 shadow-xl md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Be Part of the Mission</h2>
              <p className="mt-4 leading-relaxed">
                Every donation, every volunteer hour, and every shared message helps us keep school doors open for
                children who need it most.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/donate"
                className="rounded-full bg-teal-900 px-6 py-3 font-semibold text-white hover:bg-teal-800"
              >
                Donate Now
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

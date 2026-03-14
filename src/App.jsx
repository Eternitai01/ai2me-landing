import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Play, ArrowRight, Dot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D12]/60 backdrop-blur-xl border border-[#2A2A35]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-8">
        <div className="text-xl font-bold text-[#C9A84C]">AI2me</div>
        <div className="hidden md:flex gap-6 text-sm text-[#FAF8F5]">
          <a href="#features" className="hover:text-[#C9A84C] transition">Features</a>
          <a href="#protocol" className="hover:text-[#C9A84C] transition">How It Works</a>
          <a href="#pricing" className="hover:text-[#C9A84C] transition">Pricing</a>
        </div>
        <a
          href="https://cal.com/ai2me/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C9A84C] text-[#0D0D12] px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
        >
          Book Demo
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('[data-hero-animate]');
      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] bg-gradient-to-t from-[#0D0D12] via-[#0D0D12] to-[#1a1a2e] flex flex-col justify-end pb-20 pl-8 pr-8 md:pl-16 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-transparent"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-[#FAF8F5] leading-tight mb-6" data-hero-animate>
          <span className="font-['Inter'] font-bold">Hire an AI</span>
          <br />
          <span className="text-6xl md:text-8xl font-['Playfair_Display'] italic text-[#C9A84C]">
            C-Suite That Never Sleeps
          </span>
        </h1>

        <p className="text-lg text-[#FAF8F5] mb-8 max-w-xl" data-hero-animate>
          10 AI executives working 24/7/365. Zero downtime. Zero politics. 100% execution.
        </p>

        <div className="flex gap-4" data-hero-animate>
          <a
            href="https://cal.com/ai2me/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#0D0D12] px-8 py-4 rounded-full font-semibold hover:scale-103 transition-transform overflow-hidden group relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </span>
            <span className="absolute inset-0 bg-[#FAF8F5] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="https://ai2me.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] px-8 py-4 rounded-full font-semibold hover:bg-[#C9A84C]/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 px-8 md:px-16 bg-[#0D0D12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Inter'] font-bold text-[#FAF8F5] mb-16">
          <span className="text-[#C9A84C]">Your</span> AI Executive Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '24/7 AI Executives',
              desc: 'CEO, CFO, CMO, CTO, COO, and 6 more specialized roles.',
              icon: '⚙️',
            },
            {
              title: 'Instant Team Alignment',
              desc: 'All executives work together, eliminating silos and politics.',
              icon: '🎯',
            },
            {
              title: 'Enterprise-Grade Decisions',
              desc: 'Strategic clarity without hiring delays. Decisions in hours, not weeks.',
              icon: '💎',
            },
          ].map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#1a1a2e] border border-[#2A2A35] rounded-[2rem] p-8 backdrop-blur-sm hover:border-[#C9A84C] transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-[#FAF8F5] mb-4">{card.title}</h3>
              <p className="text-[#FAF8F5]/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-[#0D0D12] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1579546929662-711aa80904b7?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={textRef}>
        <p className="text-lg text-[#FAF8F5]/60 mb-8">Philosophy</p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#FAF8F5] mb-12">
          Most companies hire fractional execs.{' '}
          <span className="text-[#C9A84C] font-['Playfair_Display'] italic">
            We built a full C-suite that thinks together.
          </span>
        </h2>
        <p className="text-xl text-[#FAF8F5]/70 leading-relaxed">
          Every decision gets input from finance, technology, marketing, and operations. No silos. No politics. Just the best thinking your business deserves, available whenever you need it.
        </p>
      </div>
    </section>
  );
};

const Protocol = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'center center',
            pin: true,
            pinSpacing: false,
          },
        });

        if (i > 0) {
          gsap.set(cardsRef.current[i - 1], {
            scale: 0.9,
            opacity: 0.5,
            zIndex: -i,
          });
        }
      });

      ScrollTrigger.create({
        trigger: cardsRef.current[0]?.parentElement,
        onUpdate: (self) => {
          const progress = self.progress;
          cardsRef.current.forEach((card, i) => {
            const offset = i * 0.33;
            if (progress >= offset) {
              gsap.to(card, {
                scale: 1 - (progress - offset) * 0.1,
                opacity: 1 - (progress - offset) * 0.5,
                duration: 0,
              });
            }
          });
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" className="py-20 md:py-32 bg-[#0D0D12] relative">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FAF8F5] mb-12">How It Works</h2>

        <div className="space-y-8">
          {[
            {
              step: '01',
              title: 'You Ask',
              desc: 'Define your challenge. Any business decision.',
              svg: '📝',
            },
            {
              step: '02',
              title: 'Executives Deliberate',
              desc: 'All 10 AI executives analyze from their expertise.',
              svg: '💬',
            },
            {
              step: '03',
              title: 'You Execute',
              desc: 'Get clear strategy, backed by multiple perspectives.',
              svg: '✨',
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#1a1a2e] border border-[#2A2A35] rounded-[2rem] p-12 md:p-16"
            >
              <div className="flex items-start gap-8">
                <div className="text-6xl font-bold text-[#C9A84C] opacity-20">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#FAF8F5] mb-4">{item.title}</h3>
                  <p className="text-lg text-[#FAF8F5]/70">{item.desc}</p>
                </div>
                <div className="text-5xl">{item.svg}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-[#0D0D12]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-[#FAF8F5] mb-8">
          Ready to hire your AI C-Suite?
        </h2>
        <p className="text-xl text-[#FAF8F5]/70 mb-12">
          Book a demo and see 10 executives thinking together for your business.
        </p>
        <a
          href="https://cal.com/ai2me/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#0D0D12] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Book Your Demo
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-[#2A2A35] py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#C9A84C] mb-4">AI2me</h3>
            <p className="text-[#FAF8F5]/60 text-sm">Your AI C-Level Executive Team</p>
          </div>
          <div>
            <h4 className="text-[#FAF8F5] font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-[#FAF8F5]/60 text-sm">
              <li><a href="https://productivity.ai2me.com" className="hover:text-[#C9A84C]">Dashboard</a></li>
              <li><a href="https://productivity.ai2me.com/docs" className="hover:text-[#C9A84C]">Docs</a></li>
              <li><a href="https://cal.com/ai2me/30min" className="hover:text-[#C9A84C]">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FAF8F5] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#FAF8F5]/60 text-sm">
              <li><a href="#" className="hover:text-[#C9A84C]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#C9A84C]">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#2ECC71]">
              <Dot size={8} fill="currentColor" />
              <span className="text-sm font-mono">System Operational</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A35] pt-8 text-center text-[#FAF8F5]/40 text-sm">
          <p>© 2026 AI2me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    gsap.fromTo(
      element.querySelectorAll('[data-animate]'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send to Mailchimp via formspree or similar service
      // For now, using a simple fetch to your backend
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
      console.error('Subscription error:', err);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-12" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAF8F5]">
            Ready to Transform Your <span className="text-[#C9A84C]">Productivity?</span>
          </h2>
          <p className="text-lg text-[#FAF8F5]/70 max-w-2xl mx-auto">
            Join 500+ teams already using AI2me. Get early access to new features, exclusive webinars, and special founding member pricing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto" data-animate>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-[#0D0D12] border border-[#2A2A35] rounded-lg text-[#FAF8F5] placeholder-[#FAF8F5]/40 focus:outline-none focus:border-[#C9A84C] transition"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`px-8 py-4 rounded-lg font-semibold text-[#0D0D12] transition-all ${
                status === 'success'
                  ? 'bg-[#2ECC71] text-[#0D0D12]'
                  : status === 'error'
                  ? 'bg-red-500'
                  : 'bg-[#C9A84C] hover:scale-105'
              }`}
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Get Early Access'}
            </button>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://cal.com/ai2me/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] rounded-lg hover:bg-[#C9A84C]/10 transition font-medium"
            >
              <Play size={16} />
              Book Live Demo
            </a>
            <a
              href="https://productivity.ai2me.com/pricing"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A2A35] text-[#FAF8F5] rounded-lg hover:bg-[#3A3A45] transition font-medium"
            >
              View Pricing
              <ArrowRight size={16} />
            </a>
          </div>

          {status === 'error' && (
            <p className="text-center text-red-400 text-sm mt-3">Failed to subscribe. Please try again.</p>
          )}
        </form>

        <p className="text-center text-[#FAF8F5]/50 text-sm mt-8">
          No spam. Just productivity. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-[#0D0D12] text-[#FAF8F5] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <EmailCapture />
      <CTA />
      <Footer />
    </div>
  );
}

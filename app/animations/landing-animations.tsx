'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Shared toggleActions: play on enter, reverse on leave-back ──
const TOGGLE_ACTIONS = 'play none none reverse' as const;

type SectionQuery = (selector: string) => HTMLElement[];

type SplitSectionOptions = {
  start?: string;
  mediaFromX?: number;
  copyFromX?: number;
};

type CardSectionOptions = {
  start?: string;
  cardY?: number;
  cardStagger?: number;
};

const BASE_EASE = 'power3.out';

function withSection(
  sectionName: string,
  callback: (section: HTMLElement, query: SectionQuery) => void
) {
  const section = document.querySelector<HTMLElement>(
    `[data-section="${sectionName}"]`
  );

  if (!section) {
    return;
  }

  const query: SectionQuery = (selector: string) =>
    gsap.utils.toArray<HTMLElement>(selector, section);

  callback(section, query);
}

function appendFrom(
  timeline: gsap.core.Timeline,
  targets: HTMLElement[],
  vars: gsap.TweenVars,
  position?: number | string
) {
  if (targets.length === 0) {
    return;
  }

  timeline.from(targets, vars, position);
}

// ── Hover helpers (unchanged – these are event-driven, not scroll-driven) ──

function setupLiftHover(elements: HTMLElement[]) {
  const cleanups: Array<() => void> = [];

  elements.forEach((element) => {
    const onEnter = () => {
      gsap.to(element, {
        y: -8,
        scale: 1.015,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);
    element.addEventListener('focusin', onEnter);
    element.addEventListener('focusout', onLeave);

    cleanups.push(() => {
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mouseleave', onLeave);
      element.removeEventListener('focusin', onEnter);
      element.removeEventListener('focusout', onLeave);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setupTiltHover(elements: HTMLElement[]) {
  const cleanups: Array<() => void> = [];

  elements.forEach((element) => {
    let bounds: DOMRect | null = null;
    let frameId: number | null = null;

    const updateBounds = () => {
      bounds = element.getBoundingClientRect();
    };

    const resetFrame = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const onEnter = () => {
      updateBounds();
    };

    const onMove = (event: MouseEvent) => {
      if (!bounds) {
        updateBounds();
      }

      if (!bounds) {
        return;
      }

      const { clientX, clientY } = event;
      resetFrame();

      frameId = window.requestAnimationFrame(() => {
        if (!bounds) {
          return;
        }

        const relativeX = (clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (clientY - bounds.top) / bounds.height - 0.5;

        gsap.to(element, {
          rotationY: relativeX * 7,
          rotationX: -relativeY * 7,
          y: -6,
          scale: 1.01,
          transformPerspective: 900,
          transformOrigin: 'center',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    const onLeave = () => {
      resetFrame();
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mousemove', onMove);
    element.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', updateBounds);

    cleanups.push(() => {
      resetFrame();
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mousemove', onMove);
      element.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', updateBounds);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setupGlowHover(elements: HTMLElement[]) {
  const cleanups: Array<() => void> = [];

  elements.forEach((element) => {
    const onEnter = () => {
      gsap.to(element, {
        y: -3,
        scale: 1.01,
        duration: 0.28,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);
    element.addEventListener('focusin', onEnter);
    element.addEventListener('focusout', onLeave);

    cleanups.push(() => {
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mouseleave', onLeave);
      element.removeEventListener('focusin', onEnter);
      element.removeEventListener('focusout', onLeave);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

// ── Section timeline factories (now use toggleActions instead of once) ──

function createSplitSectionTimeline(
  sectionName: string,
  options?: SplitSectionOptions
) {
  const { start = 'top 80%', mediaFromX = -52, copyFromX = 52 } = options ?? {};

  withSection(sectionName, (section, query) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start,
        toggleActions: TOGGLE_ACTIONS,
      },
      defaults: { ease: BASE_EASE },
    });

    appendFrom(
      timeline,
      query('[data-animate="media"]'),
      { x: mediaFromX, autoAlpha: 0, duration: 0.8 },
      0
    );

    appendFrom(
      timeline,
      query('[data-animate="copy"]'),
      { x: copyFromX, autoAlpha: 0, duration: 0.8 },
      0.08
    );

    appendFrom(
      timeline,
      query('[data-animate="item"]'),
      { y: 24, autoAlpha: 0, duration: 0.55, stagger: 0.08 },
      0.16
    );

    appendFrom(
      timeline,
      query('[data-animate="card"]'),
      { y: 28, autoAlpha: 0, duration: 0.62, stagger: 0.1 },
      0.24
    );

    appendFrom(
      timeline,
      query('[data-animate="cta"]'),
      { y: 20, autoAlpha: 0, duration: 0.5 },
      '-=0.2'
    );
  });
}

function createCardSectionTimeline(
  sectionName: string,
  options?: CardSectionOptions
) {
  const { start = 'top 80%', cardY = 34, cardStagger = 0.1 } = options ?? {};

  withSection(sectionName, (section, query) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start,
        toggleActions: TOGGLE_ACTIONS,
      },
      defaults: { ease: BASE_EASE },
    });

    appendFrom(
      timeline,
      query('[data-animate="heading"]'),
      { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.08 },
      0
    );

    appendFrom(
      timeline,
      query('[data-animate="copy"]'),
      { y: 22, autoAlpha: 0, duration: 0.56, stagger: 0.08 },
      0.1
    );

    appendFrom(
      timeline,
      query('[data-animate="card"]'),
      {
        y: cardY,
        autoAlpha: 0,
        duration: 0.62,
        stagger: cardStagger,
      },
      0.2
    );

    appendFrom(
      timeline,
      query('[data-animate="cta"]'),
      { y: 20, autoAlpha: 0, duration: 0.5 },
      '-=0.18'
    );
  });
}

// ── Main component – useGSAP handles context + cleanup automatically ──

export default function LandingAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const supportsHover = window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches;
      const hoverCleanups: Array<() => void> = [];

      // ── Header ──
      const header = document.querySelector<HTMLElement>(
        '[data-section="header"]'
      );
      if (header) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: header,
              start: 'top 96%',
              toggleActions: TOGGLE_ACTIONS,
            },
            defaults: { ease: BASE_EASE },
          })
          .from(header, {
            y: -10,
            autoAlpha: 0,
            duration: 0.42,
          });
      }

      // ── Hero reveal ──
      withSection('hero', (section, query) => {
        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: TOGGLE_ACTIONS,
          },
          defaults: { ease: BASE_EASE },
        });

        introTimeline.from(section, { autoAlpha: 0, duration: 0.6 }, 0);

        appendFrom(
          introTimeline,
          query('[data-animate="hero-line"]'),
          { y: 50, autoAlpha: 0, duration: 0.7, stagger: 0.1 },
          0.16
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-cta"]'),
          { y: 50, autoAlpha: 0, duration: 0.52 },
          '-=0.35'
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-state-card"]'),
          { y: 24, autoAlpha: 0, duration: 0.52, stagger: 0.08 },
          '-=0.24'
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-float"]'),
          { y: 20, autoAlpha: 0, duration: 0.55, stagger: 0.14 },
          '-=0.28'
        );

        // ── Hero parallax background (scrub) ──
        const heroBg = section.querySelector<HTMLElement>('img');
        if (heroBg) {
          gsap.fromTo(
            heroBg,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }

        // ── Looping float tweens, paused when out of view ──
        const floatingElements = query('[data-animate="hero-float"]');
        const floatingTween =
          floatingElements.length > 0
            ? gsap.to(floatingElements, {
                y: -8,
                duration: 2.4,
                stagger: 0.22,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                paused: true,
              })
            : null;

        const stateCards = query('[data-animate="hero-state-card"]');
        const stateCardsTween =
          stateCards.length > 0
            ? gsap.to(stateCards, {
                y: -4,
                duration: 2.1,
                stagger: { each: 0.12, from: 'random' },
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                paused: true,
              })
            : null;

        if (floatingTween || stateCardsTween) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => {
              floatingTween?.play();
              stateCardsTween?.play();
            },
            onEnterBack: () => {
              floatingTween?.play();
              stateCardsTween?.play();
            },
            onLeave: () => {
              floatingTween?.pause();
              stateCardsTween?.pause();
            },
            onLeaveBack: () => {
              floatingTween?.pause();
              stateCardsTween?.pause();
            },
          });
        }
      });

      // ── Content sections ──
      // Second panel parallax scrub for a stronger scroll-synced feel.
      withSection('about', (section, query) => {
        const media = query('[data-animate="media"]')[0];

        if (!media) {
          return;
        }

        gsap.fromTo(
          media,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      createSplitSectionTimeline('about');
      createCardSectionTimeline('growth', { start: 'top 77%' });
      createSplitSectionTimeline('targeting', { start: 'top 78%' });
      createCardSectionTimeline('studies', {
        start: 'top 82%',
        cardY: 40,
        cardStagger: 0.09,
      });
      createSplitSectionTimeline('leadership', { start: 'top 78%' });
      createCardSectionTimeline('specialized', {
        start: 'top 82%',
        cardY: 30,
        cardStagger: 0.07,
      });

      // Desktop pinning: keep studies intro locked while case-study cards pass.
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          withSection('studies', (section) => {
            const intro = section.querySelector<HTMLElement>(
              '[data-pin="studies-intro"]'
            );
            const track = section.querySelector<HTMLElement>(
              '[data-pin-track="studies-track"]'
            );

            if (!intro || !track) {
              return;
            }

            ScrollTrigger.create({
              trigger: section,
              start: 'top top+=96',
              endTrigger: track,
              end: 'bottom bottom',
              pin: intro,
              pinSpacing: true,
              scrub: true,
              anticipatePin: 1,
            });
          });
        },
      });

      // ── FAQ ──
      withSection('faq', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: TOGGLE_ACTIONS,
          },
          defaults: { ease: BASE_EASE },
        });

        appendFrom(
          timeline,
          query('[data-animate="faq-intro"]'),
          { x: -36, autoAlpha: 0, duration: 0.76 },
          0
        );

        appendFrom(
          timeline,
          query('[data-animate="faq-accordion"]'),
          { x: 36, autoAlpha: 0, duration: 0.76 },
          0.05
        );

        appendFrom(
          timeline,
          query('[data-animate="faq-item"]'),
          { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.08 },
          0.22
        );
      });

      // ── Newsletter ──
      withSection('newsletter', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: TOGGLE_ACTIONS,
          },
          defaults: { ease: BASE_EASE },
        });

        appendFrom(
          timeline,
          query('[data-animate="newsletter-shell"]'),
          { y: 22, autoAlpha: 0, scale: 0.985, duration: 0.82 },
          0
        );

        appendFrom(
          timeline,
          query('[data-animate="item"]'),
          { y: 20, autoAlpha: 0, duration: 0.54, stagger: 0.08 },
          0.1
        );

        appendFrom(
          timeline,
          query('[data-animate="cta"]'),
          { y: 18, autoAlpha: 0, duration: 0.45 },
          '-=0.24'
        );
      });

      // ── Footer ──
      withSection('footer', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: TOGGLE_ACTIONS,
          },
          defaults: { ease: BASE_EASE },
        });

        appendFrom(
          timeline,
          query('[data-animate="footer-col"]'),
          { y: 30, autoAlpha: 0, duration: 0.66, stagger: 0.1 },
          0
        );

        appendFrom(
          timeline,
          query('[data-animate="footer-bottom"]'),
          { y: 14, autoAlpha: 0, duration: 0.5 },
          '-=0.2'
        );
      });

      // ── Hover interactions ──
      if (supportsHover) {
        hoverCleanups.push(
          setupLiftHover(gsap.utils.toArray<HTMLElement>('[data-hover="lift"]'))
        );
        hoverCleanups.push(
          setupTiltHover(gsap.utils.toArray<HTMLElement>('[data-hover="tilt"]'))
        );
        hoverCleanups.push(
          setupGlowHover(gsap.utils.toArray<HTMLElement>('[data-hover="glow"]'))
        );
      }

      // Refresh after layout settles
      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 320);

      // useGSAP auto-reverts the gsap context; clean up event listeners here
      return () => {
        window.clearTimeout(refreshTimer);
        hoverCleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: containerRef }
  );

  return <div ref={containerRef} />;
}

'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

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
    const onMove = (event: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

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
    };

    const onLeave = () => {
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

    element.addEventListener('mousemove', onMove);
    element.addEventListener('mouseleave', onLeave);

    cleanups.push(() => {
      element.removeEventListener('mousemove', onMove);
      element.removeEventListener('mouseleave', onLeave);
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
        once: true,
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
        once: true,
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

export default function LandingAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canAnimate =
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canAnimate) {
      return;
    }

    const supportsHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    const hoverCleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      const header = document.querySelector<HTMLElement>(
        '[data-section="header"]'
      );
      if (header) {
        gsap.from(header, {
          y: -10,
          autoAlpha: 0,
          duration: 0.42,
          ease: BASE_EASE,
        });
      }

      withSection('hero', (section, query) => {
        const introTimeline = gsap.timeline({ defaults: { ease: BASE_EASE } });

        appendFrom(
          introTimeline,
          query('[data-animate="hero-line"]'),
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.1,
          },
          0.2
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-cta"]'),
          { y: 20, autoAlpha: 0, duration: 0.52 },
          '-=0.35'
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-state-card"]'),
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.52,
            stagger: 0.08,
          },
          '-=0.24'
        );

        appendFrom(
          introTimeline,
          query('[data-animate="hero-float"]'),
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.14,
          },
          '-=0.28'
        );

        const floatingElements = query('[data-animate="hero-float"]');
        if (floatingElements.length > 0) {
          gsap.to(floatingElements, {
            y: -8,
            duration: 2.4,
            stagger: 0.22,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        const stateCards = query('[data-animate="hero-state-card"]');
        if (stateCards.length > 0) {
          gsap.to(stateCards, {
            y: -4,
            duration: 2.1,
            stagger: {
              each: 0.12,
              from: 'random',
            },
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        gsap.from(section, {
          autoAlpha: 0,
          duration: 0.6,
          ease: BASE_EASE,
        });
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

      withSection('faq', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
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

      withSection('newsletter', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
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

      withSection('footer', (section, query) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            once: true,
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
    });

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 320);

    return () => {
      window.clearTimeout(refreshTimer);
      hoverCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return null;
}

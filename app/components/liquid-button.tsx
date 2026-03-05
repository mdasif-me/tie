import styled from 'styled-components';

export default function LiquidButton({
  className,
  btn_className,
  children,
}: Readonly<{
  className?: string;
  btn_className?: string;
  children: React.ReactNode;
}>) {
  return (
    <StyledWrapper className={className}>
      <button className={`liquid-glass ${btn_className}`}>{children}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .liquid-glass {
    position: relative;
    padding: 0.5em 1.8em;
    font-weight: bold;
    border-radius: 100vmax;
    isolation: isolate;
    background-color: rgb(255 255 255 / 5%);
    color: rgb(255 255 255 / 90%);
    text-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    box-shadow:
      0 6px 6px rgb(0 0 0 / 10%),
      0 0 20px rgb(0 0 0 / 5%);
    text-align: center;
    user-select: none;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
    }

    /* // Glass distortion effect */
    &::before {
      backdrop-filter: blur(3px);
      filter: url(#glass-distortion);
      z-index: -1;
    }

    /* // Outline shine */
    &::after {
      box-shadow:
        inset 2px 2px 1px 0 rgb(255 255 255 / 10%),
        inset -1px -1px 1px 1px rgb(255 255 255 / 10%);
    }

    &.dragging {
      cursor: grabbing;
    }
  }
`;

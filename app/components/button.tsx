import styled from 'styled-components';

const Button = ({
  children,
  is_arrow = true,
  className,
}: Readonly<{
  children: React.ReactNode;
  is_arrow?: boolean;
  className?: string;
}>) => {
  return (
    <StyledWrapper className={className}>
      <button>
        {children}
        {is_arrow && (
          <div className='arrow-wrapper'>
            <div className='arrow' />
          </div>
        )}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --primary-color: #03c3f9;
    --secondary-color: #fff;
    --hover-color: #05183a;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 100px;
    color: var(--secondary-color);
    padding: 0.8em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
  }

  button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  button .arrow::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  button:hover {
    background-color: var(--hover-color);
  }

  button:hover .arrow {
    background: var(--secondary-color);
  }

  button:hover .arrow:before {
    right: 0;
  }
`;

export default Button;

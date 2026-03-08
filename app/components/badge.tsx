type verient = 'primary' | 'secondary' | 'danger' | 'default';

const Badge = ({
  text,
  varient,
  className,
}: {
  text: string;
  varient?: verient;
  className?: string;
}) => {
  if (!text) return null;
  const variant = varient || 'default'; // default style
  let style = '';
  switch (variant.toLowerCase()) {
    case 'primary':
      style = 'bg-primary/10 text-primary';
      break;
    case 'secondary':
      style = 'bg-secondary/10 text-secondary';
      break;
    case 'danger':
      style = 'bg-red-100 text-red-500';
      break;
    default:
      style = 'bg-gray-100 text-gray-500';
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${style} text-xs font-medium ${className || ''}`}
    >
      {text}
    </div>
  );
};

export default Badge;

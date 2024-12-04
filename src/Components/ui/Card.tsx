const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
  
export default Card;

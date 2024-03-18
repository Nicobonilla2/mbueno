interface DynamicSvgIconProps {
    imagePath: string;
    className?: string;
    alt?: string;
  }
  
  const DynamicSvgIcon: React.FC<DynamicSvgIconProps> = ({imagePath, className = '', alt = '' }) => {
  
    return <img src={imagePath} className={className} alt={alt} />;
  };
  
  export default DynamicSvgIcon;
  
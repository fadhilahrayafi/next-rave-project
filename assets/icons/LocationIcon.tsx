import { IconProps } from "@/types/Icon";

const LocationIcon: React.FC<IconProps> = ({ style, ...rest }) => {
    return (
      <div style={{width: 'auto', height: 'auto'}}>
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                id="Layer_1" 
                viewBox="0 0 48 48" 
                data-name="Layer 1" 
                className="injected-svg icon" 
                data-src="/assets/shared/icons/UI-places.svg" 
                {...rest}
                >
                     <path d="M24,4A14.42,14.42,0,0,0,12.27,26.82L22.9,43.4a1.31,1.31,0,0,0,2.2,0L35.77,26.76A14.42,14.42,0,0,0,24,4Zm0,21a6.56,6.56,0,1,1,6.56-6.55A6.56,6.56,0,0,1,24,25Z"></path>
            </svg>
      </div>
    );
  };
  
  export default LocationIcon;
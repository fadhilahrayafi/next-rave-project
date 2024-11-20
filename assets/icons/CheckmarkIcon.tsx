import { IconProps } from "@/types/Icon";

const CheckmarkIcon: React.FC<IconProps> = ({ style, ...rest }) => {
  return (
    <div style={{width: 'auto', height: 'auto'}}>
        <svg 
            {...rest}
            xmlns="http://www.w3.org/2000/svg" 
            id="Layer_1" 
            data-name="Layer 1" 
            viewBox="0 0 48 48" 
            className="injected-svg icon detailed-highlights-item__icon detailed-highlights-item__icon--large" 
            data-src="/assets/shared/icons/UI-tick.svg">
                <path d="M42.4,10.54a3.17,3.17,0,0,0-4.49,0L17.72,30.73l-9-9a3.17,3.17,0,0,0-4.49,4.48L15.47,37.46a3.17,3.17,0,0,0,4.49,0L42.4,15A3.19,3.19,0,0,0,42.4,10.54Z"></path>
        </svg>
    </div>
  );
};

export default CheckmarkIcon;
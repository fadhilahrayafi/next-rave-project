import { IconProps } from "@/types/Icon";

const DateIcon: React.FC<IconProps> = ({ style, ...rest }) => {
    return (
      <div style={{width: 'auto', height: 'auto'}}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            id="Layer_1" 
            data-name="Layer 1" 
            viewBox="0 0 48 48" 
            className="injected-svg icon icon-with-description__icon" 
            {...rest}
            data-src="/assets/shared/icons/UI-calendar.svg">
                <path d="M24,26a2,2,0,0,0,2-2h0a2,2,0,0,0-4,0h0A2,2,0,0,0,24,26Z"></path>
                <path d="M32,26a2,2,0,0,0,2-2h0a2,2,0,0,0-4,0h0A2,2,0,0,0,32,26Z"></path>
                <path d="M38,8H36V6a2,2,0,0,0-4,0V8H16V6a2,2,0,0,0-4,0V8H10a4,4,0,0,0-4,4L6,40a4,4,0,0,0,4,4H38a4,4,0,0,0,4-4V12A4,4,0,0,0,38,8Zm0,30a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V18H38Z"></path>
                <path d="M16,26a2,2,0,0,0,2-2h0a2,2,0,0,0-4,0h0A2,2,0,0,0,16,26Z"></path>
        </svg>
      </div>
    );
  };
  
  export default DateIcon;
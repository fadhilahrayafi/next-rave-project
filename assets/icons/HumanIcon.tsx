import { IconProps } from "@/types/Icon";

const HumanIcon: React.FC<IconProps> = ({ style, ...rest }) => {
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
                <path d="M31.11,5.62a4.24,4.24,0,1,1-4.24-4.23A4.25,4.25,0,0,1,31.11,5.62ZM13.63,44.36,19,17.05l-3.8,1.48v5.08a2.12,2.12,0,0,1-4.24,0v-5a4.25,4.25,0,0,1,2.59-3.91l8.1-3.43A4.54,4.54,0,0,1,27.3,13l2.11,3.38a10.3,10.3,0,0,0,7.3,4.93,2.12,2.12,0,0,1-.61,4.19,15.48,15.48,0,0,1-9.23-5.1L25.6,26.78l3.14,3a4.25,4.25,0,0,1,1.31,3.07V44.77a2.12,2.12,0,0,1-4.23,0V34.19L21.37,30,17.94,45.23a2.12,2.12,0,0,1-2.07,1.65H15.7A2.1,2.1,0,0,1,13.63,44.36Z" fillRule="evenodd"></path>
        </svg>
      </div>
    );
  };
  
  export default HumanIcon;
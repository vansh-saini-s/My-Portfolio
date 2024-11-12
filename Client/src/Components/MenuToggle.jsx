const Path = (props) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="black" 
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle, isOpen }) => (
    <button onClick={toggle} className="flex items-center justify-center p-2 text-white">
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5" // Top line
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }, // X line when open
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423" // Middle line
          className="middle"
          opacity={isOpen ? 0 : 1}
        />
        <Path
          d="M 2 16.346 L 20 16.346" // Bottom line
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }, // X line when open
          }}
        />
      </svg>
    </button>
  );
  
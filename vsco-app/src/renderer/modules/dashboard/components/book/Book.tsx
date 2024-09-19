const colors = {
  default: '#D58936',
  jasper: '#d73a4a',
  glaucous: '#6a7f8c',
  bronze: '#D58936',
  brown: '#A44200',
  satinSheenGold: '#A59132',
} as const;

// Create a type for the keys of the colors object
type ColorKey = keyof typeof colors;

interface BookProperties {
  coverColor: ColorKey;
}

export default function Book({ coverColor }: BookProperties) {
  // Get the color value from the colors object
  const backgroundColor = colors[coverColor];

  return (
    <div
      className="relative transform w-28 h-40 rounded overflow-hidden shadow-xl"
      style={{ backgroundColor }}
    >
      <div className="absolute top-0 left-0 w-0.5 h-full bg-white bg-opacity-10 border-r-2 border-l-2 border-black" />
      <div className="relative z-10 p-4 h-full">
        <h2 className="text-black">Book Title</h2>
        <p className="text-black">Author Name</p>
      </div>
    </div>
  );
}

export default function DoodleBackground() {
  return (
    <div 
      className="fixed inset-0 z-[-2] pointer-events-none opacity-[0.25]"
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
}

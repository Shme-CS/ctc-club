/**
 * Avatar data structure
 */
interface Avatar {
  letter: string;
  gradient: string;
}

/**
 * Avatar data with gradient colors
 */
const avatars: Avatar[] = [
  { letter: 'A', gradient: 'from-blue-400 to-blue-500' },
  { letter: 'B', gradient: 'from-purple-400 to-purple-500' },
  { letter: 'C', gradient: 'from-indigo-400 to-indigo-500' },
  { letter: 'D', gradient: 'from-pink-400 to-pink-500' },
];

function AvatarCircle({ letter, gradient }: Avatar) {
  return (
    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border-[3px] border-white flex items-center justify-center text-white font-bold text-base shadow-md`}>
      {letter}
    </div>
  );
}

function CountText() {
  return (
    <p className="text-base text-gray-600">
      <span className="font-bold text-gray-900">5,000+</span> students already learning
    </p>
  );
}

export function AvatarGroup() {
  return (
    <div className="flex items-center gap-4 pt-2">
      <div className="flex -space-x-3">
        {avatars.map((avatar) => (
          <AvatarCircle key={avatar.letter} {...avatar} />
        ))}
      </div>
      <CountText />
    </div>
  );
}

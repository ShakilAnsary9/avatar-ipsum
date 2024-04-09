import Image from "next/image";
import avatarlist from "./AvatarList";

const AvatarCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
      {avatarlist.map((avatar, index) => (
        <div
          className="p-4 border dark:border-slate-700 rounded-lg"
          key={index}
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Render JPEG avatar */}
            <div>
              <Image
                className="rounded-lg"
                src={`/images/avatars/webp/${avatar.slug}.webp`}
                alt={avatar.name}
                width={640}
                height={640}
              />
            </div>

            {/* Render PNG avatar */}
            <div>
              <Image
                className="rounded-lg bg-slate-300 hover:bg-pngbg transition duration-600 ease-in-out"
                src={`/images/avatars/png/${avatar.slug}.png`}
                alt={avatar.slug}
                width={640}
                height={640}
              />
            </div>
          </div>
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div>
              <h6 className="font-bold">{avatar.name}</h6>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <path
                      d="m14.162 18.488l-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72"
                      opacity=".5"
                    />
                    <path d="m9.837 14.162l4.325-4.325" />
                    <path
                      d="m9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
                      opacity=".5"
                    />
                  </g>
                </svg>
                <small className="text-slate-500 underline hover:text-primary/70">
                  <a href={avatar.authorLink} target="_blank">
                    {avatar.authorName}
                  </a>
                </small>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`/images/avatars/jpeg/${avatar.slug}.jpg`}
                download
                className="flex gap-2 items-center hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" />
                    <path
                      d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"
                      opacity=".5"
                    />
                    <path
                      strokeLinejoin="round"
                      d="M17 11V2m0 9l3-3m-3 3l-3-3"
                    />
                  </g>
                </svg>
                <span className="text-[10px] sm:text-base">JPEG</span>
              </a>
              <a
                href={`/images/avatars/png/${avatar.slug}.png`}
                download
                className="flex gap-2 items-center hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  >
                    <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" />
                    <path
                      d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"
                      opacity=".5"
                    />
                    <path
                      stroke-linejoin="round"
                      d="M17 11V2m0 9l3-3m-3 3l-3-3"
                    />
                  </g>
                </svg>
                <span className="text-[10px] sm:text-base">PNG</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarCard;

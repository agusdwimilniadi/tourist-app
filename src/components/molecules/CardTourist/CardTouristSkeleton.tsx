import Image from '../../atoms/Images';

const CardTouristSkeleton = () => {
  return (
    <div className=" shadow-lg flex-row sm:flex-row sm:items-center justify-start p-3 gap-3">
      <div>
        <Image
          src="#"
          alt="profile-user"
          className="w-20 rounded-full mx-auto animate-pulse"
        />
      </div>
      <div className="flex flex-col gap-4 mx-10">
        <div className="flex flex-col gap-4 my-5">
          <div className="animate-pulse w-[30%] h-3 bg-slate-300"></div>
          <div className="animate-pulse w-[80%] h-3 bg-slate-300"></div>
          <div className="animate-pulse w-[30%] h-3 bg-slate-300"></div>
          <div className="animate-pulse w-[80%] h-3 bg-slate-300"></div>
          <div className="animate-pulse w-[30%] h-3 bg-slate-300"></div>
          <div className="animate-pulse w-[80%] h-3 bg-slate-300"></div>
        </div>
        <div className="flex gap-3">
          <div className="animate-pulse w-full h-10 bg-slate-300"></div>
          <div className="animate-pulse w-full h-10 bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CardTouristSkeleton;

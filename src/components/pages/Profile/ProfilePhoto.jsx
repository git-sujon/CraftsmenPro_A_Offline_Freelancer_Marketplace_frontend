import Image from 'next/image';

const ProfilePhoto = ({image}) => {
    return (
        <Image
        className="rounded-full bg-green-50 w-[100px] h-[100px] border-2 border-slate-950"
        src={image}
       
        width={100}
        height={100}
        alt={"profile photo"}
      />
    );
};

export default ProfilePhoto; 
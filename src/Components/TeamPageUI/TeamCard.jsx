import React,{useState} from 'react'

function TeamCard({name, photoLink, facebook, github, linkedin }) {
  const [hover, sethover] = useState(false);
  return (
    <div className='w-[15rem] relative' onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}}>
      <img src='https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/n9una0fprvoal148ndh2.jpg?_s=public-apps' alt='teampagecard' className=''/>
      <div className={`absolute  left-[2.6rem] top-[3rem] w-[10rem] h-[10rem]`}>
          <img src={photoLink} alt='hero' className={`object-cover rounded-[100%] border-2 transition-all duration-500 ease-in-out mx-auto ${hover?"w-[80%] h-[80%]":"w-full h-full"}`} style={{borderColor:"#BC0404"}}/>
          <div className={`transition-all duration-500 ease-in-out mx-auto flex justify-center gap-[1rem] ${hover?"opacity-100":"opacity-0"} mt-[.5rem]`}>
            <a href={github} className='w-[1.8rem] h-[1.8rem]'><img src='https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876324/pickjnwr5e23ommeghr9.jpg?_s=public-apps' alt='github' className='w-full h-full object-cover'/></a>
            <a href={facebook} className='w-[1.8rem] h-[1.8rem]'><img src='https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876323/fnoakp6rpiutts7pcvhw.jpg?_s=public-apps' alt='github' className='w-full h-full object-cover'/></a>            
            <a href={linkedin} className='w-[1.8rem] h-[1.8rem]'><img src='https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/moqbrsovcdpdzpsqsgyi.jpg?_s=public-apps' alt='github' className='w-full h-full object-cover'/></a>            
          </div>
      </div>
      <div className='flex flex-col justify-center items-center absolute bottom-[3rem] left-[3.8rem]'>
        <div className={`text-[1.3rem] font-semibold`} style={{color:"#BC0404", fontFamily:"DM serif Display"}}>{name}</div>
        <div className='text-[.8rem]' style={{fontFamily:"Alata", color:"#B47A7B"}}>DEVELOPER</div>
        <hr className={`h-[.12rem] w-[50%] border-orange-500 transition-all duration-300 ease-in-out ${hover?"opacity-100":"opacity-0"}`}/>
      </div>
    </div>
  )
}

export default TeamCard;
export const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <section className='flex h-[550px] py-0 px-[60px] bg-[#000] text-[#fff]'>
      <div className='w-[50%] align_center justify-center flex-col text-center'>
        <h2 className='text-[45px] font-[700] mb-[15px]'>{title}</h2>
        <p className='text-[24px] mb-[32px] w-[70%]'>{subtitle}</p>
        <a className='py-[16px] px-[32px] uppercase tracking-[1.5px] font-[700] border-[2px] border-solid border-[#fff] bg-[#fff] text-[#000] hover:bg-transparent hover:text-[#fff] transition-all duration-300 ease-in-out rounded-[32px]' href=''>{link}</a>
      </div>
      <div className='align_center w-[50%]'>
        <img src={image} alt='' className='h-[500px] transition-all ease-in-out duration-300 hover:scale-105' />
      </div>
    </section>
  )
}

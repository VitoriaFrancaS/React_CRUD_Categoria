import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";


function Footer() {
 
  

    return (
      <>
          <div className="flex justify-center bg-purple-900 text-white">
            <div className="container flex flex-col items-center py-4">
              <p className='text-xl font-bold'>Loja de Games | Copyright: 2024 </p>
              <p className='text-lg'>Acesse meu portifólio:</p>
              <div className='flex gap-2'>
                   <GithubLogo size={48} weight='bold' />
                   <LinkedinLogo size={48} weight='bold' />
             
              </div>
            </div>
          </div>
        </>
    )
  }
  
  export default Footer
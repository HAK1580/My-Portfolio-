import React from 'react'
const Skills = () => {
    const skills=[
        {   id:1,
            title:"HTML",
             image:"skills/html.svg" 
        },
        {   id:2,
            title:"CSS",
             image:"skills/css.svg" 
        },
        {   id:3,
            title:"Javascript",
             image:"skills/javascript.svg" 
        },
        {   id:4,
            title:"React Js",
             image:"skills/react-js.svg" 
        },
        {   id:5,
            title:"Tailwind CSS",
             image:"skills/tailwind-css.svg" 
        },
        {   id:6,
            title:"Github",
             image:"skills/github.svg" 
        },
        {   id:7,
            title:"Redux Toolkit / RTK  (State Management)",
             image:"skills/redux.svg" 
        },
    ]

  return (
    <div className='my-10'>
        <h1 className='flex  justify-center items-center  my-10 sm:text-[2.5rem] lg:text-[3.7rem] text-[1.6rem]' >
            Professional Skills
        </h1>
       <div className="skill-set flex flex-col gap-6">
<p className='w-[90%] md:text-[1.2rem] mb-10 mx-auto'> 
  Skilled in <span class="text-blue-400">React.js, Redux Toolkit, JavaScript, and Tailwind CSS</span>, I specialize in building responsive, high-performance web interfaces with clean UI and smooth state management.
 </p>
        {skills.map((skill)=>{
            return (

            <div key={skill.id} className="skill flex  w-[90%] gap-3.5 lg:gap-8  mx-auto ">
            <img className='w-8 lg:w-12 cursor-pointer ' src={skill.image} alt="" />
            <h1 className='text-[1.25rem] lg:text-[1.5rem]' >{skill.title} </h1>
          </div>
                

)
        })}
       </div>

        
    </div>
  )
}

export default Skills
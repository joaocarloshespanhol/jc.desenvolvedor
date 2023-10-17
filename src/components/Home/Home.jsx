/* eslint-disable no-unused-vars */
import "./Home.css"
import React, { useState } from 'react';
import Logo from '../../assets/Logo/Logo.svg';
import iconPortfolio from '../../assets/Icons/iconPortfolio.svg';
import iconTabeladeprecos from '../../assets/Icons/iconTabeladeprecos.svg';
import iconOrcamento from '../../assets/Icons/iconOrcamento.svg';
import { TypeAnimation } from 'react-type-animation';

export default function Home () {
    return (
        <section id="" className='p-2'>
            <div className=''>
                <img className="w-[520px] lg:w-[280px] xl:w-[320px] mx-auto"  src={Logo} alt="" />
                    <div className="flex flex-col mt-32 lg:mt-12">
                        <TypeAnimation  sequence={[
                            'Seja bem vindo',
                            2000,
                            'Confira os links',
                            2000,
                            'Seja bem vindo',
                            2000,
                            ]}
                            speed={50}
                            className={`
                            text-white text-[100px] lg:text-[60px] font-primary font-semibold
                            text-transparent bg-clip-text bg-gradient-to-r from-[#29ACD7] to-[#3C82E8]  
                            `}
                            wrapper='span'
                            repeat={Infinity}
                            />
                        <span className="text-[24px] lg:text-[14px] font-primary font-medium">
                            Solicite um orçamento pra hoje mesmo, respondemos em <b>30 min!</b>
                        </span>
                    </div>

                        <div className='mt-32 lg:mt-10 flex flex-col gap-4 lg:gap-2 mx-8'>
                            <a href='https://jcportfolio2.vercel.app/'
                                    target='_blank'
                                    rel="noopener noreferrer">
                                        <button className={`
                                            flex w-[825px] h-[140px] lg:w-[620px] lg:h-[60px] lg:mx-auto bg-white
                                            rounded-full gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 shadow-md
                                            `}
                                            >
                                                
                                                <img className="pb-0.5 w-[50px] lg:w-[20px]" src={iconPortfolio} alt=""></img>
                                                    <span className='text-[38px] lg:text-[14px] text-[#051D34] font-primary font-extrabold'>Portfólio</span>
                                        </button></a>
                            
                            <a href='https://www.instagram.com/jc.desenvolvedor/'
                                target='_blank'
                                rel="noopener noreferrer">
                                        <button className={`
                                            w-[825px] h-[140px] lg:w-[620px] lg:h-[60px] lg:mx-auto bg-white
                                            rounded-full flex gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 shadow-md
                                            `}
                                            >
                                                <img className="pb-0.5 w-[60px] lg:w-[20px]" src={iconTabeladeprecos} alt=""></img>
                                                    <span className='text-[38px] lg:text-[14px] text-[#051D34] font-primary font-extrabold'>Tabela de Preços</span>
                                        </button></a>
                            
                            <a href='https://api.whatsapp.com/send?phone=5516993074838&text=Ol%C3%A1,%20quero%20solicitar%20um%20orçamento!'
                                target='_blank'
                                rel="noopener noreferrer">
                                            <button className={`
                                            w-[825px] h-[140px] lg:w-[620px] lg:h-[60px] lg:mx-auto bg-white
                                            rounded-full flex gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 shadow-md
                                            `}
                                            >
                                                <img className="pb-0.5 w-[60px] lg:w-[20px]" src={iconOrcamento} alt="iconeMala"></img>
                                                    <span className='text-[38px] lg:text-[14px] text-[#051D34] font-primary font-extrabold'>Solicite Orçamento</span>
                                        </button></a>
                        </div>
            </div>
        </section>
        
    )
}
/* eslint-disable no-unused-vars */
import "./Home.css"
import React, { useState } from 'react';
import Logo from '../../assets/Logo/Logo.svg';
import iconPortfolio from '../../assets/Icons/iconPortfolio.svg';
import iconTabeladeprecos from '../../assets/Icons/iconTabeladeprecos.svg';
import iconOrcamento from '../../assets/Icons/iconOrcamento.svg';
import iconMais from '../../assets/Icons/iconmais.png';
import { TypeAnimation } from 'react-type-animation';

export default function Home () {
    return (
        <section id="" className='p-2 mt-32'>
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
                            text-[100px] lg:text-[60px] font-primary font-semibold
                            text-transparent bg-clip-text bg-gradient-to-r from-[#29ACD7] to-[#3C82E8]  
                            `}
                            wrapper='span'
                            repeat={Infinity}
                            />
                        <span className="text-[24px] lg:text-[14px] font-primary font-medium">
                            Solicite um orçamento pra hoje mesmo, respondemos em <b>instantes!</b>
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
                            
                            <a href='#pacotes'
                                >
                                        <button className={`
                                            w-[825px] h-[140px] lg:w-[620px] lg:h-[60px] lg:mx-auto bg-white
                                            rounded-full flex gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 shadow-md
                                            `}
                                            >
                                                <img className="pb-0.5 w-[60px] lg:w-[20px]" src={iconTabeladeprecos} alt=""></img>
                                                    <span className='text-[38px] lg:text-[14px] text-[#051D34] font-primary font-extrabold'>Consultar Preços</span>
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
                                                    <span className='text-[38px] lg:text-[14px] text-[#051D34] font-primary font-extrabold'>Solicitar Orçamento</span>
                                        </button></a>
                        </div>
                        
                        <div className="mt-32 w-[480px] h-1 rounded-3xl bg-gradient-to-r from-[#29ACD7] to-[#3C82E8] mx-auto"> </div>
            </div>

    

            <div id="pacotes" className="font-primary font-semibold text-[46px] text-white mt-20 text-center mx-auto">
                        
                            <div className="flex justify-center mx-auto gap-6">
                            <h1 className="font-semibold">
                                Preços de pacotes <b className="italic">especiais</b>
                            </h1>
                            <div>
                                <img src={iconMais}>
                                </img>
                            </div>
                            </div>
                            <div className="text-[30px] lg:text-[20px] lg:text-end font-light text-zinc-300 text-start flex justify-center mx-auto">
                                <span>Escolha o pacote ideal para você. <br/>
                                E se precisar de preços para serviços específicos<br/>
                                ou qualquer dúvida, é só entrar em contato!</span>
                            </div>
                        
                    </div>
            <div className="mt-10">
                <div className="flex flex-col justify-center items-center lg:flex-row gap-2">

                <div className="w-[720px] h-[920px] bg-white rounded-3xl ">
                    <div>

                    </div>

                </div>

                <div className="w-[720px] h-[920px] bg-white rounded-3xl shadow-2xl">
                </div>
                <div className="w-[720px] h-[920px] bg-white rounded-3xl ">
                </div>

                </div>

            </div>
        </section>
        
    )
}
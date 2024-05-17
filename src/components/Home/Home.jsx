/* eslint-disable no-unused-vars */
import "./Home.css"
import React, { useState } from 'react';
import Logo from '../../assets/Logo/Logo.svg';
import iconPortfolio from '../../assets/Icons/iconPortfolio.svg';
import iconTabeladeprecos from '../../assets/Icons/iconTabeladeprecos.svg';
import iconOrcamento from '../../assets/Icons/iconOrcamento.svg';
import iconMais from '../../assets/Icons/iconmais.png';
import iconcheck from '../../assets/Icons/iconcheck.svg';
import { TypeAnimation } from 'react-type-animation';

export default function Home () {
    return (
        <section id="" className='p-8 mt-20'>
            <div className=''>
                <img className="w-[520px] lg:w-[280px] xl:w-[320px] mx-auto"  src={Logo} alt="" />
                    <div className="flex flex-col mt-32 lg:mt-12 p-2">
                        <TypeAnimation  sequence={[
                            'Seja bem vindo',
                            2000,
                            'Escolha o pacote ideal para você',
                            2000,
                            'Seja bem vindo',
                            2000,
                            ]}
                            speed={50}
                            className={`
                            text-[80px] lg:text-[60px] font-primary font-semibold
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
                                                    <span className='text-[28px] lg:text-[16px] text-[#051D34] font-primary font-semibold'>Portfólio</span>
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
                                                    <span className='text-[28px] lg:text-[16px] text-[#051D34] font-primary font-semibold'>Consultar Preços</span>
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
                                                    <span className='text-[28px] lg:text-[16px] text-[#051D34] font-primary font-semibold'>Solicitar Orçamento</span>
                                        </button></a>
                        </div>
                        
                        <div className="mt-32 lg:mt-20 w-[480px] h-1 rounded-3xl bg-gradient-to-r from-[#29ACD7] to-[#3C82E8] mx-auto"> </div>
            </div>

    

            <div id="pacotes" className="font-primary font-semibold text-[46px] text-white mt-20 text-center mx-auto">
                        
                            <div className="flex justify-center mx-auto gap-6">
                            <h1 className="font-semibold lg:text-[38px] xl:text-[42px]">
                                Preços de pacotes <b className="italic">especiais</b>
                            </h1>
                            <div>
                                <img src={iconMais}>
                                </img>
                            </div>
                            </div>
                            <div className="text-[30px] lg:text-[16px] lg:text-end font-light text-zinc-300 text-start flex justify-center mx-auto">
                                <span>Escolha o pacote ideal para você. <br/>
                                E se precisar de preços para serviços específicos<br/>
                                ou qualquer dúvida, é só entrar em contato!</span>
                            </div>
                        
                    </div>
            <div className="mt-10">
                <div className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-2 xl:gap-8">

                <div className="w-[720px] h-[1080px] lg:w-[320px] lg:h-[480px] bg-gradient-to-r from-[#8E6DE7] to-[#3C82E8] rounded-3xl shadow-2xl flex flex-col hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="w-full bg-white rounded-t-3xl box-shadow h-[120px] lg:h-[60px] font-primary text-[42px] lg:text-[20px]">
                        <div className="text-[#051D34] font-extrabold mt-7 lg:mt-4 ">
                            Identidade Visual
                        </div>
                        <div className="mt-20 lg:mt-8 text-[98px] lg:text-[32px] xl:text-[42px] font-extrabold">
                            <span className="text-[48px] lg:text-[12px]">R$</span> 199,99
                        </div>
                        <div className="flex flex-col items-start mx-20 gap-8 lg:gap-2 xl:gap-3 lg:w-full lg:mx-6 mt-6 text-zinc-300">
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Logotipo (Desenvolvimento de 2 opções)

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Sublogotipo (Marca d’agua)

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Paleta de cores

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Tipografia

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Papel timbrado
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Cartão de visitas
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Rodadas de revisões e ajustes
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Arquivos finais em formato vetorial
                            </div>
                        </div>
                        <a href='https://api.whatsapp.com/send?phone=5516993074838&text=Ol%C3%A1,%20quero%20solicitar%20um%20orçamento!'
                                target='_blank'
                                rel="noopener noreferrer">
                                        <button className={`
                                            flex mx-auto mt-10 xl:mt-6 w-[560px] h-[98px] lg:w-[180px] lg:h-[40px] xl:w-[260px] xl:h-[40px] lg:mx-auto bg-white
                                            rounded-full gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-zinc-300 duration-300 shadow-md
                                            `}
                                            >
                                                    <span className='text-[28px] xl:text-[12px] lg:text-[10px] text-[#051D34] font-primary font-bold'>Pedir info pelo whatsapp</span>
                                        </button></a>
                        </div>
                    </div>
                <div className="w-[740px] h-[1100px] lg:w-[360px] lg:h-[490px] xl:w-[370px] xl:h-[520px] bg-gradient-to-r from-[#8E6DE7] to-[#3C82E8] rounded-3xl shadow-2xl flex flex-col hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="w-full bg-white rounded-t-3xl box-shadow h-[120px] lg:h-[60px] font-primary text-[42px] lg:text-[20px]">
                        <div className="text-[#051D34] font-extrabold mt-7 lg:mt-4">
                            Identidade Visual + Site
                        </div>
                        <div className="mt-20 lg:mt-8 text-[98px] lg:text-[32px] xl:text-[42px] font-extrabold">
                            <span className="text-[48px] lg:text-[12px]">R$</span> 539,99
                        </div>
                        <div className="flex flex-col items-start mx-20 gap-8 lg:gap-2 xl:gap-3 lg:w-full lg:mx-6 mt-6 text-zinc-300">
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Logotipo e Sublogotipo (3 opções)

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Paleta de cores e tipografia

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Papel timbrado e cartão de visitas

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Site para até 5 páginas
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Design responsivo e moderno
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Pesquisa de referência e conceitos
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Demonstração do Google Analytics
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Otimização para mecanismos de busca
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Rodadas de revisões e ajustes
                            </div>
                        </div>
                        <a href='https://api.whatsapp.com/send?phone=5516993074838&text=Ol%C3%A1,%20quero%20solicitar%20um%20orçamento!'
                                target='_blank'
                                rel="noopener noreferrer">
                                        <button className={`
                                            flex mx-auto mt-10 xl:mt-6 w-[560px] h-[98px] lg:w-[180px] lg:h-[40px] xl:w-[260px] xl:h-[40px] lg:mx-auto bg-white
                                            rounded-full gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-zinc-300 duration-300 shadow-md
                                            `}
                                            >
                                                    <span className='text-[28px] xl:text-[12px] lg:text-[10px] text-[#051D34] font-primary font-bold'>Pedir info pelo whatsapp</span>
                                        </button></a>
                        </div>
                    </div>
                <div className="w-[720px] h-[1080px] lg:w-[320px] lg:h-[480px] bg-gradient-to-r from-[#8E6DE7] to-[#3C82E8] rounded-3xl shadow-2xl flex flex-col hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="w-full bg-white rounded-t-3xl box-shadow h-[120px] lg:h-[60px] font-primary text-[42px] lg:text-[20px]">
                        <div className="text-[#051D34] font-extrabold mt-7 lg:mt-4">
                            Site ou Landing Page
                        </div>
                        <div className="mt-20 lg:mt-8 text-[98px] lg:text-[32px] xl:text-[42px] font-extrabold">
                            <span className="text-[48px] lg:text-[12px]">R$</span> 399,99
                        </div>
                        <div className="flex flex-col items-start mx-20 gap-8 lg:gap-2 xl:gap-3 lg:w-full lg:mx-6 mt-6 text-zinc-300">
                            <div className="flex text-[24px] lg:text-[12px]  gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                    Design responsivo e moderno

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                    Pesquisa de referência e conceitos


                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Integração com redes sociais
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Otimização para mecanismos de busca  

                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Tags instaladas para métricas
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Site para até 3 páginas
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Reuniões para alinhar espectativas
                            </div>
                            <div className="flex text-[24px] lg:text-[12px] gap-4">
                                <img className="lg:w-3"src={iconcheck}></img>
                                Rodadas de revisão e ajustes
                            </div>
                        </div>
                        <a href='https://api.whatsapp.com/send?phone=5516993074838&text=Ol%C3%A1,%20quero%20solicitar%20um%20orçamento!'
                                target='_blank'
                                rel="noopener noreferrer">
                                        <button className={`
                                            flex mx-auto mt-10 xl:mt-6 w-[560px] h-[98px] lg:w-[180px] lg:h-[40px] xl:w-[260px] xl:h-[40px] lg:mx-auto bg-white
                                            rounded-full gap-4 items-center justify-center
                                            hover:-translate-y-1 hover:scale-110 hover:bg-zinc-300 duration-300 shadow-md
                                            `}
                                            >
                                                    <span className='text-[28px] xl:text-[12px] lg:text-[10px] text-[#051D34] font-primary font-bold'>Pedir info pelo whatsapp</span>
                                        </button></a>
                        </div>
                    </div>
                
                

            </div>

            </div>
            <div className="mt-6">
                <span className="text-[24px] lg:text-[18px] font-primary text-zinc-400">Pagamentos via <b>pix desconto de 5%</b> ou 2x no boleto.</span>
            </div>
            <div className="mt-10 mb-2">
                <span className="text-[28px] lg:text-[12px] font-primary">Copyright © 2024. Todos os direitos reservados.</span>
            </div>
        </section>
        
    )
}
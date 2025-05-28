"use client"

import { useState } from "react";
import Image from "next/image";
import { Phone, Globe, Download, Bell, Copy, Check, X } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import SocialMidia from "@/components/social-midia";
import CardProject from "@/components/card-project";
import ContactLink from "@/components/contact-link";
import SendEmail from "@/components/send-email";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const [downloaded, setDownloaded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hey@sthefanyk.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openNotify = () => {
    setIsOpenNotify(true);
  };

  const closeNotify = () => {
    setIsOpenNotify(false);
  };

  const handleDownload = () => {
    setDownloaded(true)

    setTimeout(() => setDownloaded(false), 2000);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <header className="w-full h-[240px] overflow-hidden">
        <div className="w-full h-full blur-xs">
          <Image
            src={'/header.jpg'}
            alt=""
            width={1000}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <main className={`
        sm:w-132 w-100 px-4
        flex flex-col items-center
        `}>
        <div className={`z-10 -mt-10 p-2 bg-theme-800 rounded-full`}>
          <Image
            src="https://github.com/sthefanyk.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h1 className='my-2 text-2xl'>Sthefany Kimberly</h1>
        <div className="w-full flex flex-col items-center gap-4 text-theme-400">
          <p>Est. 2002 · Paranaguá, PR · she/her</p>
          <p>Software developer · Product Designer</p>
        </div>
        <div className="flex flex-col items-center gap-2 my-2 sm:flex-row">
          <ContactLink
            link="https://sthefanyk.com"
            content="sthefanyk.com"
          >
            <Globe className="text-theme-400" size={20} />
          </ContactLink>
          <span className="hidden sm:block">·</span>
          <ContactLink
            link="#"
            content="+55 41 985213937"
          >
            <Phone className="text-theme-400" size={20} />
          </ContactLink>
        </div>
        <div className="w-full flex gap-2 py-2">
          <a
            href="/curriculo-sthefany-kimberly.pdf"
            download="sthefanyk-curriculo.pdf"
            onClick={handleDownload}
            className={`
              w-10 h-10 p-2 bg-white text-theme-400 rounded-md
              flex justify-center items-center
              hover:bg-theme-200 hover:cursor-pointer
              not-dark:border not-dark:border-theme-450
            `}
          >
            {downloaded ? <Check size={20} /> : <Download size={20} />}
          </a>
          <button
            onClick={handleCopy}
            className={`
              flex-1 h-min p-2 bg-white text-[#070707] font-medium rounded-md
              flex justify-center items-center gap-2
              hover:bg-theme-200 hover:cursor-pointer
              not-dark:border not-dark:border-theme-450
            `}>
            {copied ? <span>Copiado!</span> : <span>hey@sthefanyk.com</span>}
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          <button
            onClick={openNotify}
            className={`
              w-10 h-10 p-2 bg-white text-theme-400 rounded-md
              flex justify-center items-center
              hover:bg-theme-200 hover:cursor-pointer
              not-dark:border not-dark:border-theme-450
            `}
          >
            <Bell size={20} />
          </button>
        </div>
        <div className="flex gap-2 flex-wrap justify-center py-4">
          <SocialMidia
            username="/sthefanyk"
            link="https://github.com/sthefanyk"
          ><Github size={20} /></SocialMidia>
          <SocialMidia
            username="@sthefany_dev"
            link="https://www.linkedin.com/in/sthefanyk/"
          ><Linkedin size={20} /></SocialMidia>
          <SocialMidia
            username="/sthefanyk"
            link="https://www.x.com/sthefany_dev/"
          ><Twitter size={20} /></SocialMidia>
          <SocialMidia
            username="@sthefany_kimberly"
            link="https://www.instagram.com/sthefany_kimberly/"
          ><Instagram size={20} /></SocialMidia>
        </div>
        <div className="flex flex-col gap-4">
          <CardProject
            name="TaskPilot | Gerenciador de tarefas com IA"
            description="Gerenciador de tarefas com integração de IA generativa para dar suporte ao desenvolvimento de software, nela é possível descrever tarefas da forma mais sucinta e deixar a IA atuar como um gerente de projeto experiente refinando a tarefa."
            imageUrl="/taskpilot-logo.png"
            projectUrl="https://taskpilot.sthefanyk.com"
          />
          <CardProject
            name="PizzaCore | Dashboard para gestão no estilo iFood."
            description="Sistema de delivery, inspirado em plataformas como iFood e Uber Eats, com foco na gestão de estabelecimentos e controle de pedidos."
            imageUrl="/pizzacore-logo.png"
            projectUrl="https://pizzacore.sthefanyk.com"
          />
          <CardProject
            name="Nutrire | Aplicativo para uma horta comunitária"
            description="Um aplicativo mobile pensado para auxilia na reserva e compra de produtos da horta comunitária da Moradia Estudantil da Unesp Bauru."
            imageUrl="/nutrire-logo.png"
            projectUrl="https://nutrire.sthefanyk.com"
          />
          <CardProject
            name="Inventory | API para genciamento de estoque"
            description="API robusta para gerenciamento de estoque, estruturada com DDD e Clean Architecture, visando modularidade, testabilidade e escalabilidade."
            imageUrl="/inventory-logo.png"
            projectUrl="https://inventory.sthefanyk.com"
          />
          <SendEmail />
        </div>
      </main>
      <footer className="pt-20 pb-15">
        <p className="text-theme-400">© 2025 Linker by @sthefanyk</p>
      </footer>

      {isOpenNotify && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">

          <div className="absolute inset-0 bg-theme-900/50 backdrop-blur-sm" />

          <div className={`
            relative z-30
            p-4 bg-theme-800 rounded-lg
            flex flex-col items-center gap-4
          `}>
            <button
              onClick={closeNotify}
              className="absolute top-2 right-2 text-theme-400 hover:bg-theme-500 p-1 rounded-full"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <div className="w-20 h-20 p-1 bg-theme-800 rounded-full">

              <Image
                src="https://github.com/sthefanyk.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center items-center pb-2">
              <h1 className="text-lg font-medium">Quer saber sobre Sthefanyk?</h1>
              <p className="text-theme-400">Fique por dentro de tudo que é importante</p>
            </div>

            <input
              type="text"
              placeholder="Seu e-mail"
              className="w-100 h-10 p-2 rounded-md bg-theme-500 placeholder:text-theme-300"
            />

            <button className={`
              w-full h-10 p-2 rounded-md bg-theme-450 font-semibold
              hover:bg-theme-400 not-dark:hover:bg-theme-200
            `}>Escrever-se</button>
          </div>
        </div>
      )}

    </div>
  );
}

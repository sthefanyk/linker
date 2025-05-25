export default function SendEmail() {
    return (
        <form className="flex flex-col gap-4 bg-theme-600 rounded-lg p-4 text-sm not-dark:shadow-sm">
            <h2 className="text-lg font-medium">Mande uma mensagem</h2>
            <input type="text"
                placeholder="Seu nome"
                className={`
                w-full h-10 p-2 rounded-md bg-theme-500
                placeholder:text-theme-300
              `}
            />
            <input type="text"
                placeholder="Seu e-mail"
                className={`
                w-full h-10 p-2 rounded-md bg-theme-500
                placeholder:text-theme-300
              `}
            />
            <textarea name="" id=""
                placeholder="Seu mensagem"
                className={`
                w-full h-35 p-2 rounded-md bg-theme-500
                placeholder:text-theme-300
              `}
            ></textarea>
            <button className={`
              w-full h-10 p-2 rounded-md bg-theme-450 font-semibold
              hover:bg-theme-400 not-dark:hover:bg-theme-200
            `}>Enviar</button>
        </form>
    )
}
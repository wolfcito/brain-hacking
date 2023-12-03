export default function Record() {
    return <main className="flex flex-row px-20 my-5">
        <ol className="border-l-2 border-primary dark:border-primary-500">
            {/* <!--First item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                    <h4 className="-mt-2 text-xl font-semibold">1. Fundamentos de React</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                    React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Aprender
                    </button>
                </div>
            </li>
            {/* <!--Second item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                    <h4 className="-mt-2 text-xl font-semibold">2. React: Components</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                    Los componentes funcionales son algunos de los componentes más comunes que se encontrarán al trabajar en React. Estas son simplemente funciones de JavaScript. Podemos crear un componente funcional para React escribiendo una función de JavaScript. Estas funciones pueden o no recibir datos como parámetros. En los componentes funcionales, el valor de retorno es el código JSX para representar en el árbol DOM. Los componentes funcionales también pueden tener un estado que se administra mediante ganchos de React.
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Aprender
                    </button>
                </div>
            </li>
            {/* <!--Third item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                    <h4 className="-mt-2 text-xl font-semibold">3. React: Rendering</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                        
React sigue un enfoque declarativo para renderizar componentes, lo que significa que los desarrolladores especifican cómo debe verse un componente y React se encarga de renderizar el componente en la pantalla. Esto contrasta con un enfoque imperativo, donde los desarrolladores escribirían código para manipular manualmente el DOM (modelo de objetos de documento) para actualizar la interfaz de usuario.
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Aprender
                    </button>
                </div>
            </li>
        </ol>
    </main>
}
const LoginPage = () => {
    
    return (
        <div>
            <h1>{"Sign in"}</h1>
            <p>{"Or Create Account"}</p>
            <form action="" className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input type="text" name="username" id="username" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith"/>
            </form>
          <button> Sign in with Google </button>

        </div>
    )
}

export default LoginPage;
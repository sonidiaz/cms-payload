const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/pratodo.png"
        alt="Pratodo"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold my-4">Iniciar Sesión</h1>
      <form className="flex flex-col">
        <label className="my-2">
          Correo electrónico
          <input
            type="email"
            name="email"
            className="border-2 p-2 rounded-md"
            required
          />
        </label>
        <label className="my-2">
          Contraseña
          <input
            type="password"
            name="password"
            className="border-2 p-2 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login

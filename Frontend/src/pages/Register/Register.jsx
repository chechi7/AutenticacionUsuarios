import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const userData = {
      Username: name,
      Email: email,
      Password: password
    };

    try {
      const result = await register(userData);
      console.log("¡Usuario creado con éxito!", result);
      alert("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
    } catch (err) {
      console.error("Error al registrar:", err);
      alert("Error: " + (typeof err === 'string' ? err : "No se pudo crear la cuenta"));
    }
  }; // <--- Aquí termina handleRegister correctamente

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">Crear Cuenta</h2>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Correo</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-all shadow-lg">
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-600">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
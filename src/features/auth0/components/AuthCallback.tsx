import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthCallback = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      
      console.log('Authorization Code:', code);  // Aquí verás el código

      if (code) {
        try {
          // Enviar el código a tu backend
          // const response = await fetch('tu-backend-url/auth', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({ code })
          // });

          // if (!response.ok) {
          //   throw new Error('Error al procesar el código');
          // }

          // Si todo sale bien, redirige a la página principal
          navigate('/');
        } catch (error) {
          console.error('Error:', error);
          navigate('/login');
        }
      }
    };

    if (isAuthenticated) {
      handleCallback();
    }
  }, [isAuthenticated, navigate]);

  return <div>Procesando autenticación...</div>;
};

export default AuthCallback;
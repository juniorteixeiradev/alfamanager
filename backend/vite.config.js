import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});

module.exports = {
    apps: [
      {
        name: 'nestjs-api',
        script: 'dist/main.js',
        instances: 'max', // Ou um número fixo de instâncias
        exec_mode: 'cluster', // Modo cluster para balanceamento de carga entre instâncias
        watch: false, // Não ativado em produção
        env: {
          NODE_ENV: 'development',
          PORT: 3000,
        }
       
        // Variáveis adicionais podem ser definidas aqui, como variáveis de banco de dados
        // env_development: {
        //   DB_URI: 'mongodb://localhost:27017/dev-db',
        // },
      },
    ],
  };
  
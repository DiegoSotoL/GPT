require("dotenv").config();
const { PERFILES, ROL } = require("../constants/constants").default;

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
});

async function getRespuestaSegunPerfil(messageContent,profile) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: ROL.PERFIL },
        { role: "system", content: PERFILES[profile] },
        { role: "user", content: messageContent }
      ],
      temperature: 0,
      max_tokens: 500,
    });
  
    return response;
  }
  

module.exports = {
  getRespuestaSegunPerfil
};


/*       { role: "user", content: "¿cómo activar be pass en la aplicación bancoestado?\n\npara activar be pass sigue los siguientes pasos:\n\n1. ingresa a tu app bancoestado y selecciona la opción be pass del menú superior derecho.\n\n2. crea tu clave de 6 dígitos.\n\n3. confirma tu número de teléfono en pantalla, para enviarte el código de activación.\n\n4. ingresa el código que recibiste por sms ¡y listo! ya puedes usar tu clave be pass en tus transacciones.\n\nsi tu número de teléfono en paso 3 no es el correcto, será necesario que actualices tus datos seguros en las sucursales de bancoestado y banco estado express." }
 */ 
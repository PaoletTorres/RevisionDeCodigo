const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // se agrega async ya que se esta usando await 
  try{ // se agrega un bloque try-catch para poder capturar el error que se lanza con throw new Error
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); 
   if(!person.ok) throw new Error (`Usario no encontrado`); // se agrega esta instrucción es para lanzar un error de forma intencional 
      const data = await 
      response.json(); // se agrega esta instrucción porque el método fetch utiliza una solicitud HTTP, donde devuelve un objeto response 
      console.log(data);
      $n.textContent = '${data.name}';
      $b.textContent = '${data.blog}';
      $l.textContent = '${data.location}';
} catch (err){ //se agrega catch pprque el error será capturado en la función par amostrar el mensaje en consola 
    handleError(err); 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

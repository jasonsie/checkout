import axios from 'axios';

export default async function payProcessor(params) {
  return await axios
    .get('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
    .then((res) => res)
    .catch((err) => err);
}

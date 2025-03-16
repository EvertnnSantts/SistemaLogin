import bcrypt from 'bcryptjs'

const password = 'teste123';  // A senha que você deseja gerar o hash
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Erro ao gerar o hash:', err);
  } else {
    console.log('Hash gerado:', hash);
  }
});

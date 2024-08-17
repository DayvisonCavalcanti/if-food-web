import * as yup from 'yup';

export const formSchema = yup.object().shape({
  nomeFantasia: yup.string().required('Nome Fantasia é obrigatório'),
  razaoSocial: yup.string().required('Razão Social é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  cnpj: yup.string('CNPJ inválido').required('CNPJ é obrigatório'),
  senha: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
  categoria: yup.string().required('Categoria é obrigatório'),
  rua: yup.string().required('Rua é obrigatório'),
  bairro: yup.string().required('Bairro é obrigatório'),
  numero: yup.string().required('Número é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatória'),
  estado: yup.string().required('estado é obrigatório').max(2, 'Estado deve ter no máximo 2 caracteres'),
  cep: yup.string().required('CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 12345-678'),
});
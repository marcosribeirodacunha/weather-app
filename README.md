<h1 align="center">
  <br>
  <img alt="GitHub Explorer" src="/img-github/logo_light.svg" width="150px">
</h1>

---

<h4 align="center">Sky Forecast é uma aplicação de previsão do tempo que permite que saber como está o clima em qualquer localidade que desejar.</h4>

Basta digitar o nome do local em que deseja para obter diversas informações como clima atual, velocidade do vento, previsões sobre por hora, dia entre outras informações.

<p align="center">
  <img alt="Linguagem mais usada Typescript" src="https://img.shields.io/github/languages/top/sergioricardoml/github-explorer?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
</p>

<p align="center">
  <a href="#recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-os-dados">Sobre os dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img src="/img-github/skyforecast.gif" width="85%">
</p>

# Recursos

- Pesquisar por uma cidade que deseja saber como está o clima / previsão;
- Ver o clima para as ultimas cidades pesquisadas (recentes);
- Selecionar o tema de preferencia (_Light mode_ ou _Dark Mode_);
- Selecionar o tipo de unidade de medida de temperatura (Celsius ou Fahrenheit);
- Selecionar o idioma desejado (Inglês ou Português).
  - Está opção somente se reflete nos dados retornados pelas API's.

# Sobre os dados

Esta aplicação utiliza duas API's públicas para obter os dados apresentados:

## Nominatim

Nominatim é um geocoder open-source que utiliza dados do OpenStreetMap. Com esta API é possível encontrar qualquer localização do planeta Terra por nome ou endereço e coletar diversas informações sobre estas localidades.

Nominatim está sendo utilizado nesta aplicação para pesquisar a latitude e longitude de uma localidade por meio de um nome ou endereço.

Mais informações sobre o Nominatim podem ser encontradas aqui: [https://nominatim.org/](https://nominatim.org/)

## OpenWeather

Os dados meteorológicos são providos pela API da OpenWeather, sendo utilizado em especifico as API's **Current Weather Data**, **One Call API** e **5 Day / 3 Hour Forecast**, todas disponíveis no plano gratuito da plataforma.

Mais informações sobre as API's disponibilizadas pela OpenWeather podem ser encontradas no seguinte link: [https://openweathermap.org/api](https://openweathermap.org/api)

### Ícones

Os ícones aqui utilizados foram providos pelo MET Norway sobre o MIT License (MIT). Copyright (c) 2015-2017 Yr.no.

Para mais informações sobre os ícones utilizados: [https://api.met.no/weatherapi/weathericon/2.0/documentation](https://api.met.no/weatherapi/weathericon/2.0/documentation)

### Observação

**MET Norway**
Os dados meteorológicos da **primeira versão desta aplicação** são providos pela API pública do Instituto Meteorológico Norueguês (The Norwegian Meteorological Institute), sendo utilizado especificamente o produto "Locationforecast" versão 2.0, que provê informações sobre a previsão do tempo de um local especifico.

Mais informações sobre todos os produtos disponíveis pelo MET Norway podem ser encontradas no seguinte link: [https://api.met.no/](https://api.met.no/)

Para informações específicas sobre os o produto "Locationforecast" utilizado:
[https://api.met.no/weatherapi/locationforecast/2.0/documentation](https://api.met.no/weatherapi/locationforecast/2.0/documentation)

# Instalação

```
$ git clone https://github.com/marcosribeirodacunha/weather-app.git
$ cd weather-app

$ yarn
// ou npm install

$ yarn start
// ou npm start
```

## Importante

- Antes de utilizar a aplicação é necessário fazer o cadastro no site da [OpenWeather](https://openweathermap.org/) para obter a chave de acesso a API responsável por prover os dados de previsão do clima.
  - Siga os passos solicitados para o cadastro. Após o cadastro é preciso esperar algumas horas para a ativação das chaves.
  - Após a ativação copie a chave da API encaminhada no email ou na aba `API Keys` de sua conta.
  - Em seguida renomeie o arquivo `.env.example` contido no diretorio raiz do projeto para `.env.local` e substitua o valor `your_api_key` no campo `REACT_APP_API_APPID`.

# Tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

---

# Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

# Sky Forecasts

Saiba como está o clima em qualquer localidade que desejar. Basta digitar o nome do local em que deseja para obter diversas informações como clima atual, velocidade do vento e outras informações.

# Sobre os dados

Esta aplicação utiliza duas API's públicas para obter os dados apresentados:

## Nominatim

Nominatim é um geocoder open-source que utiliza dados do OpenStreetMap. Com esta API é possível encontrar qualquer localização do planeta Terra por nome ou endereço e coletar diversas informações sobre estas localidades.

Nominatim está sendo utilizado nesta aplicação para pesquisar a latitude e longitude de uma localidade por meio de um nome ou endereço.

Mais informações sobre o Nominatim podem ser encontradas aqui: [https://nominatim.org/](https://nominatim.org/)

## MET Norway

Os dados meteorológicos são providos pela API pública do Instituto Meteorológico Norueguês (The Norwegian Meteorological Institute), sendo utilizado especificamente o produto "Locationforecast" versão 2.0, que provê informações sobre a previsão do tempo de um local especifico.

Mais informações sobre todos os produtos disponíveis pelo MET Norway podem ser encontradas no seguinte link: [https://api.met.no/](https://api.met.no/)

Para informações específicas sobre os o produto "Locationforecast" utilizado:
[https://api.met.no/weatherapi/locationforecast/2.0/documentation](https://api.met.no/weatherapi/locationforecast/2.0/documentation)

### Ícones

Os ícones aqui utilizados também foram providos pelo MET Norway sobre o MIT License (MIT). Copyright (c) 2015-2017 Yr.no.

Para mais informações sobre os ícones utilizados: [https://api.met.no/weatherapi/weathericon/2.0/documentation](https://api.met.no/weatherapi/weathericon/2.0/documentation)

# Como utilizar

```
$ git clone https://github.com/marcosribeirodacunha/weather-app.git
$ cd weather-app

$ yarn
// ou npm install

$ yarn start
// ou npm start
```

---

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

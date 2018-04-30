module.exports = {
  title: "Корзина на сайте на движке Тильды",
  type: "object",
  additionalProperties: true,
  properties: {
    "tildaspec-formname": {
      description: "Дескриптор",
      const: "Cart"
    },
    tildapayment: {
      description: "Корзина",
      type: "object",
      additionalProperties: false,
      properties: {
        currency: {
          description: "Валюта",
          type: "string"
        },
        amount: {
          description: "Стоимость",
          type: "integer",
          minimum: 0
        },
        system: {
          description: "ХЗ",
          type: "string"
        },
        prodamount: {
          description: "ХЗ",
          type: "integer",
          minimum: 0
        },
        products: {
          description: "Содержимое корзины",
          additionalItems: false,
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: {
                description: "Название продукта",
                type: "string"
              },
              price: {
                description: "Цена",
                type: "integer",
                minimum: 0
              },
              img: {
                description: "Адрес картинки",
                type: "string"
              },
              amount: {
                description: "Стоимость",
                type: "integer",
                minimum: 0
              },
              quantity: {
                description: "Количество",
                type: "integer",
                minimum: 0
              },
              ts: {
                description: "Когда был добавлен в корзину",
                type: "integer",
                minimum: 0
              }
            },
            required: ["name", "price", "quantity"]
          }
        }
      },
      required: ["products"]
    }
  },
  required: ["tildaspec-formname", "tildapayment"]
}